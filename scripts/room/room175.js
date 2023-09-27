//anal
var room175 = {};
room175.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "lube101":
            nav.bg("209_classroom/sitting3.jpg");
            chat(28, 175);
            break;
        case "anal101":
            if (gv.get("sissySchoolClassDays") === 0) {
                nav.bg("175_anal/anal0.jpg")
                chat(0, 175);
            }
            else {
                nav.bg("175_anal/anal0_restart.jpg");
                chat(26, 175);
            }
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
            nav.bg("175_anal/" + callback + ".jpg");
            break;
        case "anal10":
            nav.bg("175_anal/" + callback + ".jpg");
            levels.mod("sissy", 20, 999);
            break;
        case "anal15":
            nav.bg("175_anal/" + callback + ".jpg");
            levels.anal(2);
            break;
        case "anal101":
            nav.bg("175_anal/" + callback + ".jpg");
            levels.anal(2);
            break;
        case "anal104":
            if (levels.analTake(3).c < 3) {
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
            levels.anal(3);
            nav.bg("175_anal/endclass.jpg");
            break;
        case "endclassEnd":
            gv.mod("sissySchoolClassDays", 1);
            char.settime(17, 15);
            char.room(0);
            break;
        case "endclassPass101":
            gv.mod("sissySchoolClassDays", 1);
            sissy.passclass("anal101");
            char.settime(17, 15);
            char.room(0);
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
                "done with today your colons are going to be hanging out of your hugh gaping assholes. Are you ready for " +
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
                " for a your anal training class in this environment. ",
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
                "see any of his holes. This is becuase of the tight ass syndrome. A terrible affliction that is easily curable " +
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
                "everyone strip down, and explore your cock sleves for me to toy with. ",
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
            text: "Lets see how deep this goes...",
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
            text: "Well, you've all passes anal 101. I'm sad I don't get to play with your sissy pussies for a bit, but " +
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
                "everyone stip off your clothes and present your sissy asses on the bench. ",
            button: [
                { chatID: 17, text: "Ok. ", callback: "anal100" }
            ]
        },
        {
            chatID: 27,
            speaker: "p",
            text: "What a bunch of timid sluts. So desperate for the cock, but too scared to back that ass up. You all vonunteer,  " +
                "everyone stip off your clothes and present your sissy asses on the bench. ",
            button: [
                { chatID: 17, text: "Ok. ", callback: "anal100" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};