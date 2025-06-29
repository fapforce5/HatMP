//anal
var room175 = {};
room175.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "anal101":
            nav.bg("175_anal/lube0.jpg");
            chat(28, 175);
            break;
        case "anal102":
            if (gv.get("sissySchoolClassDays") === 0) {
                nav.bg("175_anal/anal0.jpg")
                chat(0, 175);
            }
            else {
                nav.bg("175_anal/anal0_restart.jpg");
                chat(26, 175);
            }
            break;
        case "anal212":
            nav.bg("175_anal/anal212_0.jpg");
            chat(44, 175);
            break;
        case "anal421":
            nav.bg("175_anal/anal421_0.jpg");
            chat(63, 175);
            break;
    }
};

room175.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room175.chatcatch = function (callback) {
    switch (callback) {
        case "anal1":
        case "anal2":
        case "anal3":
        case "anal4":
        case "anal5":
        case "anal11":
        case "anal12":
        case "anal13":
        case "anal14":
        case "anal16":
        case "anal100":
        case "anal102":
        case "anal103":
        case "lube0":
        case "anal212_1":
        case "anal212_2":
        case "anal212_3":
        case "anal212_4":
        case "anal212_5":
        case "anal212_6":
        case "anal212_7":
        case "anal212_9":
        case "anal212_10":
        case "anal212_11":
        case "anal421_1":
        case "anal421_2":
            nav.bg("175_anal/" + callback + ".jpg");
            break;
        case "anal212_3_w":
        case "anal212_5_w":
        case "anal212_7_w":
            var tw = callback.replace("_w", "");
            nav.bg("175_anal/" + tw + ".jpg");
            levels.mod("anal", 15, 999);
            break;
        case "anal212_8":
            nav.bg("175_anal/" + callback + ".gif");
            break;
        case "lube1":
        case "lube2":
        case "lube3":
        case "lube4":
        case "lube5":
        case "lube6":
        case "lube7":
            nav.bg("175_anal/" + callback + g.internal + ".jpg");
            break;
        case "anal10":
            nav.bg("175_anal/" + callback + ".jpg");
            levels.mod("xdress", 20, 999);
            break;
        case "anal15":
            nav.bg("175_anal/" + callback + ".jpg");
            levels.anal(2, false, "f", false, "p");
            break;
        case "anal101":
            nav.bg("175_anal/" + callback + ".jpg");
            levels.anal(2, false, "f", false, "p");
            break;
        case "anal104":
            if (levels.analSize(3).c < 3) {
                nav.bg("175_anal/" + callback + ".jpg");
                chat(24, 175);
            }
            else {
                chat(21, 175);
            }
            break;
        case "endclass":
            nav.bg("175_anal/endclass.jpg");
            if (inv.has("purpleDildo")) {
                chat(23, 175);
            }
            else {
                inv.add("purpleDildo");
                chat(22, 175);
            }
            break;
        case "anal105":
            levels.anal(3, false, "f", false, "p");
            nav.bg("175_anal/endclass.jpg");
            break;
        case "endclassEnd":
            gv.mod("sissySchoolClassDays", 1);
            char.settime(17, 15);
            char.room(201);
            break;
        case "endclassPass101":
            sissy.passclass(true);
            break;
        case "charisma":
            levels.mod("charisma", 20, 999);
            break;
        case "lubenotme":
            g.internal = "";
            break;
        case "lubeme":
            g.internal = "_me";
            break;
        case "lubeEnd":
            inv.addMulti("lube", 3);
            sissy.passclass(true);
            break;
        case "anal212_end":
            levels.anal(4, false, "m", true, "!man");
            sissy.passclass(true);
            break;
        case "anal421_3":
            nav.bg("175_anal/anal421_3.jpg");
            zcl.double(200, 500, .6, "", false);
            nav.button({
                "type": "img",
                "name": "anal421",
                "left": 917,
                "top": 0,
                "width": 1003,
                "height": 1041,
                "image": "175_anal/anal421_3.png"
            }, 210);
            break;
        case "anal421_4":
            nav.bg("175_anal/anal421_4.jpg");
            break;
        case "anal421_5":
            nav.bg("175_anal/anal421_5.jpg");
            nav.killbutton("anal421");
            zcl.double(200, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "anal421",
                "left": 917,
                "top": 0,
                "width": 1003,
                "height": 1041,
                "image": "175_anal/anal421_3.png"
            }, 210);
            break;
        case "anal421_6":
            nav.bg("175_anal/anal421_6.jpg");
            nav.killbutton("anal421");
            zcl.double(200, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "anal421",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "175_anal/anal421_6.png"
            }, 210);
            break;
        case "anal421_7":
            nav.bg("175_anal/anal421_7.jpg");
            nav.kill();
            zcl.displayMain(20, 300, .11, "", true);
            nav.button({
                "type": "img",
                "name": "anal421",
                "left": 289,
                "top": 421,
                "width": 387,
                "height": 489,
                "image": "175_anal/anal421_7.png"
            }, 210);
            break;
        default:
            break;
    }
};

room175.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "p",
            text: "Ok my little butt sluts! Each one of you is going to bend over and take the pink torpedo all the way " +
                "up to 'Porn Star.' After that warm up, we're going to really start having fun with those butts! When I'm " +
                "done with today your colons are going to be hanging out of your huge gaping assholes. Are you ready for " +
                "the most intense pain of your worthless sissy lives?",
            button: [
                { chatID: 1, text: "...", callback: "anal1" }
            ]
        },
        {
            chatID: 1,
            speaker: "p",
            text: "Huh? Did I just cause another sissy to pass out. You sluts are so delicate. I guess I'll have to wake him. " +
                "hmmmmmm. I know!",
            button: [
                { chatID: 2, text: "...", callback: "anal2" }
            ]
        },
        {
            chatID: 2,
            speaker: "p",
            text: "Just going to take off my panties and...",
            button: [
                { chatID: 3, text: "...", callback: "anal3" }
            ]
        },
        {
            chatID: 3,
            speaker: "p",
            text: "SPLASH! Hehehe",
            button: [
                { chatID: 4, text: "...", callback: "anal4" }
            ]
        },
        {
            chatID: 4,
            speaker: "!timothy",
            text: "Bahhh! What. Oooooooo wow! wait. Do I smell pee? ",
            button: [
                { chatID: 5, text: "...", callback: "anal5" }
            ]
        },
        {
            chatID: 5,
            speaker: "martha",
            text: "Excuse me, I couldn't help but overhear you urinating on a student. I'm afraid I must insist that you " +
                " refrain from conducting such acts in the classroom. That is why I'm employed here, and it's not appropriate " +
                " for your anal training class in this environment. ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "p",
            text: "hehehe. I know. Don't worry, I'll leave the peeing to you. I just thought it would be fun since this " +
                "timid little sissy passed out. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "martha",
            text: "I appreciate your willingness to compromise. I know how you enjoy humiliation, but while they are still " +
                " impressionable I want to make sure they are properly versed in the art of watersports. Good day ma'am. ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "p",
            text: "Ok my three dry sissies and pee pee girl, let's start the class. I need a volunteer for this class. ",
            button: [
                { chatID: 9, text: "I volunteer.", callback: "anal10" },
                { chatID: 27, text: "[Stay silent, there's no way I'm volunteering for this]", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "p",
            text: "Oooo, we have an eager slut! My favorite. Strip down and get up here! Show them your butt. ",
            button: [
                { chatID: 10, text: "Yes ma'am!", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "What am I thinking. I'm standing naked in from of these guys. I don't know how I'll be able to face them " +
                "again. Why do I keep getting myself into these situations? I guess It's better than getting pissed on though. ",
            button: [
                { chatID: 11, text: "...", callback: "anal11" }
            ]
        },
        {
            chatID: 11,
            speaker: "p",
            text: "Ok class. This is a great example of a boy's ass. Notice that as he stands here you can't even " +
                "see any of his holes. This is because of the tight ass syndrome. A terrible affliction that is easily curable " +
                "with my class. Bend forward slut, show the class your hole.",
            button: [
                { chatID: 12, text: "I uhhh", callback: "anal12" }
            ]
        },
        {
            chatID: 12,
            speaker: "p",
            text: "Notice what a good sissy we have with his ugly clitty all locked up and hungry hole open and ready for " +
                "what ever we want to do. ",
            button: [
                { chatID: 13, text: "I uhhh", callback: "anal13" }
            ]
        },
        {
            chatID: 13,
            speaker: "p",
            text: "You can see how hungry this bussy is. It really wants to get stuffed! " +
                "lucky for him I'm going to stuff this little bussy with my smallest toy. ",
            button: [
                { chatID: 14, text: "Ooooooo, yes?", callback: "anal14" }
            ]
        },
        {
            chatID: 14,
            speaker: "p",
            text: "See how much lube on the toy we have. Be sure to apply plenty of lube. You can never have too much lube " +
                "when you're first starting class. ",
            button: [
                { chatID: 15, text: "...", callback: "anal15" }
            ]
        },
        {
            chatID: 15,
            speaker: "p",
            text: "Some apply the lube directly on their hole. I like to put it on the toy and rub the lubed toy on the hole " +
                "before inserting. ",
            button: [
                { chatID: 16, text: "MmmmmMmm", callback: "anal16" }
            ]
        },
        {
            chatID: 16,
            speaker: "p",
            text: "Once you adjust to the toy you can start to play with your bussy. See how happy this sissy is once " +
                "they adjust to it. A sissy can't help but moan in pleasure when there's something up their ass. Now sissies " +
                "everyone strip down, and explore your cock sleeves for me to toy with. ",
            button: [
                { chatID: 17, text: "OOoooo yeah mmmMMmmm", callback: "anal100" }
            ]
        },
        {
            chatID: 17,
            speaker: "p",
            text: "So many slutty butts. Are you all ready to take the beginner toy? ",
            button: [
                { chatID: 18, text: "Yes!", callback: "anal101" }
            ]
        },
        {
            chatID: 18,
            speaker: "p",
            text: "All my sluts are nice and stuffed. Now time for the test. Ready sluts? " + sc.n("me") + " will go first. ",
            button: [
                { chatID: 19, text: "...", callback: "anal102" }
            ]
        },
        {
            chatID: 19,
            speaker: "p",
            text: "To pass this course, you have to be able to take a cock. Lucky your you I have a cock toy to test you. Ready slut?",
            button: [
                { chatID: 20, text: "...ready...", callback: "anal103" }
            ]
        },
        {
            chatID: 20,
            speaker: "p",
            text: "Let's see how deep this goes...",
            button: [
                { chatID: 20, text: "...grunt...", callback: "anal104" }
            ]
        },
        {
            chatID: 21,
            speaker: "p",
            text: "Still too tight. Not passing this class today. ",
            button: [
                { chatID: -1, text: "awwww damn!", callback: "endclass" }
            ]
        },
        {
            chatID: 22,
            speaker: "p",
            text: "Ok. You need to work on your homework. Fuck your ass at least once a day. And to help you each of you will " +
                "get a new purple dildo to strech those slut holes of yours. Now go out and fuck yourselves.",
            button: [
                { chatID: -1, text: "Sweet free dildo", callback: "endclassEnd" }
            ]
        },
        {
            chatID: 23,
            speaker: "p",
            text: "Ok. You need to work on your homework. Fuck your ass at least once a day. Now go out and fuck yourselves.",
            button: [
                { chatID: -1, text: "Sweet free dildo", callback: "endclassEnd" }
            ]
        },
        {
            chatID: 24,
            speaker: "p",
            text: "You naughty slut! It just slides right in all the way to the base! Good job slut you've passed anal 101! " +
                "You're now ready to take a real cock! You should be so proud of yourself right now. I can't wait for the next " +
                "class where we play with that slutty hole some more. You're amazing! Now let me test the rest of the class.",
            button: [
                { chatID: 25, text: "Yeah! I'm a total butt slut!", callback: "anal105" }
            ]
        },
        {
            chatID: 25,
            speaker: "p",
            text: "Well, you've all passed anal 101. I'm sad I don't get to play with your sissy pussies for a bit, but " +
                "I can't wait to stuff you all in my future classes. Keep stretching those slut holes! ",
            button: [
                { chatID: -1, text: "Thanks! ", callback: "endclassPass101" }
            ]
        },
        {
            chatID: 26,
            speaker: "p",
            text: "Welcome back to Anal 101. Let's get right to it. Even strip and present your slutty asses so I can stuff " +
                "them with my little toy.",
            button: [
                { chatID: 17, text: "Weee ", callback: "anal100" }
            ]
        },
        {
            chatID: 27,
            speaker: "p",
            text: "What a bunch of timid sluts. So desperate for the cock, but too scared to back that ass up. You all vonunteer,  " +
                "everyone strip off your clothes and present your sissy asses on the bench. ",
            button: [
                { chatID: 17, text: "Ok. ", callback: "anal100" }
            ]
        },
        {
            chatID: 28,
            speaker: "p",
            text: "Ok class. This is your intro to anal. I shouldn't have to teach this class, but you sluts can be dumb and " +
                "try to jam a giant rubber cock in your ass without lube. Normally I would just laugh, but last year someone " +
                "ripped their ass up and had to wait for a couple weeks while it healed, so here we are. ",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "p",
            text: "Can anyone tell me what you do to prepare for anal? ",
            button: [
                { chatID: 31, text: "Lube? ", callback: "charisma" },
                { chatID: 30, text: "...", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "!sporty",
            text: "Oh I know. Lube it up! ",
            button: [
                { chatID: 31, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "p",
            text: "Correct. Lube that asshole hole. You see, my pussy naturally creates its own lube, so I can be ready for cock in " +
                "my pink pussy hole just by thinking about getting fucked. You're delicate bussies need some extra help taking " +
                "cock. So we're going over the basics of lubing your fuck holes. Now I'll need a volunteer.... Anyone?  ",
            button: [
                { chatID: 32, text: "...", callback: "lubenotme" },
                { chatID: 33, text: "Me, me, me!", callback: "lubeme" }
            ]
        },
        {
            chatID: 32,
            speaker: "p",
            text: "Oh, Jeremy. Great. Come on up. ",
            button: [
                { chatID: 34, text: "...", callback: "lube1" }
            ]
        },
        {
            chatID: 33,
            speaker: "p",
            text: "Ok. " + sc.n("me") + " get on up here. ",
            button: [
                { chatID: 35, text: "...", callback: "lube1" }
            ]
        },
        {
            chatID: 34,
            speaker: "p",
            text: "Now i need you to strip off all those nasty boy clothes, so I can show everyone how to properly apply the " +
                "lube and face the bench I'm going to fetch. ",
            button: [
                { chatID: 37, text: "...", callback: "lube2" }
            ]
        },
        {
            chatID: 35,
            speaker: "p",
            text: "Now i need you to strip off all those nasty boy clothes, so I can show everyone how to properly apply the " +
                "lube and face the bench I'm going to fetch. ",
            button: [
                { chatID: 36, text: "...", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "I knew this class was lube 101, but why the hell did I volunteer? Now everyone is staring at me while " +
                "I undress and stand naked in front of everyone! They're going to see my chastity cage. I hope they don't " +
                "laugh at me. I really have to stop doing dumb things like this. ",
            button: [
                { chatID: 37, text: "...", callback: "lube2" }
            ]
        },
        {
            chatID: 37,
            speaker: "p",
            text: "Ok class now that we have our demonstrator I'm going to go over the proper way to lube your tight little " +
                "fuck holes. Bend over my bench and relax your cheeks. ",
            button: [
                { chatID: 38, text: "...", callback: "lube3" }
            ]
        },
        {
            chatID: 38,
            speaker: "p",
            text: "There's a few ways to lube up. For this class we're going to directly lube up your hole. First apply a generous " +
                "amount of lube to your finger. You can never have enough lube when you're first starting out. ",
            button: [
                { chatID: 39, text: "...", callback: "lube4" }
            ]
        },
        {
            chatID: 39,
            speaker: "p",
            text: "Now rub that lube on the bussy lips. Coat the entire exterior of your hole. I'm using a circular pattern " +
                "rubbing my finger around the entire hole. ",
            button: [
                { chatID: 40, text: "...", callback: "lube5" }
            ]
        },
        {
            chatID: 40,
            speaker: "p",
            text: "Now that the exterior of your hole is nice and slippery it's time to lube the bussy hole itself. Now go slow " +
                "and gentle. Insert the tip of your finger into your bussy. If it's too tight pause and pull out before inserting " +
                "again. Just keep pushing your finger into your bussy until you can easily slide it in and out without friction. " +
                "That's when you know you've lubed up enough. ",
            button: [
                { chatID: 41, text: "...", callback: "lube6" }
            ]
        },
        {
            chatID: 41,
            speaker: "p",
            text: "There you have it. A properly lubed up bussy hole ready to take more fingers, toys, or whatever else you want " +
                "to shove in there. ",
            button: [
                { chatID: 42, text: "...", callback: "lube7" }
            ]
        },
        {
            chatID: 42,
            speaker: "p",
            text: "Here's a tissue. Now wipe that didlo butter from your ass, and get back to your seat. ",
            button: [
                { chatID: 43, text: "...", callback: "lube0" }
            ]
        },
        {
            chatID: 43,
            speaker: "p",
            text: "Since I am such a great teacher I'll give each of you three applications of lube so you can go home and stick your " +
                "fingers up your asses. After that you're going to have to get your own. Start slow, I don't need you grabbing the " +
                "biggest dildo you can find and breaking your tender assholes before the fun begin. ",
            button: [
                { chatID: -1, text: "[Get your lube and go]", callback: "lubeEnd" }
            ]
        },
        {
            chatID: 44,
            speaker: "p",
            text: "So many sluts for my anal class! This is my favorite class to teach. We're going to " +
                "play a game called What's in my butt. I'm going to need a volunteer to bend over my bench " +
                "facing the class. You're going to be blindfolded and I'm going to put different things " +
                "up your butt and you try to guess what they are. This will teach you how to pay attention " +
                "and focus on the feeling inside your sissy pussies. So who's my volunteer? ",
            button: [
                { chatID: 46, text: "I volunteer!", callback: "" },
                { chatID: 45, text: "[Stay silent]", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "philbert",
            text: sc.n("me") + " said she wanted to volunteer, but is too shy. ",
            button: [
                { chatID: 46, text: "What? No I didn't!", callback: "" },
            ]
        },
        {
            chatID: 46,
            speaker: "p",
            text: "Excellent choice. " + sc.n("me") + " come up front and bend over my bench. I'll blind fold " +
                "you and you tell us what's in your butt. ",
            button: [
                { chatID: 47, text: "..ok", callback: "anal212_1" },
            ]
        },
        {
            chatID: 47,
            speaker: "p",
            text: "Now class be quit. " + sc.n("me") + " needs to focus on her bussy and tell us what I inserted. " +
                "Are you ready for your first object? ",
            button: [
                { chatID: 48, text: "Oh yes! So ready!", callback: "anal212_2" },
            ]
        },
        {
            chatID: 48,
            speaker: "p",
            text: "Now what object and color did I put in your pussy?",
            button: [
                { chatID: 49, text: "Black hammer ", callback: "anal212_3" },
                { chatID: 50, text: "Little pink butt plug ", callback: "anal212_3_w" },
                { chatID: 49, text: "Green cucumber ", callback: "anal212_3" },
                { chatID: 49, text: "Little blue butt plug ", callback: "anal212_3" },
            ]
        },
        {
            chatID: 49,
            speaker: "p",
            text: "Nope! It was a little pink butt plug. Let's try something else. ",
            button: [
                { chatID: 51, text: "...", callback: "anal212_4" },
            ]
        },
        {
            chatID: 50,
            speaker: "p",
            text: "Correct! 15 points for Gryffindor. Let's see what's next. ",
            button: [
                { chatID: 51, text: "...", callback: "anal212_4" },
            ]
        },
        {
            chatID: 51,
            speaker: "p",
            text: "Same thing. Guess the color and object.  ",
            button: [
                { chatID: 52, text: "A big black cock", callback: "anal212_5" },
                { chatID: 52, text: "Pink dildo", callback: "anal212_5" },
                { chatID: 52, text: "Cucumber", callback: "anal212_5" },
                { chatID: 53, text: "White dildo", callback: "anal212_5_w" },
            ]
        },
        {
            chatID: 52,
            speaker: "p",
            text: "Nope! A white cock dildo. ",
            button: [
                { chatID: 54, text: "Awwww", callback: "anal212_6" },
            ]
        },
        {
            chatID: 53,
            speaker: "p",
            text: "Impressive. You do know your cocks. ",
            button: [
                { chatID: 54, text: "Yeah", callback: "anal212_6" },
            ]
        },
        {
            chatID: 54,
            speaker: "p",
            text: "This is a tricky one, unless you've had one of these up your butt before. What is up your ass?",
            button: [
                { chatID: 56, text: "Barbie", callback: "anal212_7_w" },
                { chatID: 55, text: "Pink dildo", callback: "anal212_7" },
                { chatID: 55, text: "Toy soldier", callback: "anal212_7" },
                { chatID: 55, text: "Cucumber", callback: "anal212_7" },
            ]
        },
        {
            chatID: 55,
            speaker: "p",
            text: "Nope. It's a barbie. I almost thought you would get thine one right. Ready for " +
                "your final object?",
            button: [
                { chatID: 57, text: "I am", callback: "anal212_8" },
            ]
        },
        {
            chatID: 56,
            speaker: "p",
            text: "You are a little freak! I love it. Now for your final object. ",
            button: [
                { chatID: 57, text: "...", callback: "anal212_8" },
            ]
        },
        {
            chatID: 57,
            speaker: "me",
            text: "OOoo! Ow! Ow ow ow ow! OOOofff that really hurts! I'm not ready! It's a cock. There's " +
                "a big black cock in my ass!",
            button: [
                { chatID: 58, text: "...", callback: "" },
            ]
        },
        {
            chatID: 58,
            speaker: "p",
            text: "Ooooo I do love a good guess. Let's take this blind fold off so you can see " +
                "if you're right!",
            button: [
                { chatID: 59, text: "Oooofff ow ow ow ow!", callback: "anal212_9" },
            ]
        },
        {
            chatID: 59,
            speaker: "p",
            text: "It looks like you're right! Now time for your reward. Malik fill her sissy ass " +
                "with a fresh load of cum. ",
            button: [
                { chatID: 60, text: "Oh yes! Fill my ass!", callback: "anal212_10" },
                { chatID: 60, text: "Oh no! Please don't!", callback: "anal212_10" },
            ]
        },
        {
            chatID: 60,
            speaker: "philbert",
            text: "What a slut! You really are a cock whore!",
            button: [
                { chatID: 61, text: "UUgghhhh", callback: "" },
            ]
        },
        {
            chatID: 61,
            speaker: "p",
            text: "Yes she is. Something you should try harder to achieve. Now, " + sc.n("me") + 
                ", turn around and clean his cock off. " + sc.n("!thomas") + ", get down there and " +
                "clean her cum dripping pussy. I want all the leftover cum in both your bellies. ",
            button: [
                { chatID: 62, text: "ok", callback: "anal212_11" },
            ]
        },
        {
            chatID: 62,
            speaker: "p",
            text: "Good girls. This concludes the class. For those of you that didn't get fucked, " +
                "too bad. Boring sluts don't get fucked. You can invite a friend over and practice at home. ",
            button: [
                { chatID: -1, text: "[Complete Class]", callback: "anal212_end" },
            ]
        },
        {
            chatID: 63,
            speaker: "p",
            text: "Can I just say how proud I am for each and every one of you! " +
                "Each one of you sluts are going to be world class cum dumps! " +
                "The future really is open for each of you. You can be whores, " +
                "stippers, even porn stars if you want! After graduation each of you " +
                "are welcome to work in the Pink Room next door. If you don't know " +
                "where you want to go in life, it's a great place to earn a bit of " +
                "cash while you think about your futures. ",
            button: [
                { chatID: 64, text: "...", callback: "" },
            ]
        },
        {
            chatID: 64,
            speaker: "p",
            text: "On to today's class. I'm so excited for this final class! I can see only the true " +
                "sluts are here today! Since this will be the last class before " +
                "the final I want to go out with a bang! A gang bang! No more fake " +
                "silicon dildos! No more more one hole at a time! All holes, all dick! " +
                "I Love this class so much I'm going to join you! We're all GOING TO " +
                "GET FUCKED!!!! Boys, come on in!",
            button: [
                { chatID: 65, text: "...", callback: "anal421_1" },
            ]
        },
        {
            chatID: 65,
            speaker: "p",
            text: "Ok sluts, Stip off those clothes and show your holes 'cause we're all going to get FUCKED! ",
            button: [
                { chatID: 66, text: "...", callback: "anal421_2" },
            ]
        },
        {
            chatID: 66,
            speaker: "p",
            text: "Boys, find some holes and fuck it! ",
            button: [
                { chatID: 67, text: "...", callback: "anal421_3" },
            ]
        },
        {
            chatID: 67,
            speaker: "!bbc",
            text: "Fuck yeah. You know what I like best about sissies? No matter how " +
                "how bad my day is, at least I'm not taking dick like a sissy! hehehehe",
            button: [
                { chatID: 68, text: "*moaning from that big cock fucking your bussy*", callback: "anal421_4" },
            ]
        },
        {
            chatID: 68,
            speaker: "!bwc",
            text: "Hey, you're really pretty. Do you mind if I fuck your face? ",
            button: [
                { chatID: 69, text: "uh uh ..sure... uh *moan*", callback: "anal421_5" },
            ]
        },
        {
            chatID: 69,
            speaker: "!bwc",
            text: "Oh wow! You really are great at sucking dick! You ever work at the " +
                "Pink Room? I could use a mouth like yours at the glory hole?  ",
            button: [
                { chatID: 70, text: "*gluck* *gluck* *gluck*", callback: "anal421_6" },
            ]
        },
        {
            chatID: 70,
            speaker: "!bbc",
            text: "Got my nut in yo' butt! Fuck yeah! ",
            button: [
                { chatID: 71, text: "*gluck* *swallow* *gulp*", callback: "anal421_7" },
            ]
        },
        {
            chatID: 71,
            speaker: "p",
            text: "Well, it smells like sweat, pussy, cocks, and cum in here. The " +
                "janitor is really going to have to clean this place up well for " +
                "the next class. I'm a little sad to see you all go, but all of you " +
                "have a special invite to join us at the Pink Room. Not as a guest, " +
                "of course, but as one of our many wonderful fuck holes. Next time I " +
                "see you it will be at the graduation ceremony. Take care, and keep " +
                "getting pounded those pussies and cute little faces of yours! ",
            button: [
                { chatID: -1, text: "*sniff*, we will", callback: "endclassPass101" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};