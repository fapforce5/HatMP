//Construction Boss

var room102 = {};

room102.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "phil",
            "left": 0,
            "top": 126,
            "width": 1920,
            "height": 954,
            "image": "102_constBoss/102_phil.png"
        }
    ];

    var navList = [101];

    $.each(btnList, function (i, v) {
        nav.button(v, 102);
    });

    nav.buildnav(navList);
};

room102.btnclick = function (name) {
    switch (name) {
        case "phil":
            if (sc.getstep("construction") === 0)
                chat(6, 102);
            else if (sc.getstep("construction") === 1)
                chat(0, 102);
            else if (!g.get("jobConstGetRaise") && g.get("jobConstructionPay") < 75)
                chat(7, 102);
            else 
                chat(9, 102);
            break;
        default:
            break;
    }
};

room102.chatcatch = function (callback) {
    switch (callback) {
        case "setInit":
            g.mod("jobConstructionPay", 40);
            sc.setstep("me", 2);
            sc.setstep("construction", 2);
            break;
        case "leaveOffice":
            char.room(101);
            break;
        case "getRaise":
            g.mod("jobConstructionPay", 5);
            g.set("jobConstGetRaise", true);
            break;
        default:
            break;
    }
};

room102.chat = function (chatID) {
    var dirtyJoke = [
        "What did the leper say to the prostitute? Keep the tip.",
        "Whats the difference between jelly and jam? You can't jelly your dick in her ass.",
        "What's the difference between a garbanzo bean and a chickpea. I've never paid 300 bucks to have a garbanzo bean on my face.",
        "How is parsley like pubic hair? You brush both off to the side before you start eating.",
        "A dick has a sad life. His hair is a mess; his family is nuts; his next-door neighbor is an asshole; his best friend is a pussy, and his owner beats him habitually.",
        "What gets longer when pulled, fits between breasts, inserts neatly in a hole, and works best when jerked? A seat belt",
        "One day Mom was cleaning junior's room and in the closet she found a bondage S+M magazine. This was highly upsetting for her. She hid the magazine until his father got home and showed it to him. He looked at it and handed it back to her without a word. She finally asked him, 'Well what should we do about this?' Dad looked at her and said, 'Well I don't think you should spank him.'",
        "Mickey and Minnie are getting divorced. One day, Mickey gets a call from his lawyer who says, 'Mickey, you can't divorce Minnie just because she's crazy!' Mickey replies, 'I didn't say she was crazy. I said she was fucking Goofy.'",
        "Two men are sitting on a train on valentines day. One man is rich the other man is poor. The poor man asks the rich man what he got his wife for valentines day. The rich man replies, a diamond necklace, and a new car. The poor man asks why two gifts, he replies if she doesn't like the necklace she can have the car. The rich man asks the poor man what he got his wife. The poor man say's a pair of slippers and a dildo. The rich man asks the poor man why two gifts. The poor man replies, if she doesn't like the slippers she can go fuck herself.",
        "Someone asked me how I view lesbian relationships, 'In HD' was not the correct answer.",
        "A man is on the elevator and a beautiful woman with a short mini-skirt and low cut blouse steps on. The man turns to her and says, 'Excuse me Ms., can I smell your pussy?'. 'Absolutely not, you pervert!' the woman scoffs. The man shakes his head, 'It must be your feet then.'",
        "What is the definition of trust? Two cannibals giving each other a blow job.",
        "A family walks into a hotel and the father goes to the front desk and says 'I hope the porn is disabled.' The guy at the desk replies. 'It's just regular porn you sick fuck.'",
        "A guy walks into a bar with an alligator. It's about 10 feet long. The bartender flips out and says, 'Hey buddy, you gotta get that son of a bitch outta here. It's going to bite one of my customers and I'm going to get sued.' The guy says, 'No no no, it's a tame alligator. I'll prove it to you.' He picks up the alligator and puts it on the bar. Then he unzips his pants, pulls out his package and sticks it in the alligator's mouth. The alligator just keeps his mouth open. After about 5 minutes, he pulls it out of the alligator's mouth and zips up his pants and says, 'See, I told you it was a tame alligator. Anybody else want to try it?' The drunk down at the end of the bar says, 'Yah, I'd like to try it but I don't think I can hold my mouth open that long!'",
        "What's the difference between a jacket and a coat? When I'm bored I can't watch porn and coat.",
        "Three nuns are sitting on a bench. A man walks up to them and exposes himself. Two of the nuns have a stroke. The other couldn't reach.",
        "What does the gay moose say after he leaves the gay bar? Man, I blew like 50 bucks back there!",
        "A man walks into a psychiatrist's office wearing only saran wrap.. The doctor looks at him and says 'Well I can clearly see you're nuts.'",
        "What did one tampon say to the other? Nothing. They were both stuck up bitches.",
        "How do you know you are at a gay BBQ? The hot dogs taste like shit.",
        "Why was Barbie never pregnant? Ken came in a different box",
        "What’s the difference between a G-spot and a golf ball? A guy will actually search for a golf ball.",
        "What does the sign on an out-of-business brothel say? Beat it. We’re closed.",
        "What did the hurricane say to the coconut tree? Hold on to your nuts, this ain’t no ordinary blow job.",
        "What’s the difference between a pick-pocket and a peeping tom? One snatches your watch. The other watches your snatch."
    ];
    var txt = dirtyJoke[Math.floor(Math.random() * dirtyJoke.length)];
    var cArray = [
        {
            chatID: 0,
            speaker: "construction",
            text: "Hay " + sc.n("tina") + "!! Who the fuck is this in my office. I asked for something with tits!",
            button: [
                { chatID: 1, text: "....", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tina",
            text: "It's " + sc.n("me") + "! He's here for the laborer job!",
            button: [
                { chatID: 2, text: "....", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "construction",
            text: "oh.. hey " + sc.n("me") + " so you want to clean up shit on the site? The job starts at $40 per day. If you can make me laugh I'll give you a raise each week. Sound good?",
            button: [
                { chatID: 3, text: "yes sir", callback: "" },
                { chatID: 4, text: "No, I want more money to start.", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "construction",
            text: "Ok kid you're hired. You need to be here before 9am each day. We don't work on Sundays. " +
                "Collect you money from " + sc.n("tina") + " at the end of each day. If you forget to pick up your money at the end of your shift it's your loss. You can start whenever. ",
            button: [
                { chatID: -1, text: "Thank you sir", callback: "setInit" }
            ]
        },
        {
            chatID: 4,
            speaker: "construction",
            text: "You ever worked construction, or have any special skills?",
            button: [
                { chatID: 5, text: "No, but I'm a hard worker", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "construction",
            text: "I don't give a shit! Everyone's a hard worker. If you don't work hard your fired. You want more money make me laugh each week, or grow a set of tits.",
            button: [
                { chatID: 3, text: "Ok, got it.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "construction",
            text: "Who the fuck are you!? Get the fuck out",
            button: [
                { chatID: -1, text: "Sorry, I'm leaving", callback: "leaveOffice" }
            ]
        },
        {
            chatID: 7,
            speaker: "construction",
            text: "The fuck you want?",
            button: [
                { chatID: -1, text: "Nothing, I'm leaving", callback: "leaveOffice" },
                { chatID: 10, text: "Want to hear a dirty joke?", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "construction",
            text: "HAHAHhahahaha OK you fucking faggot, here's a $5 raise. Now get out and do some work.",
            button: [
                { chatID: -1, text: "Yes sir", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "construction",
            text: "Stop staring at me like you're going to fuck me. Get out and do some work.",
            button: [
                { chatID: -1, text: "Yes sir", callback: "leaveOffice" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: txt,
            button: [
                { chatID: 8, text: "...", callback: "getRaise" }
            ]
        }
    ];
    return cArray[chatID];
};