//Room name
var room953 = {};
room953.main = function () {
    if (g.internal.chaple === 0)
        chat(0, 953);
    else if (g.internal.chaple === 2) {
        nav.bg("953_chaple/breakout1.jpg");
        chat(37, 953);
    }
    else
        chat(30, 953);
};

room953.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room953.chatcatch = function (callback) {
    switch (callback) {
        case "e1":
        case "e2":
        case "e3":
        case "e4":
        case "e5":
        case "e6":
        case "e7":
        case "e8":
        case "e9":
        case "e10":
        case "e11":
        case "e12":
        case "e12x":
            nav.bg("953_chaple/" + callback + ".jpg");
            break;
        case "e13":
            g.internal.chaple = 1;
            g.internal.interval++;
            char.room(950);
            break;
        case "e13x":
            g.internal.interval++;
            char.room(950);
            break;
        case "breakout0":
            if (sc.checkevent("daria", -2)) {
                nav.killall();
                nav.bg("953_chaple/breakout0.jpg");
                g.internal.chaple = 2;
                chat(35, 953);
            }
            else
                chat(32, 953);
            break;
        case "breakout1":
            nav.bg("953_chaple/breakout1.jpg");
            break;
        case "breakout2":
            g.pass = 953;
            char.room(8);
            break;
        case "breakout3":
            nav.bg("953_chaple/breakout3.jpg");
            break;
        case "breakout4":
            nav.bg("953_chaple/breakout4.jpg");
            break;
        case "breakout5":
            nav.bg("953_chaple/breakout5.jpg");
            break;
        case "breakout6":
            nav.bg("953_chaple/breakout6.jpg");
            break;
        case "breakout7":
            char.room(954);
            break;
        default:
            break;
    }
};

room953.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cult",
            text: "Clean the chapel. The room must be devoid of all impurities. ",
            button: [
                { chatID: 1, text: "...", callback: "e1" }
            ]
        },
        {
            chatID: 1,
            speaker: "cult",
            text: "Just stay back here and wait for me. I will get you after the ceremony to clean up again. ",
            button: [
                { chatID: 2, text: "ok. ", callback: "e2" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "It looks like this thing is about to start. " +
                "I can't believe how may there are. There must be at least a hundred in here. It looks like " + sc.n("ubel") +
                " is in the front leading the sermon. ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I can't believe how may there are. There must be at least a hundred in here. It looks like " + sc.n("ubel") +
                " is in the front leading the sermon. ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "ubel",
            text: "... and the light of the fire shall awaken, Azrael, the demon within! He will strike down all nonbelievers " +
                "and wipe them from the earth. Leaving only you, the pure souls that brought his coming...",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "ubel",
            text: "... We shall bathe the chosen one in the semen of people and she will birth the demon from within her womb formed " +
                "by the spirit of our beleif and power! But only if all of you truly believe. This is why all those that have lost " +
                "their faith must be found and seperated by blood from our numbers...",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "ubel",
            text: "...Bring forth the chosen one and bathe her in the semen of the people! ",
            button: [
                { chatID: 7, text: "[Sneak a closer look]", callback: "e3" }
            ]
        },
        {
            chatID: 7,
            speaker: "ubel",
            text: "We will now add the semen of the people to mix with the chosen one and birth Azrael!",
            button: [
                { chatID: 8, text: "?", callback: "e4" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Oh wow, that's where all our cum goes...",
            button: [
                { chatID: 9, text: "...", callback: "e5" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Hmmm I wonder what it's like to bathe in a bowl full of cum. I can totally smell it from here too. ",
            button: [
                { chatID: 10, text: "...", callback: "e6" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "I bet that much cum would make a great slip and slide... ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "...",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "We've been standing here for a while. Is something supposed to happen?",
            button: [
                { chatID: 13, text: "...", callback: "e7" }
            ]
        },
        {
            chatID: 13,
            speaker: "ubel",
            text: "We have a liar in our ranks! Azrael will only appear when all who worship have the full faith! Who is the nonbeliever " +
                "among us!!!",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "ubel",
            text: "Oh shit! I hope he's not talking about me. I better sneak back to the back of the chapel. I hope he doesn't think " +
                "it's me. He seems really mad. ",
            button: [
                { chatID: 15, text: "...", callback: "e2" }
            ]
        },
        {
            chatID: 15,
            speaker: "cult",
            text: "I know the nonbeliever among us! He pretends to follow the instuctions Azreal, but his actions are a lie! He " + 
                "deceives us all in his treachery!",
            button: [
                { chatID: 16, text: "GULP!", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "ubel",
            text: "We must root out the nonbeliever from our ranks! Part the crowd and show yourself so you may be punished! ",
            button: [
                { chatID: 17, text: "Double gulp!", callback: "e8" }
            ]
        },
        {
            chatID: 17,
            speaker: "ubel",
            text: "You have been identified. Strip him of his robes and suspend him for all to see the virus within our body. ",
            button: [
                { chatID: 18, text: "Oh good. It's not me", callback: "e9" }
            ]
        },
        {
            chatID: 18,
            speaker: "ubel",
            text: "Confess! ",
            button: [
                { chatID: 19, text: "...", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cult",
            text: "It's not me! I have full faith in the union and Azreal! ",
            button: [
                { chatID: 20, text: "...", callback: "e10" }
            ]
        },
        {
            chatID: 20,
            speaker: "ubel",
            text: "Confess and I will show you mercy! ",
            button: [
                { chatID: 21, text: "...", callback: "e9" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "Holy crap! That looks brutal! ",
            button: [
                { chatID: 22, text: "...", callback: "e10" }
            ]
        },
        {
            chatID: 22,
            speaker: "ubel",
            text: "Confess to your brothers and sisters! ",
            button: [
                { chatID: 23, text: "...", callback: "e9" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "He just keeps going! I wouldn't want to make " + sc.n("ubel") + " angry. ",
            button: [
                { chatID: 24, text: "...", callback: "e10" }
            ]
        },
        {
            chatID: 24,
            speaker: "ubel",
            text: "Confess and you shall live! ",
            button: [
                { chatID: 25, text: "...", callback: "e11" }
            ]
        },
        {
            chatID: 25,
            speaker: "cult",
            text: "*Sobbing* I confess. I am guilty of all things. I have lied to all of you. Please. ",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "ubel",
            text: "Your brother has failed all of us. He shall be stripped of his robes and made to serve as a cum cow and be milked " +
                "until you have earned your place back with us. ",
            button: [
                { chatID: 27, text: "...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "ubel",
            text: "Milkmaids come drink from the bowl so none of the donations have been wasted. May Azreal be with you. ",
            button: [
                { chatID: 28, text: "...", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "cult",
            text: "[All in unison] And in me is Azreal.",
            button: [
                { chatID: 29, text: "...", callback: "e12" }
            ]
        },
        {
            chatID: 29,
            speaker: "cult",
            text: "Follow me back to your cell. There will be no clean up tonight.",
            button: [
                { chatID: -1, text: "Uhh yeah, sure.", callback: "e13" }
            ]
        },
        {
            chatID: 30,
            speaker: "cult",
            text: "After you finish cleaning stay back here and wait for me. I will get you after the ceremony to clean up again. ",
            button: [
                { chatID: 31, text: "ok. ", callback: "e2" }
            ]
        },
        {
            chatID: 31,
            speaker: "ubel",
            text: "...We will cleanse this world of the filth with the power of Azreal! Together we will rise up and rule over all...",
            button: [
                { chatID: 32, text: "...", callback: "breakout0" }
            ]
        },
        {
            chatID: 32,
            speaker: "ubel",
            text: "...my followers will command contries as the world leaders burn under the flame of our power... ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "That guy can really talk for a long time. I have no idea why they just stand here listening to this crap.",
            button: [
                { chatID: 34, text: "...", callback: "e12x" }
            ]
        },
        {
            chatID: 34,
            speaker: "thinking",
            text: "Clean up then I'll escort you back to your cell. ",
            button: [
                { chatID: -1, text: "ok", callback: "e13x" }
            ]
        },
        {
            chatID: 35,
            speaker: "daria",
            text: "Sshhhhhh. Don't talk and follow me ",
            button: [
                { chatID: 36, text: "...", callback: "breakout1" }
            ]
        },
        {
            chatID: 36,
            speaker: "daria",
            text: "You're still naked. You can't break out of here naked. Quick, put some clothes on. ",
            button: [
                { chatID: -1, text: "...", callback: "breakout2" }
            ]
        },
        {
            chatID: 37,
            speaker: "daria",
            text: "Really? We're breaking out of an evil cult that may kill us if we get caught and that's what you " +
                "chose to wear?",
            button: [
                { chatID: 38, text: "Oh, uh...", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "bodhi",
            text: "A sissy's got to be a sissy. I think it's a totally excellent choice!",
            button: [
                { chatID: 39, text: "Thank you", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "daria",
            text: "Ok you two, I've shut off the camera. We should be able to sneak out of here without getting caught. " +
                "Follow me and keep quiet. ",
            button: [
                { chatID: 40, text: "...", callback: "breakout3" }
            ]
        },
        {
            chatID: 40,
            speaker: "daria",
            text: "We're almost out of here. I'm going to open that door with the key you shoved up your ass " +
                "and we're all going to run like we've never run before. " +
                "Are you ready?",
            button: [
                { chatID: 41, text: "I'm ready. Let's go!", callback: "breakout4" }
            ]
        },
        {
            chatID: 41,
            speaker: "daria",
            text: "Ok go!",
            button: [
                { chatID: 42, text: "Run for freedom!", callback: "breakout5" }
            ]
        },
        {
            chatID: 42,
            speaker: "ubel",
            text: "Hello my misguided halfwits. Did you really think you could just walk out of here and no one would know? I know " +
                "everything that happens here, I just wasn't sure if you all were stupid enough to actually go through with it. ",
            button: [
                { chatID: 43, text: "*Yelp*", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "ubel",
            text: sc.n("daria") + " and " + sc.n("bodhi") + " have we been fully accommodating with the both of you? I'm really " +
                "dissapointed that you would choose to cross me and betray the teachings of Azreal. I expected this from you, " +
                sc.n("me") + " though. But all is fine. I have spoken with Azreal on what to do with your lives.",
            button: [
                { chatID: 44, text: "Are you going to kill us?", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "ubel",
            text: sc.n("bodhi") + " you shall live. You are too simple a creature for the path, but you must be punished. " +
                "I will have you watch everthing that happens to " + sc.n("daria") + " as she finds herself over the coming months. ",
            button: [
                { chatID: 45, text: "...", callback: "breakout6" }
            ]
        },
        {
            chatID: 45,
            speaker: "ubel",
            text: "Now your lives are on your own. You have strayed from the path of Azreal and only those on the path can remain. " +
                "I will give you the choice. Choice one is to remain here and go though my personal intensive training. It will be " +
                "filled with pain and suffering like you've never experainced. You will lose your very definition of self as you " +
                "are tortured and used by all who live here. ",
            button: [
                { chatID: 46, text: "What's choice two?", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "ubel",
            text: "Hahaha. Choice two is death. No one betrays Azreal on these grounds.  ",
            button: [
                { chatID: 47, text: "*Gulp*", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "thinking",
            text: "Oh wow, we really fucked up. I should have just waited in my cell. I'm sure " + sc.n("missy") + " or " +
                sc.n("landlord") + " would have tried to save us by now. If the cell was them being nice, I'm afriad of what " +
                "the intensive training is.",
            button: [
                { chatID: 48, text: "...", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "daria",
            text: "I'm so sorry! Please don't kill us, I'll do anything to be able to see " + sc.n("bodhi") + " again. We " +
                "won't try to break out ever again. I promise! ",
            button: [
                { chatID: 49, text: "Please, we want to live. ", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "ubel",
            text: "Through pain you shall find salvation. Follow me. ",
            button: [
                { chatID: -1, text: "Follow.", callback: "breakout7" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};