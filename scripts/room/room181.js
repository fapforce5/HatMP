//black room
var room181 = {};
room181.main = function () {
    
    switch (gv.get("sissySchoolClass")) {
        case "bondage101":
            if (g.pass === "endSleepyTime") {
                nav.bg("181_black/bondage101_13.jpg");
                gv.mod("energy", -999);
                chat(27, 181);
            }
            else {
                nav.bg("181_black/bondage101_0.jpg");
                chat(0, 181);
            }
            break;
        case "bondage203":
            
            break;
    }
};

room181.btnclick = function (name) {
    switch (name) {
        case "bondage101_11":
            nav.killbutton("bondage101_11");
            nav.bg("181_black/bondage101_10.jpg");
            char.settime(22, 49);
            chat(26, 181);
            break;
        default:
            break;
    }
};

room181.chatcatch = function (callback) {
    switch (callback) {
        case "bondage101_1":
        case "bondage101_2":
        case "bondage101_4":
        case "bondage101_5":
        case "bondage101_6":
        case "bondage101_7":
        case "bondage101_8":
        case "bondage101_10":
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "gloryhole":
            sc.show("cecilia");
            sc.startMission("cecilia", "gloryhole");
            break;
        case "bondage101_9":
            levels.oralGive(1, true);
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "bondage101_3":
            cl.nude();
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "bondage101_11":
            nav.next("bondage101_11");
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "bondage101_12":
            gv.mod("arousal", 100);
            g.pass = 181;
            char.room(28);
            break;
        case "bondage101_end":
            cl.undo();
            sissy.passclass(false);
            char.room(201);
            break;
        default:
            break;
    }
};

room181.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "black",
            text: "My my my. What a bunch of eager little pupils we have. I look forward to torturing each and everyone one " +
                "of you. But I have a special request so all of you get out. Get, go, leave. ",
            button: [
                { chatID: 1, text: "Awwww....", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!jeremy",
            text: "Can we come back later. ",
            button: [
                { chatID: 2, text: "....", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "black",
            text: "Yes, later is fine.... but wait. You there " + sc.n("me") + ". You will wait. The rest can go. Now leave. ",
            button: [
                { chatID: 3, text: "*GULP*", callback: "bondage101_1" }
            ]
        },
        {
            chatID: 3,
            speaker: "black",
            text: "Yes. You'll do perfect. I know " + sc.n("cecilia") + " and yourself work together. It's always so much more fun " +
                "to torture people who know each other. " + sc.n("cecilia") + " pop up and say hi. ",
            button: [
                { chatID: 4, text: "huh", callback: "bondage101_2" }
            ]
        },
        {
            chatID: 4,
            speaker: "cecilia",
            text: "Hi! ",
            button: [
                { chatID: 5, text: "Hi?", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "black",
            text: "Pop out of the bag. We're going to do a bit of modified bondage 101. Let me just get you two together... ",
            button: [
                { chatID: 6, text: "..", callback: "bondage101_3" }
            ]
        },
        {
            chatID: 6,
            speaker: "black",
            text: "All done! I hope you you're comfortable enough. You're going to be like this for a while. ",
            button: [
                { chatID: 7, text: "What do you mean?", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "black",
            text: "You two are cute hanging there. Well. I'll see you tomorrow. Don't worry about the lights, they're on a timer.  ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "Wait! I'm sorry. Tell Missy I won't do it again. Don't leave us up here all night! I know I've been told, but " +
                "this time I promise I won't do it again!",
            button: [
                { chatID: 9, text: "Please don't leave us here all night! ", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "black",
            text: "Oh " + sc.n("cecilia") + " how I do love to hear your wimpers. I'll be watching the camera at home. Please " +
                "moan and whine all night. It really is the best porn. Night you two. ",
            button: [
                { chatID: 10, text: "...", callback: "bondage101_4" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Can you move your dick. It's laying in my face, and your balls are poking my eyes. ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "ceclia",
            text: "My dick? You're the one with the chasity cage! Everytime I try to put my head down it digs right into my nose! ",
            button: [
                { chatID: 12, text: "Like I had a choice! ", callback: "bondage101_5" }
            ]
        },
        {
            chatID: 12,
            speaker: "cecilia",
            text: "The only way I can put my head down is if I stuff my mouth into your butthole. Mmmmmm. It does look yummy!  ",
            button: [
                { chatID: 13, text: "Hey! If you lick my ass I'm going to suck your clitty! ", callback: "bondage101_6" },
                { chatID: 21, text: "Hey! Leave my butt alone! ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "cecilia",
            text: "Did we just become best friends? Because I'm totally going to eat that bussy! It's just so pink and and right " +
                "there! I'm sorry I can't help myself! ",
            button: [
                { chatID: 14, text: "huh?", callback: "bondage101_7" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "OOooo... That's different.... Mmmmmm... oh... wait, don't stick... oh. never mind, keep sticking your tounge there.. " +
                "mmMMmm yeah",
            button: [
                { chatID: 15, text: "[Gobble that cock]", callback: "bondage101_8" }
            ]
        },
        {
            chatID: 15,
            speaker: "cecilia",
            text: "So yummy! Mmmmm *slurp* hehehe. You're good. ",
            button: [
                { chatID: 16, text: "MmmMMmmmm *glug* *glug* *lick* ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "cecilia",
            text: "OOooooo. I feel it! It's cumming! ",
            button: [
                { chatID: 17, text: "*lick* *glug* *lick* ", callback: "bondage101_9" }
            ]
        },
        {
            chatID: 17,
            speaker: "cecilia",
            text: "Ohhhhh ",
            button: [
                { chatID: 18, text: "*lick* *glug* *lick* ", callback: "bondage101_10" }
            ]
        },
        {
            chatID: 18,
            speaker: "cecilia",
            text: "You were amazing! Hey I know a place where we can suck more cocks! Have you been to the bathroom at the park? ",
            button: [
                { chatID: 19, text: "I've been a few times...", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cecilia",
            text: "I like to go there on the weekends in the last stall and suck all kinds of dick. You should join me. It gets " +
                "lonly there all by myself sometimes and it would be aweseome to have another cocksucker there with me to help " +
                "pass the time. ",
            button: [
                { chatID: 20, text: "Really? That sounds awesome! ", callback: "gloryhole" },
                { chatID: 21, text: "Fuck no. I'm not sucking some stranger's dick!", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "cecilia",
            text: "Sweet! Meet me at the park bathroom, last stall on the weekends! I'll show you how to suck cock like a " +
                "real porn star! ",
            button: [
                { chatID: 22, text: "I'll see you there! ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "cecilia",
            text: "Oh. I guess I was wrong about you. ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "So why are you here? I didn't know you were in the sissy school. ",
            button: [
                { chatID: 23, text: "...", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "cecilia",
            text: "Oh, I was taking a load from this guy.",
            button: [
                { chatID: 24, text: "Really? Why does Missy care? I thought she would be supportive. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "cecilia",
            text: "Oh. She is. Usually. I was caught bending over her desk taking a load from one of her appointments that " +
                "came in early. Too bad he didn't cum in me early! ",
            button: [
                { chatID: 25, text: "oh wow!", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "cecilia",
            text: "She was so mad! I would've taken his dick at my desk, but that security guard stares at me all day. Gives me " +
                "the creeps. I tried to blow him, but he slapped me and said I wasn't worthy. So I snuck him in her office.. and " +
                "now we're here. ",
            button: [
                { chatID: -1, text: "Yep. Now we're here.", callback: "bondage101_11" },
            ]
        },
        {
            chatID: 26,
            speaker: "cecilia",
            text: "I'm getting sleepy. It does take it out of you haning here. ",
            button: [
                { chatID: -1, text: "Oh yeah. Me too. night night. ", callback: "bondage101_12" },
            ]
        },
        {
            chatID: 27,
            speaker: "black",
            text: "Time to wake up and go home. Get dressed and go.  ",
            button: [
                { chatID: -1, text: "*Yawn* I'm so tired.. argh. ok", callback: "bondage101_end" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};