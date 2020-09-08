//Truth or Dare
var room23 = {};

room23.main = function () {
    g.internal = { eva: 0, lola: 0, evaNude: 3, lolaNude: 3, speaker: "", holder: "", pantyBoy: false };
    var truth = [
        {
            id: 0,
            q: "Have you ever kissed a boy?",
            l: "Ewwww, never!",
            e: "I dunno, probably not as many as your butthead!"
        },
        {
            id: 1,
            q: "Have you ever eaten a booger?",
            l: "Hahaha, once when i was little!",
            e: "You're so disgusting " + sc.n("me") + ". Never."
        },
        {
            id: 2,
            q: "Have you ever peed yourself?",
            l: "sigh; yes, last month when " + sc.n("eva") + " was tickling me and wouldn't let me go to the bathroom.. I peed just a little squirt in my panties.",
            e: "My Ex boyfriend asked me to pee my panties, so I did."
        },
        {
            id: 3,
            q: "Who is your secret crush?",
            l: "[BLUSH] It's a secret, but they're in this room...",
            e: "OMG Brock Stone makes my panties soooo wet."
        },
        {
            id: 4,
            q: "Are you a virgin?",
            l: "OMG YES!",
            e: "Nope! There isn't a hole on me that is!"
        },
        {
            id: 5,
            q: "What's your favorite color of underwear?",
            l: "Black.",
            e: "Red, I like the attention it gets."
        },
        {
            id: 6,
            q: "Have you tasted your own sweat?",
            l: "hmmmm, maybe, yes? I don't know, that's a weird question.",
            e: "ooohhh, gross no."
        },
        {
            id: 7,
            q: "Describe your perfect date.",
            l: "Oh gosh, I guess he would bring me flowers and take me out to the Pasta Place, then walk me home.",
            e: "He'd take me to the mall and buy me everything and anything I want!"
        },
        {
            id: 8,
            q: "If your mom hated your boyfriend would you dump him?",
            l: "Maybe, it depends on who it is.",
            e: "Not a chance, my mom doesn't have good taste in boys."
        },
        {
            id: 9,
            q: "Who is the hottest in this group?",
            l: sc.n("eva") + ", of course!",
            e: "Me!"
        },
        {
            id: 10,
            q: "What is your biggest turn-off?",
            l: "A smelly boy, ewwww.",
            e: "A small penis. It's just so disappointing."
        },
        {
            id: 11,
            q: "Would you go out with an older man?",
            l: "hmmm, maybe a couple years older, but not too much; that's gross.",
            e: "Yes, and I have"
        },
        {
            id: 12,
            q: "What's your dream job?",
            l: "I've always wanted to be kindergarten teacher. It would be so great to help so many kids.",
            e: "A world traveler. I want to go on adventures around the world!"
        },
        {
            id: 13,
            q: "What's the most food you've eaten in a single sitting?",
            l: "OMG I totally ate 3 big bowls of pasta and so many bread sticks... It hurt for a full day!",
            e: "I had and entire large pizza. I felt like a huge pig."
        },
        {
            id: 14,
            q: "What is something no else knows about you?",
            l: "I hate, hate having my feet touched. I sends chills down my spine!",
            e: "I like having my butthole licked. It's weird I know, but there's just something to it that I love."
        },
        {
            id: 15,
            q: "What's your favorite hobby?",
            l: "I love swimming. You'll probably catch me at the pool in the afternoons.",
            e: "Playing phone games I guess."
        },
        {
            id: 16,
            q: "What is the sexiest thing about a boy?",
            l: "His shoulders. Nothing better than big strong shoulders.",
            e: "I'm a leg girl. I hate when guys have a muscular body and tiny little skinny little legs."
        },
        {
            id: 17,
            q: "Have you ever sent a naked selfie?",
            l: "Maybeeee.....",
            e: "hehehe yeah, a few times. "
        },
        {
            id: 18,
            q: "Have you ever fantasized about a girl?",
            l: "[BLUSH] yea...",
            e: "Oh yes, Girls are just so sexy and soft."
        },
        {
            id: 19,
            q: "Do you sleep in the nude?",
            l: "Yes, we both do sometimes. It's no big deal.",
            e: "Oh yea. Clothes are so uncomfortable when you're trying to sleep. I don't know why people do it."
        },
        {
            id: 20,
            q: "Have you ever cheated on a test?",
            l: "Never! I study too hard to cheat.",
            e: "If you're not cheating you're not trying!"
        }
    ];

    var myTruth = [
        {
            q: "What's your biggest secret crush? You can tell us!",
            b: [{ chatID: 12, text: "My biggest secret crush is both of you!", callback: "lolaTalk" },
            { chatID: -1, text: "You wouldn't know her, she goes to another school", callback: "" }]
        },
        {
            q: "Which one of us is sexier?",
            b: [{ chatID: 12, text: sc.n('lola') + "'s more attractive", callback: "lolaTalk" },
            { chatID: 9, text: sc.n('eva') + "'s sexier", callback: "evaTalk" }]
        },
        {
            q: "Have you ever masturbated?",
            b: [{ chatID: -1, text: "Yes, everyone has", callback: "" },
            { chatID: -1, text: "No, that's gross", callback: "" }]
        },
        {
            q: "Have you ever peed in your pants?",
            b: [{ chatID: -1, text: "Yes, but it wasn't my fault!", callback: "" },
            { chatID: -1, text: "No, I'm not a baby", callback: "" }]
        },
        {
            q: "Are you a virgin?",
            b: [{ chatID: 9, text: "Yes, " + sc.n("lola") + " do you want to help me with that!", callback: "evaTalk" },
            { chatID: -1, text: "Nope!", callback: "" }]
        },
        {
            q: "Have you ever seen a real naked guy before?",
            b: [{ chatID: 10, text: "Yes I have", callback: "lolaTalk" },
            { chatID: -1, text: "Nope", callback: "" }]
        },
        {
            q: "What's the sexiest thing on a girl's body?",
            b: [{ chatID: 12, text: "Her eyes", callback: "lolaTalk" },
            { chatID: 9, text: "Feet. Nothing better than a sexy pair of feet.", callback: "evaTalk" }]
        },
        {
            q: "Have you ever touched a butthole?",
            b: [{ chatID: -1, text: "Yes, and it wasn't even my own!", callback: "" },
            { chatID: -1, text: "Gross, no", callback: "" }]
        },
        {
            q: "Have you ever touched another penis?",
            b: [{ chatID: 10, text: ".......Yes", callback: "lolaTalk" },
            { chatID: -1, text: "No", callback: "" }]
        },
        {
            q: "How old were you when you got your first kiss?",
            b: [{ chatID: -1, text: "Before I turned 18", callback: "" },
            { chatID: -1, text: "When we kissed each other.", callback: "" }]
        },
        {
            q: "Do you want to lick our dirty panties?",
            b: [{ chatID: 11, text: "The dirtier the better", callback: "evaTalk" },
            { chatID: -1, text: "Gross.. no", callback: "" }]
        },
        {
            q: "Do you like big butts?",
            b: [{ chatID: -1, text: "I like big butts and I cannot lie.", callback: "" },
            { chatID: -1, text: "I'm more of a flat butt kinda guy.", callback: "" }]
        },
        {
            q: "Do you find farts sexy?",
            b: [{ chatID: 10, text: "I would suck your fart through a garden hose!", callback: "lolaTalk" },
            { chatID: -1, text: "Ew, gross", callback: "" }]
        },
        {
            q: "Would you ever let someone lick your butthole?",
            b: [{ chatID: 9, text: "oh yeah, do you know anyone?", callback: "evaTalk" },
            { chatID: -1, text: "Hell no!", callback: "" }]
        },
        {
            q: "We know you wear panties, but would you ever wear women's clothes?",
            b: [{ chatID: 10, text: "Only if it's sexy", callback: "lolaTalk" },
            { chatID: -1, text: "Not a chance", callback: "" }]
        },
        {
            q: "Have you ever eaten a girl out?",
            b: [{ chatID: -1, text: "Yes I have!", callback: "" },
            { chatID: -1, text: "No, not yet", callback: "" }]
        },
        {
            q: "Do you like wearing " + sc.n("lola") + "'s panties?",
            b: [{ chatID: 11, text: "Yes", callback: "evaTalk" },
            { chatID: -1, text: "No", callback: "" }]
        },
        {
            q: "Have you ever tasted your own cum?",
            b: [{ chatID: 9, text: "Yes I have. It's not that weird.", callback: "evaTalk" },
            { chatID: -1, text: "Ewwww, no way", callback: "" }]
        },
        {
            q: "Have you ever fallen in love at first sight?",
            b: [{ chatID: -1, text: "No, it takes time for me to fall in love. ", callback: "" },
            { chatID: -1, text: "Yes, it was wonderful.", callback: "" }]
        },
        {
            q: "Would you ever lick so butthole?",
            b: [{ chatID: 10, text: "mmm sure if he washed it first.", callback: "lolaTalk" },
            { chatID: -1, text: "pffffffft gross", callback: "" }]
        },
        {
            q: "Have you ever wanted to be tied up?",
            b: [{ chatID: -1, text: "Oh yea!", callback: "" },
            { chatID: -1, text: "not really; no", callback: "" }]
        },
        {
            q: "Have you ever tasted your own pee?",
            b: [{ chatID: 9, text: "It's not that bad, a bit warm and salty", callback: "evaTalk" },
            { chatID: -1, text: "No; Gross. No way.", callback: "" }]
        },
        {
            q: "If you were forced to have sex with a man would you want him to put his dick in your",
            b: [{ chatID: -1, text: "mouth", callback: "evaTalk" },
            { chatID: -1, text: "or butt", callback: "evaTalk" }]
        }
    ];
    var myDare = [
        {
            q: "Take your shirt off and let us write Panty Boy on your chest!",
            b: [{ chatID: 14, text: "Awww Really? [Take Shirt off]", callback: "lolaTalk pantyBoy" }]
        },
        {
            q: "Take your pants off!",
            b: [{ chatID: 14, text: "Awww yea! [Take pants off]", callback: "lolaTalk removePants" }]
        }
    ];
    truth = g.shuffleArray(truth);
    myTruth = g.shuffleArray(myTruth);
    g.pass = {
        truth: truth,
        myTruth: myTruth,
        myDare: myDare
    };
    room23.chatcatch("evaSit lolaTalk");
    chat(0, 23);
};

room23.btnclick = function (name) {
    switch (name) {
        case "eva":
            chat("evaClick", 23);
            break;
        case "lola":
            chat("lolaClick", 23);
            break;
        default:
            break;
    }
};

room23.chatcatch = function (callback) {
    var cArray = callback.split(" ");
    for (i = 0; i < cArray.length; i++) {
        switch (cArray[i]) {
            case "evaSit":
                var evaSitImg = ["013_spinEvaSitNoTalkNude2.png", "013_spinEvaSitNoTalkNude1.png", "013_spinEvaSitNoTalkNude.png", "013_spinEvaSitNoTalk.png"];
                nav.killbutton("eva");
                nav.button({
                    "type": "btn",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/" + evaSitImg[g.internal.evaNude]
                }, 23);
                break;
            case "lolaSit":
                var lolaSitImg = ["013_spinLolaSitNude2.png", "013_spinLolaSitNude1.png", "013_spinLolaSitNude.png", "013_spinLolaSit.png"];
                nav.killbutton("lola");
                nav.button({
                    "type": "btn",
                    "name": "lola",
                    "left": 1192,
                    "top": 0,
                    "width": 728,
                    "height": 1071,
                    "image": "24_spinTheBottle/" + lolaSitImg[g.internal.lolaNude]
                }, 23);
                break;
            case "lolaTalk":
                var lolaTalkImg = ["013_spinLolaTalkNude2.png", "013_spinLolaTalkNude1.png", "013_spinLolaTalkNude.png", "013_spinLolaTalk.png"];
                nav.killbutton("lola");
                nav.button({
                    "type": "btn",
                    "name": "lola",
                    "left": 1192,
                    "top": 0,
                    "width": 728,
                    "height": 1071,
                    "image": "24_spinTheBottle/" + lolaTalkImg[g.internal.lolaNude]
                }, 23);
                break;
            case "evaTalk":
                var evaTalkImg = ["013_spinEvaSitNude2.png", "013_spinEvaSitNude1.png", "013_spinEvaSitNude.png", "013_spinEvaSit.png"];
                nav.killbutton("eva");
                nav.button({
                    "type": "btn",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/" + evaTalkImg[g.internal.evaNude]
                }, 23);
                break;
            case "lolaWedgie":
                nav.killbutton("lola");
                nav.button({
                    "type": "btn",
                    "name": "lola",
                    "left": 1077,
                    "top": 0,
                    "width": 688,
                    "height": 1080,
                    "image": "24_spinTheBottle/wedgie.png"
                }, 23);
                break;
            case "evaSitEmb":
                nav.killbutton("eva");
                nav.button({
                    "type": "btn",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/evaSitEmb.png"
                }, 23);
                break;
            case "pantyBoy":
                g.back = false;
                cl.c.shirt = null;
                cl.display();
                var top = 20 * g.ratio;
                var left = 20 * g.ratio;
                var btnWidth = 300 * g.ratio;
                var btnHeight = 600 * g.ratio;
                g.internal.pantyBoy = true;
                $('#char-chest').html('<img src="./images/room/23_tord/pantyBoy.png" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');

                break;
            case "removePants":
                cl.c.pants = null;
                cl.display();
                $('#char-chest').html('<img src="./images/room/23_tord/pantyBoy.png" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');
                break;
            case "evaStrip":
                if (g.internal.evaNude > 1) {
                    g.internal.evaNude = 1;
                    room23.chatcatch("evaTalk");
                }
                else {
                    g.internal.evaNude = 0;
                    nav.killbutton("eva");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 720,
                        "top": 0,
                        "width": 316,
                        "height": 1080,
                        "image": "24_spinTheBottle/013_evaRemovePanties.png"
                    }, 23);
                }
                break;
            case "lolaStrip":
                if (g.internal.lolaNude > 1) {
                    g.internal.lolaNude = 1;
                    room23.chatcatch("lolaTalk");
                }
                else {
                    var asdfasdf;
                }
                break;
            case "meStrip":
                g.internal.holder = cl.c.panties;
                cl.nude();
                cl.c.panties = g.internal.holder;
                cl.display();
                if (g.internal.pantyBoy)
                    $('#char-chest').html('<img src="./images/room/23_tord/pantyBoy.png" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');
                break;
            case "pantyStrip1":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 451,
                    "top": 83,
                    "width": 1469,
                    "height": 997,
                    "image": "24_spinTheBottle/pantyStrip1.png"
                }, 23);
                break;
            case "pantyStrip2":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 0,
                    "top": 68,
                    "width": 1920,
                    "height": 1012,
                    "image": "24_spinTheBottle/pantyStrip2.png"
                }, 23);
                break;
            case "momHi":
                nav.killbutton("lola");
                nav.killbutton("eva");
                nav.bg("24_spinTheBottle/caught.jpg");
                break;
            case "momHi1":
                nav.bg("24_spinTheBottle/caught1.jpg");
                break;
            case "leave":
                sc.setstep("me", 3);
                sc.setstep("landlord", -1);
                sc.setstep("lola", 8);
                sc.setstep("eva", 7);
                char.settime(23, 47);
                char.room(10);
                break;
            default:

                break;

        }
    }
};

room23.chat = function (chatID) {
    var retEntry;
    if (chatID === "evaClick") { //clickEva
        if (g.internal.eva === 0) {
            chatID = 16;
        }
        else if (g.internal.eva === 1) {
            if (g.internal.lola < 1)
                g.internal.lola = 1;
            chatID = 16;
        }
    }
    if (chatID === 300) { //eva
        if (g.internal.eva === 0) {
            g.internal.eva++;
            g.internal.speaker = "eva";
            chatID = 7;
        }
        else if (g.internal.eva === 1) {
            chatID = 17;
        }
    }
    if (chatID === "lolaClick") {
        if (g.internal.lola === 0) {
            chatID = 5;
        }
        else {
            g.internal.lola = 1;
            g.internal.eva = 1;
            chatID= 45;
        }
    }
    if (chatID === 400) { //lola
        if (g.internal.lola === 0) {
            g.internal.lola++;
            g.internal.speaker = "lola";
            chatID = 7;
        }
    }
    else if (chatID === 500) {//me dare
        retEntry = {
            chatID: 0,
            speaker: g.internal.speaker,
            text: g.pass.myDare[0].q,
            button: g.pass.myDare[0].b
        };
        g.pass.myDare.shift();
    }
    if (chatID < 100) {
        var cArray = [
            {
                chatID: 0,
                speaker: "lola",
                text: "I'm so excited, I hope you don't make us do anything perverted... *wink* ",
                button: [
                    { chatID: 1, text: "...", callback: "lolaSit evaTalk" }
                ]
            },
            {
                chatID: 1,
                speaker: "eva",
                text: "Whatever " + sc.n("lola") + ", you know your inner slut wants " + sc.n("me") + " to go full pervert!",
                button: [
                    { chatID: 2, text: "Don't worry " + sc.n("eva") + ", I'll make sure to include you too.", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "eva",
                text: "Hahah you better creep-o!",
                button: [
                    { chatID: -1, text: "So I'll start this game!", callback: "evaSit" }
                ]
            },
            {
                chatID: 3,
                speaker: "eva",
                text: "Truth",
                button: [
                    { chatID: 4, text: g.pass.truth[0].q, callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 4,
                speaker: "eva",
                text: g.pass.truth[0].e,
                button: [
                    { chatID: 300, text: "Your turn " + sc.n("eva"), callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "lola",
                text: "Truth",
                button: [
                    { chatID: 6, text: g.pass.truth[0].q, callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 6,
                speaker: "lola",
                text: g.pass.truth[0].e,
                button: [
                    { chatID: 400, text: "Your turn " + sc.n("lola"), callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: g.internal.speaker,
                text: sc.n("me") + "Truth or Dare",
                button: [
                    { chatID: 8, text: "Truth", callback: "" },
                    { chatID: 500, text: "Dare", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: g.internal.speaker,
                text: g.pass.myTruth[0].q,
                button: g.pass.myTruth[0].b
            },
            {
                chatID: 9,
                speaker: "eva",
                text: "Creep-o",
                button: [{ chatID: -1, text: "My turn", callback: "" }]
            },
            {
                chatID: 10,
                speaker: "lola",
                text: "Oh my, that's weird",
                button: [{ chatID: -1, text: "My turn", callback: "" }]
            },
            {
                chatID: 11,
                speaker: "eva",
                text: "I know you're trying to be nice, but it's just weird coming from you.",
                button: [{ chatID: -1, text: "My turn", callback: "" }]
            },
            {
                chatID: 12,
                speaker: "lola",
                text: "Awwww you're so sweet",
                button: [{ chatID: -1, text: "My turn", callback: "" }]
            },
            {
                chatID: 13,
                speaker: "eva",
                text: "Dare!",
                button: [{ chatID: -1, text: "I dare you to strip down to your underwear. ", callback: "" }]
            },
            {
                chatID: 14,
                speaker: "lola",
                text: "Hahaha panty theif! Never steal my panties!",
                button: [{ chatID: -1, text: "I know. ", callback: "" }]
            },
            {
                chatID: 15,
                speaker: "lola",
                text: "",
                button: [{ chatID: -1, text: "I know. ", callback: "" }]
            },
            {
                chatID: 16,
                speaker: "me",
                text: sc.n("eva") + " Truth or Dare?",
                button: [{ chatID: 3, text: "....", callback: "" }]
            },
            {
                chatID: 17,
                speaker: "eva",
                text: sc.n("lola") + " it's your turn. Truth or dare.",
                button: [{ chatID: 18, text: "....", callback: "evaSit lolaTalk" }]
            },
            {
                chatID: 18,
                speaker: "lola",
                text: "Truths are sooo boring, give me a dare!",
                button: [{ chatID: 19, text: "....", callback: "evaTalk lolaSit" }]
            },
            {
                chatID: 19,
                speaker: "eva",
                text: "You asked for it! I dare you to get a massive wedgie from  " + sc.n("me") + "!",
                button: [{ chatID: 20, text: "....", callback: "lolaTalk evaSit" }]
            },
            {
                chatID: 20,
                speaker: "lola",
                text: "OOOOOoohhhh hahaha ok!",
                button: [{ chatID: 21, text: "[Give " + sc.n("lola") + " a wedgie]", callback: "lolaWedgie evaTalk" }]
            },
            {
                chatID: 21,
                speaker: "eva",
                text: "HAHAHAH you'll be picking those out for a week!",
                button: [{ chatID: 22, text: "...", callback: "lolaTalk evaSit" }]
            },
            {
                chatID: 22,
                speaker: "lola",
                text: "Oh yeah, " + sc.n("eva") + "! Truth or dare, and don't ba a chicken!",
                button: [{ chatID: 23, text: "...", callback: "lolaSit evaTalk" }]
            },
            {
                chatID: 23,
                speaker: "eva",
                text: "I'm no chicken! DARE!",
                button: [{ chatID: 24, text: "...", callback: "lolaTalk evaSit" }]
            },
            {
                chatID: 24,
                speaker: "lola",
                text: "I dare you to strip down to your panties!",
                button: [{ chatID: 25, text: "...", callback: "lolaSit evaSitEmb" }]
            },
            {
                chatID: 25,
                speaker: "eva",
                text: "huh...? hahah yea... of course.",
                button: [{ chatID: 26, text: "...", callback: "lolaTalk" }]
            },
            {
                chatID: 26,
                speaker: "lola",
                text: "That's what you get, now strip!",
                button: [{ chatID: 27, text: "...", callback: "evaStrip" }]
            },
            {
                chatID: 27,
                speaker: "eva",
                text: "Ok, it's your turn " + sc.n("lola") + "! Truth or dare!",
                button: [{ chatID: 28, text: "...", callback: "evaSit lolaTalk" }]
            },
            {
                chatID: 28,
                speaker: "lola",
                text: "Truth",
                button: [{ chatID: 29, text: "...", callback: "evaTalk lolaSit" }]
            },
            {
                chatID: 29,
                speaker: "eva",
                text: "WHAT!!!! ",
                button: [{ chatID: 30, text: "...", callback: "evaSit lolaTalk" }]
            },
            {
                chatID: 30,
                speaker: "lola",
                text: "Hahahaha, just kidding give me a dare! ",
                button: [{ chatID: 31, text: "...", callback: "lolaSit evaTalk" }]
            },
            {
                chatID: 31,
                speaker: "eva",
                text: "OOooo just for that I dare you to get totally naked! ",
                button: [{ chatID: 32, text: "...", callback: "lolaTalk evaSit" }]
            },
            {
                chatID: 32,
                speaker: "lola",
                text: "What, I'm not going to be the only one naked here! ",
                button: [{ chatID: 33, text: "...", callback: "lolaSit evaStrip" }]
            },
            {
                chatID: 33,
                speaker: "eva",
                text: "OK, " + sc.n("me") + " you strip down to your underwear so " + sc.n("lola") + " can't chicken out!",
                button: [
                    { chatID: 34, text: "What, it's not my turn.", callback: "evaTalk" },
                    { chatID: 35, text: "Fuck yea!", callback: "meStrip evaTalk" }
                ]
            },
            {
                chatID: 34,
                speaker: "eva",
                text: "Don't be a pussy, take it off! Now chicken!",
                button: [{ chatID: 35, text: "Ok fine.... ", callback: "meStrip" }]
            },
            {
                chatID: 35,
                speaker: "eva",
                text: "Hahahaha, you're still wearing panties! You are such a panty boy!",
                button: [{ chatID: 36, text: "....", callback: "lolaTalk evaSit" }]
            },
            {
                chatID: 36,
                speaker: "lola",
                text: "That's what you get for stealing my panties!",
                button: [{ chatID: 37, text: "....", callback: "evaTalk lolaSit" }]
            },
            {
                chatID: 37,
                speaker: "eva",
                text: "At least he's not a chicken " + sc.n("lola") + "! Do your dare.",
                button: [{ chatID: 38, text: "YEAH " + sc.n("lola") + " do your dare!", callback: "lolaStrip evaSit" }]
            },
            {
                chatID: 38,
                speaker: "lola",
                text: "This is as far as I'm going. There's no way I'm going to be naked with " + sc.n("me"),
                button: [{ chatID: 39, text: "What, you can't do that, a dare's a dare", callback: "pantyStrip1" }]
            },
            {
                chatID: 39,
                speaker: "eva",
                text: "Take those of you prude!! " + sc.n("me") + "Help me strip these off!",
                button: [{ chatID: 40, text: "[Smile]", callback: "pantyStrip2" }]
            },
            {
                chatID: 40,
                speaker: "lola",
                text: "AAAAAAaaaaaa!!!! Give me those back!!! Those are my panties!!!!",
                button: [{ chatID: 41, text: "[Continue to smile]", callback: "momHi" }]
            },
            {
                chatID: 41,
                speaker: "landlord",
                text: "I heard you screaming all the way downstairs! What is going on and why is " + sc.n("me") +
                    " wearing your panties " + sc.n("lola") + "?",
                button: [{ chatID: 42, text: "I uhhhh ", callback: "momHi1" }]
            },
            {
                chatID: 42,
                speaker: "landlord",
                text: "I don't know what I'm going to do with you! I find you in a pair of panties with your " + sc.n("el") +
                    "! If I hadn't walked in what would have happened!??",
                button: [{ chatID: 43, text: "Nothing... Nothing would have happened", callback: "" }]
            },
            {
                chatID: 43,
                speaker: "landlord",
                text: "Not only are you a dirty boy, but a liar too! I know what would have happened, and it's not going to happen " +
                    "under my roof! Go you your room and start packing your things, you no longer live here!",
                button: [{ chatID: 44, text: "But where will I go?", callback: "" }]
            },
            {
                chatID: 44,
                speaker: "landlord",
                text: "You better just get going because I don't want to see you right now. GET GOING!!!!",
                button: [{ chatID: -1, text: "Yes " + sc.n("landlord") + ".", callback: "leave" }]
            },
            {
                chatID: 45,
                speaker: "lola",
                text: sc.n("eva") + "Truth or Dare",
                button: [{ chatID: 3, text: "...", callback: "evaTalk lolaSit" }]
            },
        ];
        retEntry = cArray[chatID];
    }
    if (chatID === 4)
        g.pass.truth.pop();
    else if (chatID === 8)
        g.pass.myTruth.pop();
    return retEntry;
};
