//Room name
var room953 = {};
room953.main = function () {
    if (g.internal.chaple === 0)
        chat(0, 953);
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
                { chatID: 32, text: "...", callback: "" }
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};