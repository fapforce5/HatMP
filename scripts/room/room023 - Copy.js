//Truth or Dare
var room23 = {};

room23.main = function () {
    g.internal = { evaNude: 3, lolaNude: 3, meNude: 4, chat1: 0, chat2: 0, myTruthKill: 0, whoTalk: "eva" };
    g.pass = {
        truth: [
            {
                id: 0,
                q: "Have you ever kissed a boy?",
                l: "Ewwww, never!",
                e: "I dunno, probably not as many as your butthead!",
                ul: false,
                ue: false
            },
            {
                id: 1,
                q: "Have you ever eaten a booger?",
                l: "Hahaha, once when i was little!",
                e: "You're so disgusting " + sc.n("me") + ". Never.",
                ul: false,
                ue: false
            },
            {
                id: 2,
                q: "Have you ever peed yourself?",
                l: "sigh; yes, last month when " + sc.n("eva") + " was tickling me and wouldn't let me go to the bathroom.. I peed just a little squirt in my panties.",
                e: "My Ex boyfriend asked me to pee my panties, so I did.",
                ul: false,
                ue: false
            },
            {
                id: 3,
                q: "Who is your secret crush?",
                l: "[BLUSH] It's a secret, but they're in this room...",
                e: "OMG Brock Stone makes my panties soooo wet.",
                ul: false,
                ue: false
            },
            {
                id: 4,
                q: "Are you a virgin?",
                l: "OMG YES!",
                e: "Nope! There isn't a hole on me that is!",
                ul: false,
                ue: false
            },
            {
                id: 5,
                q: "What's your favorite color of underwear?",
                l: "Black.",
                e: "Red, I like the attention it gets.",
                ul: false,
                ue: false
            },
            {
                id: 6,
                q: "Have you tasted your own sweat?",
                l: "hmmmm, maybe, yes? I don't know, that's a weird question.",
                e: "ooohhh, gross no.",
                ul: false,
                ue: false
            },
            {
                id: 7,
                q: "Describe your perfect date.",
                l: "Oh gosh, I guess he would bring me flowers and take me out to the Pasta Place, then walk me home.",
                e: "He'd take me to the mall and buy me everything and anything I want!",
                ul: false,
                ue: false
            },
            {
                id: 8,
                q: "If your mom hated your boyfriend would you dump him?",
                l: "Maybe, it depends on who it is.",
                e: "Not a chance, my mom doesn't have good taste in boys.",
                ul: false,
                ue: false
            },
            {
                id: 9,
                q: "Who is the hottest in this group?",
                l: sc.n("eva") + ", of course!",
                e: "Me!",
                ul: false,
                ue: false
            },
            {
                id: 10,
                q: "What is your biggest turn-off?",
                l: "A smelly boy, ewwww.",
                e: "A small penis. It's just so disappointing.",
                ul: false,
                ue: false
            },
            {
                id: 11,
                q: "Would you go out with an older man?",
                l: "hmmm, maybe a couple years older, but not too much; that's gross.",
                e: "Yes, and I have",
                ul: false,
                ue: false
            },
            {
                id: 12,
                q: "What's your dream job?",
                l: "I've always wanted to be kindergarten teacher. It would be so great to help so many kids.",
                e: "A world traveler. I want to go on adventures around the world!",
                ul: false,
                ue: false
            },
            {
                id: 13,
                q: "What's the most food you've eaten in a single sitting?",
                l: "OMG I totally ate 3 big bowls of pasta and so many bread sticks... It hurt for a full day!",
                e: "I had and entire large pizza. I felt like a huge pig.",
                ul: false,
                ue: false
            },
            {
                id: 14,
                q: "What is something no else knows about you?",
                l: "I hate, hate having my feet touched. I sends chills down my spine!",
                e: "I like having my butthole licked. It's weird I know, but there's just something to it that I love.",
                ul: false,
                ue: false
            },
            {
                id: 15,
                q: "What's your favorite hobby?",
                l: "I love swimming. You'll probably catch me at the pool in the afternoons.",
                e: "Playing phone games I guess.",
                ul: false,
                ue: false
            },
            {
                id: 16,
                q: "What is the sexiest thing about a boy?",
                l: "His shoulders. Nothing better than big strong shoulders.",
                e: "I'm a leg girl. I hate when guys have a muscular body and tiny little skinny little legs.",
                ul: false,
                ue: false
            },
            {
                id: 17,
                q: "Have you ever sent a naked selfie?",
                l: "Maybeeee.....",
                e: "hehehe yea, a few times. ",
                ul: false,
                ue: false
            },
            {
                id: 18,
                q: "Have you ever fantasized about a girl?",
                l: "[BLUSH] yea...",
                e: "Oh yes, Girls are just so sexy and soft.",
                ul: false,
                ue: false
            },
            {
                id: 19,
                q: "Do you sleep in the nude?",
                l: "Yes, we both do sometimes. It's no big deal.",
                e: "Oh yea. Clothes are so uncomfortable when you're trying to sleep. I don't know why people do it.",
                ul: false,
                ue: false
            },
            {
                id: 20,
                q: "Have you ever cheated on a test?",
                l: "Never! I study too hard to cheat.",
                e: "If you're not cheating you're not trying!",
                ul: false,
                ue: false
            }
        ],
        evaDare: [
            {
                t: "I dare you to kiss " + sc.n("lola") + ".",
                c: "bothKissNaked",
                cid: 12
            },
            {
                t: "I dare you to give me a kiss.",
                c: "evaKissZoom",
                cid: 13
            },
            {
                t: "I dare you to put a clothespin on your nipple.",
                c: "evaNipple",
                cid: 15
            },
            {
                t: "I dare you to a pen in your pussy.",
                c: "evaPenPussy",
                cid: 18
            },
            {
                t: "I dare you to eat out " + sc.n("lola") + ".",
                c: "evaEatingLola",
                cid: 19
            },
            {
                t: "I dare you to put your finger in " + sc.n("lola") + "'s butthole. ",
                c: "evaInLolaButt",
                cid: 23
            },
            {
                t: "I dare you and " + sc.n('lola') + " to lick my dick.",
                c: "suckDick",
                cid: 24
            }
        ],
        lolaDare: [
            {
                t: "I dare you to kiss " + sc.n("lola") + ".",
                c: "bothKissNaked",
                cid: 33
            },
            {
                t: "I dare you to give me a kiss.",
                c: "lolaKissZoom",
                cid: 34
            },
            {
                t: "I dare you bend over and spread your butt cheeks.",
                c: "lolaButtTube",
                cid: 36
            },
            {
                t: "I dare you to a pen in your pussy.",
                c: "lolaPenPooper",
                cid: 37
            },
            {
                t: "I dare you to eat out " + sc.n("lola") + ".",
                c: "lolaEatingEva",
                cid: 39
            },
            {
                t: "I dare you to put your finger in " + sc.n("eva") + "'s butthole. ",
                c: "lolaInEvaButt",
                cid: 42
            },
            {
                t: "I dare you and " + sc.n('eva') + " to lick my dick and balls.",
                c: "suckDick",
                cid: 24
            }
        ],
        myTruth: [
            {
                q: "What's your biggest secret crush? You can tell us!",
                b: [{ chatID: 50, text: "My biggest secret crush is both of you!", callback: "lolaTalk" },
                    { chatID: -1, text: "You wouldn't know her, she goes to another school", callback: "" }],
                used: false
            },
            {
                q: "Which one of us is sexier?",
                b: [{ chatID: 51, text: sc.n('lola') + "'s more attractive", callback: "evaTalk" },
                    { chatID: 52, text: sc.n('eva') + "'s sexier", callback: "evaTalk" }],
                used: false
            },
            {
                q: "Have you ever masturbated?",
                b: [{ chatID: -1, text: "Yes, everyone has", callback: "" },
                    { chatID: -1, text: "No, that's gross", callback: "" }],
                used: false
            },
            {
                q: "Have you ever peed in your pants?",
                b: [{ chatID: -1, text: "Yes, but it wasn't my fault!", callback: "" },
                    { chatID: -1, text: "No, I'm not a baby", callback: "" }],
                used: false
            },
            {
                q: "Are you a virgin?",
                b: [{ chatID: 53, text: "Yes, " + sc.n("lola") + " do you want to help me with that!", callback: "lolaTalk" },
                    { chatID: 54, text: "Nope!", callback: "evaTalk" }],
                used: false
            },
            {
                q: "Have you ever seen a real naked guy before?",
                b: [{ chatID: 55, text: "Yes I have", callback: "evaTalk" },
                    { chatID: -1, text: "Nope", callback: "" }],
                used: false
            },
            {
                q: "What's the sexiest thing on a girl's body?",
                b: [{ chatID: -1, text: "Her eyes", callback: "" },
                    { chatID: 56, text: "Feet. Nothing better than a sexy pair of feet.", callback: "lolaTalk" }],
                used: false
            },
            {
                q: "Have you ever touched a butthole?",
                b: [{ chatID: -1, text: "Yes, and it wasn't even my own!", callback: "" },
                    { chatID: -1, text: "Gross, no", callback: "" }],
                used: false
            },
            {
                q: "Have you ever touched another penis?",
                b: [{ chatID: 57, text: ".......Yes", callback: "evaTalk" },
                    { chatID: -1, text: "No", callback: "" }],
                used: false
            },
            {
                q: "How old were you when you got your first kiss?",
                b: [{ chatID: -1, text: "Before I turned 18", callback: "" },
                    { chatID: -1, text: "When we kissed each other.", callback: "" }],
                used: false
            },
            {
                q: "Do you want to lick our dirty panties?",
                b: [{ chatID: 58, text: "The dirtier the better", callback: "lolaTalk" },
                    { chatID: -1, text: "Gross.. no", callback: "" }],
                used: false
            },
            {
                q: "Do you like big butts?",
                b: [{ chatID: -1, text: "I like big butts and I cannot lie.", callback: "" },
                    { chatID: -1, text: "I'm more of a flat butt kinda guy.", callback: "" }],
                used: false
            },
            {
                q: "Do you find farts sexy?",
                b: [{ chatID: 59, text: "I would suck your fart through a garden hose!", callback: "evaTalk" },
                    { chatID: -1, text: "Ew, gross", callback: "" }],
                used: false
            },
            {
                q: "Would you ever let someone lick your butthole?",
                b: [{ chatID: 60, text: "oh yea, do you know anyone?", callback: "evaTalk" },
                    { chatID: -1, text: "Hell no!", callback: "" }],
                used: false
            },
            {
                q: "Would you ever wear women's clothes?",
                b: [{ chatID: 62, text: "Only if it's sexy", callback: "lolaTalk" },
                    { chatID: -1, text: "Not a chance", callback: "" }],
                used: false
            },
            {
                q: "Have you ever eaten a girl out?",
                b: [{ chatID: -1, text: "Yes I have!", callback: "" },
                    { chatID: -1, text: "No, not yet", callback: "" }],
                used: false
            },
            {
                q: "Boxers or briefs?",
                b: [{ chatID: -1, text: "Boxers", callback: "" },
                    { chatID: -1, text: "Briefs", callback: "" }],
                used: false
            },
            {
                q: "Have you ever tasted your own cum?",
                b: [{ chatID: 63, text: "Yes I have. It's not that weird.", callback: "evaTalk" },
                    { chatID: -1, text: "Ewwww, no way", callback: "" }],
                used: false
            },
            {
                q: "Have you ever fallen in love at first sight?",
                b: [{ chatID: -1, text: "No, it takes time for me to fall in love. ", callback: "" }, 
                    { chatID: -1, text: "Yes, it was wonderful.", callback: "" }],
                used: false
            },
            {
                q: "Would you ever lick so butthole?",
                b: [{ chatID: 64, text: "mmm sure if he washed it first.", callback: "lolaTalk" }, 
                    { chatID: -1, text: "pffffffft gross", callback: "" }], 
                used: false
            },
            {
                q: "Have you ever wanted to be tied up?",
                b: [{ chatID: -1, text: "Oh yea!", callback: "" },
                    { chatID: -1, text: "not really; no", callback: "" }],  
                used: false
            },
            {
                q: "Have you ever tasted your own pee?",
                b: [{ chatID: 66, text: "It's not that bad, a bit warm and salty", callback: "evaTalk" },
                    { chatID: -1, text: "No; Gross. No way.", callback: "" }],
                used: false
            },
            {
                q: "If you were forced to have sex with a man would you want him to put his dick in your",
                b: [{ chatID: -1, text: "mouth", callback: "evaTalk" },
                    { chatID: -1, text: "or butt", callback: "evaTalk" }],
                used: false
            }
        ],
        myDare: [
            {
                q: "Play with your penis, we want to watch you stroke it.",
                b: [{ chatID: 79, text: "Oh yea, you like it when I stroke my dick like this?", callback: "lolaTalk evaSit" }],
                used: false
            },
            {
                q: "Spit on your dick.",
                b: [{ chatID: -1, text: "Weird, but ok.", callback: "evaSit lolaSit" }  ],
                used: false
            },
            {
                q: "Spank your ass 10 times with your hand hard!",
                b: [{ chatID: -1, text: "That would be much better if you did the spankings!", callback: "evaSit lolaSit" }],
                used: false
            },
            {
                q: "Spank your ass 10 times with any object and say harder each time",
                b: [{ chatID: 80, text: "HARDER", callback: "" }],
                used: false
            },
            {
                q: "Spit on your finger and touch your b-hole.",
                b: [{ chatID: 89, text: "What? really?", callback: "" },
                    { chatID: 90, text: "Oh yea", callback: "" }],
                used: false
            },
            {
                q: "Write 'SLUT' somewhere on your body.",
                b: [{ chatID: 91, text: "Weird, but ok", callback: "meSlut evaTalk lolaSit" }],
                used: false
            },
            {
                q: "The next time you pee, pee in your underwear!",
                b: [{ chatID: -1, text: "I'm not doing that!", callback: "evaSit lolaSit" },
                    { chatID: -1, text: "Ok, but only because you asked!", callback: "evaSit lolaSit" }],
                used: false
            },
            {
                q: "You can't touch your penis for a day. Not even when you pee.",
                b: [{ chatID: 92, text: "Oh will you help me hold it then?", callback: "" }],
                used: false
            },
            {
                q: "Rub an ice cube on your nipples till they're hard!",
                b: [{ chatID: -1, text: "oh my, that's so cold!", callback: "evaSit lolaSit" }],
                used: false
            },
            {
                q: "Slap your dick.. hard!",
                b: [{ chatID: -1, text: "OUCH!!!", callback: "evaSit lolaSit" }],
                used: false
            },
            {
                q: "Tuck your penis between your legs and dance around the room",
                b: [{ chatID: 93, text: "Hahahaha what????", callback: "" }],
                used: false
            },
            {
                q: "Do 10 naked jumping jacks",
                b: [{ chatID: -1, text: "You just want to see this hot body move up and down!", callback: "evaSit lolaSit" }],
                used: false
            },
            {
                q: "Sharpie in your pooper; heehehe",
                b: [{ chatID: -1, text: "What? No!", callback: "evaSit lolaSit" },
                    { chatID: 94, text: "Ok!", callback: "lolaSit evaTalk" }],
                used: false
            }
        ]
    };
    room23.chatcatch("evaSit lolaTalk");
    chat(0, 23);
};

room23.btnclick = function (name) {
    switch (name) {
        case "eva":
            chat(3, 23);
            break;
        case "lola":
            chat(4, 23);
            break;
        default:
            break;
    }
};

room23.chatcatch = function (callback) {
    var cArray = callback.split(" ");   
    for (i = 0; i < cArray.length; i++) {
        switch (cArray[i]) {
            case "setEva":
                //g.internal.whoTalk = "eva";
                break;
            case "setLola":
                //g.internal.whoTalk = "lola";
                break;
            case "evaSit":
                var evaSitImg = ["013_spinEvaSitNoTalkNude2.png", "013_spinEvaSitNoTalkNude1.png", "013_spinEvaSitNoTalkNude.png","013_spinEvaSitNoTalk.png"];
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
            case "eva2":
                g.internal.evaNude = 2;
                room23.chatcatch("evaSit");
                break;
            case "eva1":
                g.internal.evaNude = 1;
                room23.chatcatch("evaSit");
                break;
            case "eva0":
                g.internal.evaNude = 0;
                room23.chatcatch("evaRemovePanties");
                break;
            case "lola2":
                g.internal.lolaNude = 2;
                room23.chatcatch("lolaTalk");
                break;
            case "lola1":
                g.internal.lolaNude = 1;
                room23.chatcatch("lolaSit");
                break;
            case "lola0":
                g.internal.lolaNude = 0;
                room23.chatcatch("lolaRemovePanties");
                break;
            case "lolaKiss":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1159,
                    "top": 0,
                    "width": 716,
                    "height": 1073,
                    "image": "24_spinTheBottle/013_spinLolaKiss" + g.internal.lolaNude + ".png"
                }, 23);
                break;
            case "evaKiss":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/013_spinEvaKiss" + g.internal.evaNude + ".png"
                }, 23);
                break;
            case "evaKissZoom":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 460,
                    "top": 0,
                    "width": 906,
                    "height": 1080,
                    "image": "24_spinTheBottle/evaKissZoom.png"
                }, 23);
                break;
            case "lolaKissZoom":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 969,
                    "top": 0,
                    "width": 951,
                    "height": 1080,
                    "image": "24_spinTheBottle/lolaKissZoom.png"
                }, 23);
                break;
            case "bothKiss":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 432,
                    "top": 24,
                    "width": 1355,
                    "height": 1056,
                    "image": "24_spinTheBottle/013_spinLolaEvaKiss.png"
                }, 23);
                break;
            case "bothKissNaked":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 490,
                    "top": 11,
                    "width": 1295,
                    "height": 1069,
                    "image": "24_spinTheBottle/013_bothKissNude.png"
                }, 23);
                break;
            case "evaRemovePanties":
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
                break;
            case "lolaRemovePanties":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1317,
                    "top": 0,
                    "width": 537,
                    "height": 1080,
                    "image": "24_spinTheBottle/lolaRemovePanties.png"
                }, 23);
                break;
            case "evaNipple":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/013_evaNipple.png"
                }, 23);
                break;
            case "lolaButtTube":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 992,
                    "top": 221,
                    "width": 928,
                    "height": 859,
                    "image": "24_spinTheBottle/lolaButtTube.png"
                }, 23);

                break;
            case "evaPenPussy":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 276,
                    "top": 135,
                    "width": 955,
                    "height": 945,
                    "image": "24_spinTheBottle/evaPenPussy.png"
                }, 23);
                break;
            case "lolaPenPooper":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1183,
                    "top": 0,
                    "width": 737,
                    "height": 1080,
                    "image": "24_spinTheBottle/lolaPenPooper.png"
                }, 23);
                break;
            case "lolaInEvaButt":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 477,
                    "top": 3,
                    "width": 1156,
                    "height": 1077,
                    "image": "24_spinTheBottle/lolaInEvaButt.png"
                }, 23);
                break;
            case "lolaInEvaButt1":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 477,
                    "top": 3,
                    "width": 1156,
                    "height": 1077,
                    "image": "24_spinTheBottle/lolaInEvaButt1.png"
                }, 23);
                break;
            case "evaInLolaButt":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 477,
                    "top": 3,
                    "width": 1156,
                    "height": 1077,
                    "image": "24_spinTheBottle/evaInLolaButt.png"
                }, 23);
                break;
            case "evaEatingLola":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 735,
                    "top": 36,
                    "width": 871,
                    "height": 1026,
                    "image": "24_spinTheBottle/evaEatingLola.png"
                }, 23);
                break;
            case "lolaEatingEva":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 864,
                    "top": 0,
                    "width": 1036,
                    "height": 1080,
                    "image": "24_spinTheBottle/lolaEatingEva.png"
                }, 23);
                break;
            case "suckDick":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 0,
                    "top": 48,
                    "width": 1920,
                    "height": 1032,
                    "image": "24_spinTheBottle/suckDick.png"
                }, 23);
                break;
            case "dickAnim1":
                cl.horny(100);
                cl.nude();
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "24_spinTheBottle/024_blowey1.gif"
                }, 23);
                break;
            case "dickAnim2":
                nav.bg("24_spinTheBottle/013_spinBGDick.jpg");
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 620,
                    "top": 0,
                    "width": 1095,
                    "height": 1080,
                    "image": "24_spinTheBottle/24_bowy.gif"
                }, 23);
                break;
            case "mumsy":
                nav.killbutton("eva");
                nav.bg("24_spinTheBottle/013_spinbgCaught.jpg");
                break;
            case "meNaked":
                if (g.internal.meNaked === 0) {
                    cl.c.shirt = null;
                    cl.display();
                    g.internal.meNaked = 1;
                    room23.chatcatch("bg evaSit lolaTalk");
                    chat(-1, 23);
                }
                else if (g.internal.meNaked === 1) {
                    cl.c.pants = null;
                    cl.display();
                    g.internal.meNaked = 2;
                    room23.chatcatch("bg evaTalk lolaSit");
                    chat(-1, 23);
                }
                else if (g.internal.meNaked === 2) {
                    cl.c.shoes = null;
                    cl.c.socks = null;
                    cl.display();
                    g.internal.meNaked = 3;
                    room23.chatcatch("bg lolaTalk evaSit");
                    chat(-1, 23);
                }
                break;
            case "evaKill0":
                g.pass.evaDare.splice(0, 1);
                break;
            case "evaKill1":
                g.pass.evaDare.splice(1, 1);
                break;
            case "evaKill2":
                g.pass.evaDare.splice(2, 1);
                break;
            case "lolaKill0":
                g.pass.lolaDare.splice(0, 1);
                break;
            case "lolaKill1":
                g.pass.lolaDare.splice(1, 1);
                break;
            case "lolaKill2":
                g.pass.lolaDare.splice(2, 1);
                break;
            case "meShirt":
                g.internal.meNude = 3;
                cl.c.shirt = null;
                cl.display();
                break;
            case "meSocks":
                g.internal.meNude = 2;
                cl.c.shoes = null;
                cl.c.socks = null;
                cl.display();
                break;
            case "mePants":
                g.internal.meNude = 1;
                cl.c.pants = null;
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.display();
                break;
            case "mePanties":
                g.internal.meNude = 0;
                cl.c.panties = null;
                cl.c.bra = null;
                cl.display();
                break;
            case "meSlut":
                $('#char-accBody').append('<img src="./images/room/24_spinTheBottle/23_slut.png" />');
                break;
            case "leave":
                sc.setstep("me", 3);
                sc.setstep("landlord", 5);
                sc.setstep("lola", 8);
                sc.setstep("eva", 7);
                char.settime(23, 47);
                char.room(10);
                break;
            default:
                console.log(callback + " - miss");
                break;
        }
    }

    /*work with jeffery
     
      
       
    
    {
            chatID: 59,
            speaker: "missy",
            text: "Hmmmm. I'll give you ONE more chance, but if you screw this one up expect your punishment to be 10 times " +
                "worse than wearing panties, is that understood!",
            button: [
                { chatID: 60, text: "Yes ma'am! Thank you ma'am!", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "missy",
            text: "At the Naked Beaver Diner there's been some employee theft happening. I need you to investigate the staff and find out which " +
                "one has been stealing the money from the till. You'll pose as one of the waitresses and get to know the other waitresses...",
            button: [
                { chatID: 61, text: "Waitress, don't you mean waiter?", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "missy",
            text: "<span class='hl-red'>DON'T INTERRUPT ME WHEN I'M TALKING!</span> I'm not an idiot, I know the differences between genders. The Naked Beaver Diner " +
                "only employs waitresses so you'll have to pose as a girl.",
            button: [
                { chatID: 62, text: "Do you think they'll believe I can pull that off!?", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "missy",
            text: "Yes. You look and sound pretty girly. It's almost as if puberty forgot about you. " +
                "With a wig and a bit of makeup I'm sure you can pass as a girly waitresses. ",
            button: [
                { chatID: 63, text: "I don't know if I can.", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "missy",
            text: "Stop right there. I didn't hire you to tell me no, I hired you to carry out the tasks I assign you. " +
                "You should be thanking me for keeping you on after that horrible failure working for " + sc.n("tiffany") +
                ". Here's what you're going to do, stip down to your panties and clean my bathroom. I'm going to call " +
                sc.n("jeffery") + ", the owner of the Naked Beaver Diner, and have him take a look at you to see if you're " +
                "worth it. Now stip down to your panties.",
            button: [
                { chatID: 64, text: "Yes ma'am [Strip down to your panties]", callback: "pantiesOnly" }
            ]
        },
        {
            chatID: 64,
            speaker: "missy",
            text: "Good now make my bathroom spotless while I contact " + sc.n("jeffery") + ".",
            button: [
                { chatID: -1, text: "Yes ma'am [Clean the bathroom]", callback: "clanBathroom" }
            ]
        },
        {
            chatID: 65,
            speaker: "me",
            text: "What's he doing here!! I'm still in these panties!!!",
            button: [
                { chatID: 66, text: "...", callback: "" }
            ]
        },
        {
            chatID: 66,
            speaker: "missy",
            text: "Stop, I didn't tell you to change. " + sc.n("jeffery") + " is here to insepct you, to make sure " +
                "he can let you work at the Naked Beaver. " + sc.n("jeffery") + " is " + sc.n("me") + " up to your standards?",
            button: [
                { chatID: 67, text: "...", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "jeffery",
            text: "You're in panties. Why are you wearing girl's underwear?",
            button: [
                { chatID: 68, text: sc.n("missy") + " told me to", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "missy",
            text: "hhhhmmmm Yes, he's a misbehaving little pervert. ",
            button: [
                { chatID: 69, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 69,
            speaker: "jeffery",
            text: "W-w-w-w-weird, but ok. " + sc.n("me") + " can turn around for me please? ",
            button: [
                { chatID: 70, text: "[Turn around]", callback: "turnAroundJeffery" }
            ]
        },
        {
            chatID: 70,
            speaker: "jeffery",
            text: "OK, thank you. ",
            button: [
                { chatID: 71, text: "[Turn back around]", callback: "turnAroundJeffery1" }
            ]
        },
        {
            chatID: 71,
            speaker: "jeffery",
            text: "I-I-I-I-I th-th-think he'll work. ",
            button: [
                { chatID: 72, text: "huh?", callback: "turnAroundJeffery1" }
            ]
        },
        {
            chatID: 72,
            speaker: "jeffery",
            text: "So one of my waitresses has been stealing from the register. I need you to pose as a waitress, get to know them and " +
                "observe them when they use the till. Please let me know if you see them stealing.",
            button: [
                { chatID: 73, text: "Got it", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "missy",
            text: "Good. Now the office still has things that need to get done like filing so you can choose to either work " +
                "at the Naked Beaver or come here to work. I expect you to show up to either place at a reasonable time " +
                "each morning. Now don't fuck this one up ok.",
            button: [
                { chatID: 74, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 74,
            speaker: "missy",
            text: "Ok, now get out.",
            button: [
                { chatID: 75, text: "My clothes.....", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "missy",
            text: "I said get out!",
            button: [
                { chatID: 75, text: "[leave]", callback: "leave11" }
            ]
        },
    
    
    
    
    
    */
};

room23.chat = function (chatID) {
    var i, b;
    var counter = 0;
    var callback = "";
    var thisButton;
    if (chatID === 500) {
        g.internal.whoTalk = "lola";
        g.internal.chat1 = g.internal.chat2 = 0;
        if (Math.random() < .35 && g.internal.lolaNude > 0 && g.internal.evaNude > 0) {
            g.internal.chat1 = Math.floor(Math.random() * g.pass.truth.length);
            counter = 0;
            while (counter < 24 && g.pass.truth[g.internal.chat1].ue) {
                g.internal.chat1++;
                counter++;
                if (g.internal.chat1 >= g.pass.truth.length)
                    g.internal.chat1 = 0;
            }

            if (counter >= 24) {
                for (i = 0; i < g.pass.truth.length; i++)
                    g.pass.truth[i].ue = false;
                g.internal.chat1 = Math.floor(Math.random() * g.pass.truth.length);
            }
            g.pass.truth[g.internal.chat1].ue = true;
            g.internal.chat2 = g.internal.chat1 + 1;
            if (g.internal.chat2 >= g.pass.truth.length)
                g.internal.chat2 = 0;
           
            return {
                chatID: 500,
                speaker: "eva",
                text: "Truth",
                button: [
                    { chatID: 501, text: g.pass.truth[g.internal.chat1].q, callback: "" },
                    { chatID: 502, text: g.pass.truth[g.internal.chat2].q, callback: "" }
                ]
            };
        }
        else {
            switch (g.internal.evaNude) {
                case 3:
                    thisButton = [
                        { chatID: 6, text: "I dare you to take off your pajama bottoms!", callback: "eva1" }
                    ];
                    break;
                case 1:
                    thisButton = [
                        { chatID: 10, text: "I dare you to take off your little red panties", callback: "eva0 lolaTalk" }
                    ];
                    break;
                case 0:
                    thisButton = new Array();
                    for (i = 0; i < g.pass.evaDare.length && i < 3; i++) {
                        b = g.pass.evaDare[i];
                        thisButton.push({ chatID: b.cid, text: b.t, callback: b.c + " evaKill" + i.toString() });
                    }
                    break;
            }
            return {
                chatID: 500,
                speaker: "eva",
                text: "Dare Me!",
                button: thisButton
            };
        }
    }
    else if (chatID === 501) {
        return {
            chatID: 501,
            speaker: "eva",
            text: g.pass.truth[g.internal.chat1].e,
            button: [
                { chatID: 67, text: "...", callback: "evaSit setEva" }
            ]
        };
    }
    else if (chatID === 502) {
        return {
            chatID: 502,
            speaker: "eva",
            text: g.pass.truth[g.internal.chat2].e,
            button: [
                { chatID: 67, text: "...", callback: "evaSit setEva" }
            ]
        };
    }
    if (chatID === 600) {
        g.internal.whoTalk = "lola";
        g.internal.chat1 = g.internal.chat1 = 0;
        if (Math.random() < .35) {
            g.internal.chat1 = Math.floor(Math.random() * g.pass.truth.length);
            counter = 0;
            while (counter < 24 && g.pass.truth[g.internal.chat1].ue) {
                g.internal.chat1++;
                counter++;
                if (g.internal.chat1 >= g.pass.truth.length)
                    g.internal.chat1 = 0;
            }

            if (counter >= 24) {
                for (i = 0; i < g.pass.truth.length; i++)
                    g.pass.truth[i].ue = false;
                g.internal.chat1 = Math.floor(Math.random() * g.pass.truth.length);
            }
            g.pass.truth[g.internal.chat1].ue = true;
            g.internal.chat2 = g.internal.chat1 + 1;
            if (g.internal.chat2 >= g.pass.truth.length)
                g.internal.chat2 = 0;

            return {
                chatID: 600,
                speaker: "lola",
                text: "Truth",
                button: [
                    { chatID: 601, text: g.pass.truth[g.internal.chat1].q, callback: "" },
                    { chatID: 602, text: g.pass.truth[g.internal.chat2].q, callback: "" }
                ]
            };
        }
        else {
            switch (g.internal.lolaNude) {
                case 3:
                    thisButton = [
                        { chatID: 26, text: "I dare you to take off your PJs!", callback: "lola1 evaTalk" }
                    ];
                    break;
                case 1:
                    thisButton = [
                        { chatID: 28, text: "I dare you to take off your boring white panties", callback: "lola0 evaTalk" }
                    ];
                    break;
                case 0:
                    thisButton = new Array();
                    for (i = 0; i < g.pass.lolaDare.length && i < 3; i++) {
                        b = g.pass.lolaDare[i];
                        thisButton.push({ chatID: b.cid, text: b.t, callback: b.c + " lolaKill" + i.toString() });
                    }
                    break;
            }
            return {
                chatID: 600,
                speaker: "lola",
                text: "Dare Me!",
                button: thisButton
            };
        }
    }
    else if (chatID === 601) {
        return {
            chatID: 601,
            speaker: "lola",
            text: g.pass.truth[g.internal.chat1].l,
            button: [
                { chatID: 68, text: "...", callback: "lolaSit setLola" }
            ]
        };
    }
    else if (chatID === 602) {
        return {
            chatID: 602,
            speaker: "lola",
            text: g.pass.truth[g.internal.chat2].l,
            button: [
                { chatID: 68, text: "...", callback: "lolaSit setLola" }
            ]
        };
    }
    else if (chatID === 700) {
        callback = Math.floor(Math.random() * g.pass.myTruth.length);
        counter = 0;
        while (counter < g.pass.myTruth.length && g.pass.myTruth[callback].used) {
            callback++;
            counter++;
            if (callback >= g.pass.myTruth.length)
                callback = 0;
        }
        if (counter === g.pass.myTruth.length) {
            for (i = 0; i < g.pass.myTruth.length; i++)
                g.pass.myTruth[i].used = false;
            callback = Math.floor(Math.random() * g.pass.myTruth.length);
        }
        if (g.internal.whoTalk === "lola")
            room23.chatcatch("lolaTalk");
        else
            room23.chatcatch("evaTalk");

        g.pass.myTruth[callback].used = true;
        return {
            chatID: 700,
            speaker: g.internal.whoTalk,
            text: g.pass.myTruth[callback].q,
            button: g.pass.myTruth[callback].b
        };
    }
    else if (chatID === 800) {
        switch (g.internal.meNude) {
            case 4:
                return {
                    chatID: 800,
                    speaker: g.internal.whoTalk,
                    text: "I dare you to take off your shirt!",
                    button: [
                        { chatID: 69, text: "[Take off shirt]", callback: "meShirt evaSit lolaTalk" }
                    ]
                };
            case 3:
                return {
                    chatID: 800,
                    speaker: g.internal.whoTalk,
                    text: "I dare you to take off your shoes and socks!",
                    button: [
                        { chatID: -1, text: "[Take off shoes and socks]", callback: "meSocks" }
                    ]
                };
            case 2:
                return {
                    chatID: 800,
                    speaker: g.internal.whoTalk,
                    text: "Ok " + sc.n("me") + ", it's time to take those pants off!",
                    button: [
                        { chatID: cl.c.panties === "w" ? 70 : 76, text: "[Take off pants]", callback: "mePants lolaTalk evaSit" }
                    ]
                };
            case 1:
                return {
                    chatID: 800,
                    speaker: g.internal.whoTalk,
                    text: "It's naked time!",
                    button: [
                        { chatID: 77, text: "[Strip Naked]", callback: "mePanties evaTalk lolaSit" }
                    ]
                };
            case 0:
                callback = Math.floor(Math.random() * g.pass.myDare.length);
                counter = 0;
                while (counter < g.pass.myDare.length && g.pass.myDare[callback].used) {
                    callback++;
                    counter++;
                    if (callback >= g.pass.myDare.length)
                        callback = 0;
                }
                if (counter === g.pass.myDare.length) {
                    for (i = 0; i < g.pass.myDare.length; i++)
                        g.pass.myDare[i].used = false;
                    callback = Math.floor(Math.random() * g.pass.myDare.length);
                }
                if (g.internal.whoTalk === "lola")
                    room23.chatcatch("lolaTalk");
                else
                    room23.chatcatch("evaTalk");

                g.pass.myDare[callback].used = true;
                return {
                    chatID: 800,
                    speaker: g.internal.whoTalk,
                    text: g.pass.myDare[callback].q,
                    button: g.pass.myDare[callback].b
                };
            default:
                break;

        }
    }
    else {
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
                speaker: "me",
                text: sc.n("eva") + " Truth or Dare",
                button: [
                    { chatID: 500, text: "...", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: sc.n("lola") + " Truth or Dare",
                button: [
                    { chatID: 600, text: "...", callback: "evaSit lolaTalk" }
                ]
            },
            {
                chatID: 5,
                speaker: "eva",
                text: "Sigh... I knew you just wanted to stare at my titties!",
                button: [
                    { chatID: 67, text: "Yes I did", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "eva",
                text: "You like my panties? They're my favorite color. ",
                button: [
                    { chatID: 7, text: "Yes, they really bring out your nipples.", callback: "evaTalk" },
                    { chatID: 8, text: "oh, um, yes, yes very pretty", callback: "lolaTalk evaSit" }
                ]
            },
            {
                chatID: 7,
                speaker: "eva",
                text: "perv",
                button: [
                    { chatID: 67, text: "...", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "lola",
                text: "It's ok " + sc.n("me") + ". You can enjoy them. I love them so much I steam them sometimes.",
                button: [
                    { chatID: 9, text: "...", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 9,
                speaker: "eva",
                text: "Yea and you never wash them so they always smell like the gym.",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit" }
                ]
            },
            {
                chatID: 10,
                speaker: "lola",
                text: "All right " + sc.n("eva") + " getting naked!",
                button: [
                    { chatID: 67, text: "...", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 11,
                speaker: "eva",
                text: "I ain't no prude! ",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit" }
                ]
            },
            {
                chatID: 12,
                speaker: "eva",
                text: "mmmMMMMMmmMM ",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 13,
                speaker: "eva",
                text: "mmmMMMMMmmMM ",
                button: [
                    { chatID: 14, text: "...", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 14,
                speaker: "eva",
                text: "You're not a terrible kisser, you know. ",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit" }
                ]
            },
            {
                chatID: 15,
                speaker: "eva",
                text: "OW ow OW ow OW ow wow oW ",
                button: [
                    { chatID: 16, text: "...", callback: "lolaTalk" }
                ]
            },
            {
                chatID: 16,
                speaker: "lola",
                text: "Hahaha " + sc.n('eva') + " doens't like pain, at all!",
                button: [
                    { chatID: 17, text: "...", callback: "lolaSit" }
                ]
            },
            {
                chatID: 17,
                speaker: "eva",
                text: "OW ow OW ow OW ow wow oW Fuck I'm taking this stupid thing off!!!!!",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit" }
                ]
            },
            {
                chatID: 18,
                speaker: "eva",
                text: "You like looking at my pussy you weird-o perv",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit" }
                ]
            },
            {
                chatID: 19,
                speaker: "lola",
                text: "Thank you " + sc.n("me") + ". I loooove this dare!",
                button: [
                    { chatID: 20, text: "...", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "eva",
                text: "mmmmmmmm m mm mm m m mm ",
                button: [
                    { chatID: 21, text: "...", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "lola",
                text: "Stop talking and keep licking!",
                button: [
                    { chatID: 22, text: "...", callback: "" }
                ]
            },
            {
                chatID: 22,
                speaker: "eva",
                text: "mmmmm!! mmMmmm mmMMmmmMm mMmmm m M mm",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 23,
                speaker: "eva",
                text: "What kind of sick-o pervert wants to see this? Only you are this weird.",
                button: [
                    { chatID: 67, text: "...", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 24,
                speaker: "eva",
                text: "We thought you would never ask!",
                button: [
                    { chatID: 95, text: "...", callback: "dickAnim1" }
                ]
            },
            {
                chatID: 25,
                speaker: "lola",
                text: "So do you like by boobs?",
                button: [
                    { chatID: 68, text: "Yes, I could stare at them all day.", callback: "lolaSit" }
                ]
            },
            {
                chatID: 26,
                speaker: "eva",
                text: "Your panties are always so boring.",
                button: [
                    { chatID: 27, text: "...", callback: "lolaTalk evaSit" }
                ]
            },
            {
                chatID: 27,
                speaker: "lola",
                text: "Well no one ever see them but you, and you never care.",
                button: [
                    { chatID: 68, text: "...", callback: "lolaSit" }
                ]
            },
            {
                chatID: 28,
                speaker: "eva",
                text: "Oh yea take them off so the perv can see you naked!",
                button: [
                    { chatID: 29, text: "...", callback: "lolaTalk evaSit" }
                ]
            },
            {
                chatID: 29,
                speaker: "lola",
                text: "So what do you think, am I sexy?",
                button: [
                    { chatID: 30, text: sc.n('lola') + " you're the sexiest girl I know!", callback: "lolaSit evaTalk" },
                    { chatID: 32, text: "I would lick your body from top to bottom", callback: "lolaSit evaTalk" }
                ]
            },
            {
                chatID: 30,
                speaker: "eva",
                text: "HAY!!!",
                button: [
                    { chatID: 31, text: "...", callback: "lolaTalk evaSit" }
                ]
            },
            {
                chatID: 31,
                speaker: "lola",
                text: "Don't worry " + sc.n("eva") + ", you're the sexiest girl I know.",
                button: [
                    { chatID: 68, text: "...", callback: "lolaSit" }
                ]
            },
            {
                chatID: 32,
                speaker: "eva",
                text: "Ok, weird-o, you turned this from sexy to creepy. ",
                button: [
                    { chatID: 68, text: "You're a butthead " + sc.n("eva") + ".", callback: "evaSit" }
                ]
            },
            {
                chatID: 33,
                speaker: "lola",
                text: "MmmMM yeaaaaa ",
                button: [
                    { chatID: 68, text: "...", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 34,
                speaker: "lola",
                text: "MmmMMmmmmmmmmmmm ",
                button: [
                    { chatID: 35, text: "...", callback: "lolaTalk" }
                ]
            },
            {
                chatID: 35,
                speaker: "lola",
                text: "I loved that. We should do that more often. ",
                button: [
                    { chatID: 68, text: "...", callback: "lolaSit" }
                ]
            },
            {
                chatID: 36,
                speaker: "lola",
                text: "Like this? This can't possibly be attractive. I feel so gross.",
                button: [
                    { chatID: 68, text: "Don't worry " + sc.n("lola") + ". You're doing great. Also your butthole is beautiful.", callback: "lolaSit" }
                ]
            },
            {
                chatID: 37,
                speaker: "lola",
                text: "I think I may have to draw a picture with my pussy pen!",
                button: [
                    { chatID: 38, text: "...", callback: "evaTalk" }
                ]
            },
            {
                chatID: 38,
                speaker: "eva",
                text: "Hahaha you would fall on your butt if you tried.",
                button: [
                    { chatID: 68, text: "...", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 39,
                speaker: "eva",
                text: "Hahah that tickles, do it like you normally do.",
                button: [
                    { chatID: 40, text: "...", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "lola",
                text: "mMMmm lalalallalal mmmMMMmmmm",
                button: [
                    { chatID: 41, text: "...", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "eva",
                text: "oh yea, you know how I like it",
                button: [
                    { chatID: 68, text: "...", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 42,
                speaker: "eva",
                text: "Hay " + sc.n("lola") + ", do you want to freak out the weird-o?",
                button: [
                    { chatID: 43, text: "...", callback: "" }
                ]
            },
            {
                chatID: 43,
                speaker: "lola",
                text: "Oh, you don't think that's too much?",
                button: [
                    { chatID: 44, text: "...", callback: "" }
                ]
            },
            {
                chatID: 44,
                speaker: "eva",
                text: "No, Lets give the prevert a real show.",
                button: [
                    { chatID: 45, text: "...", callback: "lolaInEvaButt1" }
                ]
            },
            {
                chatID: 45,
                speaker: "eva",
                text: "OOOOOoooooooo yea, feels so full!",
                button: [
                    { chatID: 46, text: "...", callback: "" }
                ]
            },
            {
                chatID: 46,
                speaker: "lola",
                text: "I always like how warm it makes my hand, and so squishy, hehehe",
                button: [
                    { chatID: 47, text: "...", callback: "" }
                ]
            },
            {
                chatID: 47,
                speaker: "eva",
                text: "Ok, you gotta take it out",
                button: [
                    { chatID: 49, text: "...", callback: "lolaSit evaSit" }
                ]
            },
            {
                chatID: 48,
                speaker: "lola",
                text: "noop",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 49,
                speaker: "lola",
                text: "You should feel special, she doens't do that for anyone.",
                button: [
                    { chatID: 68, text: "I do feel special, that was totally awesome!", callback: "" }
                ]
            },
            {
                chatID: 50,
                speaker: "lola",
                text: "Awwww you're so sweet",
                button: [
                    { chatID: -1, text: "No, you are!", callback: "lolaSit" }
                ]
            },
            {
                chatID: 51,
                speaker: "eva",
                text: "You're a butthead!",
                button: [
                    { chatID: -1, text: "What can I say I like a girl with class.", callback: "evaSit" }
                ]
            },
            {
                chatID: 52,
                speaker: "eva",
                text: "Whatever you foot fetish pervert!",
                button: [
                    { chatID: -1, text: "You just do it for me sexy.", callback: "evaSit" }
                ]
            },
            {
                chatID: 53,
                speaker: "lola",
                text: "Maybe... but not right now.",
                button: [
                    { chatID: -1, text: "Ok, I'll be back later tonight!", callback: "lolaSit" }
                ]
            },
            {
                chatID: 54,
                speaker: "eva",
                text: "You don't have to lie to make friends.",
                button: [
                    { chatID: -1, text: "What? I'm not a liar, you just don't know her.", callback: "evaSit" }
                ]
            },
            {
                chatID: 55,
                speaker: "eva",
                text: "What a dirty weird-o. You just perv on anyone don't you?",
                button: [
                    { chatID: -1, text: "Well....", callback: "evaSit" }
                ]
            },
            {
                chatID: 56,
                speaker: "lola",
                text: "Oh, I've always wanted to try and give a guy a foot job, maybe sometime you'll let me try it out?",
                button: [
                    { chatID: -1, text: "Oh god, there's nothing I want more", callback: "lolaSit" }
                ]
            },
            {
                chatID: 57,
                speaker: "eva",
                text: "You probably molested him you pervert",
                button: [
                    { chatID: -1, text: "You're just mad no one would molest you!", callback: "evaSit" }
                ]
            },
            {
                chatID: 58,
                speaker: "lola",
                text: "You may not want to. My are always so sweaty from when I work out all the time.",
                button: [
                    { chatID: -1, text: "The scent in your panties is what makes it hot", callback: "lolaSit" }
                ]
            },
            {
                chatID: 59,
                speaker: "eva",
                text: "You have the gift of taking something funny and making it weird and awkward.",
                button: [
                    { chatID: -1, text: "Feel free to pin me down and do a bare butt fart in my face anytime!", callback: "evaSit" }
                ]
            },
            {
                chatID: 60,
                speaker: "eva",
                text: "weird-o",
                button: [
                    { chatID: 61, text: "...", callback: "evaSit lolaTalk" }
                ]
            },
            {
                chatID: 61,
                speaker: "lola",
                text: "Whatever " + sc.n("eva") + "! You love getting your butthole licked",
                button: [
                    { chatID: -1, text: "Hahaha you're a perver too " + sc.n("eva") + ".", callback: "lolaSit" }
                ]
            },
            {
                chatID: 62,
                speaker: "lola",
                text: "Really! I've always wanted to dress up a boy as a girl, do their hair, paint their nails. That would be sooo fun!",
                button: [
                    { chatID: -1, text: "Anytime " + sc.n("lola"), callback: "lolaSit" }
                ]
            },
            {
                chatID: 63,
                speaker: "eva",
                text: "No, it is weird, but I'm not suprised by your perviness. All those little spermies swimming around  your " +
                    "belly has got to be weird.",
                button: [
                    { chatID: -1, text: "It's not bad, you can have some too if you want.", callback: "evaSit" }
                ]
            },
            {
                chatID: 64,
                speaker: "lola",
                text: "I know " + sc.n("eva") + " would love to be on the receiving end of that!",
                button: [
                    { chatID: 65, text: "My mouth is ready", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 65,
                speaker: "eva",
                text: "Ewww, not by you! You can lick " + sc.n("lola") + "'s butthole, make sure she showers first or it's all salty",
                button: [
                    { chatID: -1, text: "I'm in, you don't even have to shower first!", callback: "evaSit" }
                ]
            },
            {
                chatID: 66,
                speaker: "eva",
                text: "Not only are you weird, but really gross too!",
                button: [
                    { chatID: -1, text: "Maybe, I'm open to drink your pee too if you want.", callback: "evaSit" }
                ]
            },
            {
                chatID: 67,
                speaker: "eva",
                text: "Truth or Dare " + sc.n("me") + ".",
                button: [
                    { chatID: 700, text: "Truth", callback: "evaTalk lolaSit" },
                    { chatID: 800, text: "Dare", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 68,
                speaker: "lola",
                text: "Truth or Dare " + sc.n("me") + ".",
                button: [
                    { chatID: 700, text: "Truth", callback: "evaSit lolaTalk" },
                    { chatID: 800, text: "Dare", callback: "evaSit lolaTalk" }
                ]
            },
            {
                chatID: 69,
                speaker: "lola",
                text: "Ooooo Looking good, you must have been working out!.",
                button: [
                    { chatID: -1, text: "Yes, and thank you", callback: "lolaSit" }
                ]
            },
            {
                chatID: 70,
                speaker: "lola",
                text: "Oh My God! Are those my missing panties?!",
                button: [
                    { chatID: 71, text: "Um well, you see ....", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 71,
                speaker: "eva",
                text: "Hahahahaha I always knew you were a perv, but I never thought you were a panty wearing perv!",
                button: [
                    { chatID: 72, text: sc.n('eva') + "!", callback: "lolaTalk evaSit" }
                ]
            },
            {
                chatID: 72,
                speaker: "lola",
                text: "Well I guess they're yours now that you've stretched them out, just promise you won't steal any more " +
                    "of my panties ever again!",
                button: [
                    { chatID: 73, text: "I'm so sorry " + sc.n("lola") + ". I promise never to steal your panties again", callback: "" }
                ]
            },
            {
                chatID: 73,
                speaker: "lola",
                text: "Ok. You know if you wanted to wear my panties all you had to do was ask, I would have given you a pair " +
                    "of " + sc.n("eva") + "'a panties",
                button: [
                    { chatID: 74, text: "...", callback: "evaTalk lolaSit" }
                ]
            },
            {
                chatID: 74,
                speaker: "eva",
                text: "HAY! don't steal my panties either!",
                button: [
                    { chatID: 75, text: "No one would want to wear you lame panties", callback: "" }
                ]
            },
            {
                chatID: 75,
                speaker: "eva",
                text: "Butthead",
                button: [
                    { chatID: -1, text: "Turd theif", callback: "" }
                ]
            },
            {
                chatID: 76,
                speaker: "lola",
                text: "Looking good " + sc.n("me") + "!",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "" }
                ]
            },
            {
                chatID: 77,
                speaker: "eva",
                text: "Oh wow, I had no idea you had such a huge dick!",
                button: [
                    { chatID: 78, text: "Oh, well thank you?", callback: "lolaTalk evaSit" }
                ]
            },
            {
                chatID: 78,
                speaker: "lola",
                text: "Yea " + sc.n("me") + " you should really start showing that thing off more, you'll get all the girls, " +
                    "maybe even us.",
                button: [
                    { chatID: -1, text: "That's the dream", callback: "lolaSit" }
                ]
            },
            {
                chatID: 79,
                speaker: "lola",
                text: "Oh my god! that is so hot!",
                button: [
                    { chatID: -1, text: "Thanks " + sc.n("lola") + ".", callback: "lolaSit" }
                ]
            },
            {
                chatID: 80,
                speaker: "me",
                text: "..HARDER",
                button: [
                    { chatID: 81, text: "...", callback: "" }
                ]
            },
            {
                chatID: 81,
                speaker: "me",
                text: "...HARDER",
                button: [
                    { chatID: 82, text: "...", callback: "" }
                ]
            },
            {
                chatID: 82,
                speaker: "me",
                text: "....HARDER",
                button: [
                    { chatID: 83, text: "...", callback: "" }
                ]
            },
            {
                chatID: 83,
                speaker: "me",
                text: ".....HARDER",
                button: [
                    { chatID: 84, text: "...", callback: "" }
                ]
            },
            {
                chatID: 84,
                speaker: "me",
                text: "......HARDER",
                button: [
                    { chatID: 85, text: "...", callback: "" }
                ]
            },
            {
                chatID: 85,
                speaker: "me",
                text: ".......HARDER",
                button: [
                    { chatID: 86, text: "...", callback: "" }
                ]
            },
            {
                chatID: 86,
                speaker: "me",
                text: "........HARDER",
                button: [
                    { chatID: 87, text: "...", callback: "" }
                ]
            },
            {
                chatID: 87,
                speaker: "me",
                text: ".........HARDER",
                button: [
                    { chatID: 88, text: "...", callback: "" }
                ]
            },
            {
                chatID: 88,
                speaker: g.internal.whoTalk,
                text: "Last one....",
                button: [
                    { chatID: -1, text: "HARDER!", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 89,
                speaker: g.internal.whoTalk,
                text: "No, not really",
                button: [
                    { chatID: -1, text: "Oh good, I was scared for a second that you wanted to see that.", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 90,
                speaker: g.internal.whoTalk,
                text: "Oh gross! I was only kidding!",
                button: [
                    { chatID: -1, text: "Oh.. hahaha, a dare's a dare!", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 91,
                speaker: "eva",
                text: "Hahaha That's so sad how ready you are to humiliate yourself for us! Only a stupid pervert would actually do that! ",
                button: [
                    { chatID: -1, text: "What can I say, I never back out of a dare!", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 92,
                speaker: g.internal.whoTalk,
                text: "Nope, you're just going to have to pee all over yourself! ",
                button: [
                    { chatID: -1, text: "Goss, but ok!", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 93,
                speaker: g.internal.whoTalk,
                text: "You heard me, I want to see you dance!",
                button: [
                    { chatID: -1, text: "Ok, hope you like this dance!", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 94,
                speaker: "eva",
                text: "Ewwww really? You're really gross!",
                button: [
                    { chatID: -1, text: "Yes I am!", callback: "evaSit lolaSit" }
                ]
            },
            {
                chatID: 95,
                speaker: "lola",
                text: "mmMMMmmMMMMMmm",
                button: [
                    { chatID: 96, text: "Oh yea", callback: "" }
                ]
            },
            {
                chatID: 96,
                speaker: "eva",
                text: "mmMMMMMmmmmMMMMMmmm",
                button: [
                    { chatID: 97, text: "Feels soooo good", callback: "" }
                ]
            },
            {
                chatID: 97,
                speaker: "lola",
                text: "I need this in my mouth",
                button: [
                    { chatID: 98, text: "I love your mouth", callback: "dickAnim2" }
                ]
            },
            {
                chatID: 98,
                speaker: "lola",
                text: "glug glug glug",
                button: [
                    { chatID: 99, text: "Just like that!", callback: "" }
                ]
            },
            {
                chatID: 99,
                speaker: "eva",
                text: "Oh my god " + sc.n("lola") + ", you're going to make him cum, I want to ride it!",
                button: [
                    { chatID: 100, text: "Oh yea " + sc.n("eva") + " hop on!", callback: "" }
                ]
            },
            {
                chatID: 100,
                speaker: "eva",
                text: "OH SHITTTT!!!!",
                button: [
                    { chatID: 101, text: "Wha?", callback: "mumsy" }
                ]
            },
            {
                chatID: 101,
                speaker: "landlord",
                text: "What the hell are you doing with your " + sc.n("el") + "!!!",
                button: [
                    { chatID: 102, text: "Nothing... I swear!", callback: "" }
                ]
            },
            {
                chatID: 102,
                speaker: "landlord",
                text: "That didn't look like nothing, it looked liked your dick was in " + sc.n("lola") + "'s mouth, and " +
                    "you were about the stick your dick into " + sc.n("eva") + "'s pussy! This is completely unacceptable! " +
                    "First you drop out of school, now you're doing dirty dirty things! So very dirty! I think you need to go!",
                button: [
                    { chatID: 103, text: "I'm sorry I'll go to my room and never do this again.", callback: "" }
                ]
            },
            {
                chatID: 103,
                speaker: "landlord",
                text: "You'll go to your room alright! You'll go there and start packing your stuff, because you no longer live here. " +
                    "I'm so angry at you right now!",
                button: [
                    { chatID: 104, text: "But where will I go?", callback: "" }
                ]
            },
            {
                chatID: 104,
                speaker: "landlord",
                text: "You'll go find another place to live, because you don't live here anymore! Now get!",
                button: [
                    { chatID: -1, text: "Yes " + sc.n("landlord") + ".", callback: "leave" }
                ]
            },
        ];
        return cArray[chatID];
    }
};

room23.test = function () {
    var i, togo;
    togo = 0;
    for (i = 0; i < g.pass.myTruth.length; i++) {
        if (!g.pass.myTruth[i].used) {
            togo++;
        }
    }
    return togo;

}