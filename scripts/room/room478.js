//Room name
var room478 = {};
room478.main = function () {
    g.internal = { arrive: g.dt, talkList: new Array(), amputee: 0, secretPath: 0, tod: 1, single: null };


    room480.chatcatch("settod");
    var btnList = new Array();

    if (g.isNight()) {
        btnList = []
    }
    else {
        btnList = [
        {
            "type": "btn",
            "name": "entrance",
            "left": 1272,
            "top": 173,
            "width": 279,
            "height": 670,
            "image": "478_kitchen/entrance.png"
        }];


    }

    $.each(btnList, function (i, v) {
        nav.button(v, 478);
    });

    var navList = [479, 480, 481];
    nav.buildnav(navList);
    room480.displaychar([
        {
            "type": "btn",
            "name": "chef",
            "left": 166,
            "top": 137,
            "width": 456,
            "height": 943,
            "image": "478_kitchen/chef.png",
            "tod": [1,2,3]
        },
        {
            "type": "btn",
            "name": "tiedup",
            "left": 569,
            "top": 53,
            "width": 241,
            "height": 818,
            "image": "478_kitchen/tiedup.png",
            "tod": [2]
        },
        {
            "type": "btn",
            "name": "duo",
            "left": 1596,
            "top": 265,
            "width": 324,
            "height": 754,
            "image": "478_kitchen/duo.png",
            "tod": [2]

        },
        {
            "type": "btn",
            "name": "smoker",
            "left": 1664,
            "top": 351,
            "width": 176,
            "height": 534,
            "image": "478_kitchen/smoker.png",
            "tod": [1]
        },
        {
            "type": "btn",
            "name": "pink",
            "left": 960,
            "top": 427,
            "width": 181,
            "height": 410,
            "image": "478_kitchen/pink.png",
            "tod": [2]
        },
        {
            "type": "btn",
            "name": "trio",
            "left": 855,
            "top": 344,
            "width": 344,
            "height": 539,
            "image": "478_kitchen/trio.png",
            "tod": [1]
        },
        {
            "type": "btn",
            "name": "eat",
            "left": 1064,
            "top": 457,
            "width": 856,
            "height": 619,
            "image": "478_kitchen/eat.png",
            "tod": [3]
        },
    ]);
};

room478.btnclick = function (name) {
    switch (name) {
        case "entrance":
            char.room(479);
            break;
        case "chef":
            nav.killall();
            nav.bg("478_kitchen/chef0.jpg")
            if (g.internal.secretPath === 0)
                chat(34, 478);
            break;
        case "smoker":
            nav.killall();
            nav.bg("478_kitchen/smoker0.jpg");
            if (!g.internal.talkList.includes("smoke"))
                chat(25, 478);
            else
                chat(31, 478);
            break;
        case "trio":
            nav.killall();
            nav.bg("478_kitchen/trio0.jpg");
            if (!g.internal.talkList.includes("trio"))
                chat(5, 478);
            else
                chat(15, 478);
            break;
        case "duo":
            nav.killall();
            nav.bg("478_kitchen/duo0.jpg");
            if (!g.internal.talkList.includes("duo")) {
                var thisApp = cl.appearance();
                if (thisApp === 5)
                    chat(16, 478);
                else if (thisApp < 3)
                    chat(17, 478);
                else
                    chat(18, 478);
            }
            else
                chat(24, 478);
            break;
        case "tiedup":
            nav.killall();
            nav.bg("478_kitchen/tiedup0.jpg");
            if (!g.internal.talkList.includes("kitchen_tiedup"))
                chat(0, 478);
            else
                chat(0, 478);
            break;
        case "tiedupleft":
            nav.killall();
            nav.bg("478_kitchen/tiedupa0.jpg");
            if (cl.c.chastity !== null)
                chat(4, 478);
            else {
                nav.button({
                    "type": "btn",
                    "name": "tiedupright",
                    "left": 433,
                    "top": 736,
                    "width": 170,
                    "height": 199,
                    "image": "526_bar/arrowTurn.png"
                }, 478);
                nav.button({
                    "type": "btn",
                    "name": "tiedupButthole",
                    "left": 857,
                    "top": 867,
                    "width": 150,
                    "height": 150,
                    "image": "478_kitchen/tiedupButthole.png"
                }, 478);
                nav.button({
                    "type": "btn",
                    "name": "reset",
                    "left": 1283,
                    "top": 783,
                    "width": 146,
                    "height": 146,
                    "image": "19_layInBed/cancel.png"
                }, 478);
                
            }
            break;
        case "tiedupright":
            nav.killall();
            nav.bg("478_kitchen/tiedup0.jpg");
            nav.button({
                "type": "btn",
                "name": "tiedupleft",
                "left": 433,
                "top": 736,
                "width": 170,
                "height": 199,
                "image": "526_bar/arrowTurn.png"
            }, 478);
            nav.button({
                "type": "btn",
                "name": "tiedupcock",
                "left": 733,
                "top": 686,
                "width": 300,
                "height": 300,
                "image": "478_kitchen/tiedupcock.png"
            }, 478);
            nav.button({
                "type": "btn",
                "name": "reset",
                "left": 1283,
                "top": 783,
                "width": 146,
                "height": 146,
                "image": "19_layInBed/cancel.png"
            }, 478);
            
            break;
        case "reset":
            char.room(478);
            break;
        case "tiedupcock":
            nav.killall();
            g.internal.single = 0;
            nav.button({
                "type": "btn",
                "name": "tiedupcockInc",
                "left": 1588,
                "top": 830,
                "width": 232,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 478);
            nav.bg("478_kitchen/tiedupcock0.jpg")
            break;
        case "tiedupcockInc":
            if (g.internal.single < 6)
                nav.bg("478_kitchen/tiedupcock" + ((g.internal.single % 2) + 1) + ".jpg");
            else if (g.internal < 8)
                nav.bg("478_kitchen/tiedupcock" + g.internal.single + ".jpg");
            else {
                room480.chatcatch("incrementtod");
                char.room(478);
            }
            g.internal.single++;
            break;
        case "tiedupButthole":
            nav.killall();
            g.internal.single = 0;
            nav.button({
                "type": "btn",
                "name": "tiedupassInc",
                "left": 1588,
                "top": 830,
                "width": 232,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 478);
            nav.bg("478_kitchen/tiedupa1.jpg")
            break;
        case "tiedupassInc":
            if (g.internal.single < 7)
                nav.bg("478_kitchen/tiedupa" + ((g.internal.single % 2) + 2) + ".jpg");
            else if (g.internal.single < 8)
                nav.bg("478_kitchen/tiedupa6.jpg");
            else {
                room480.chatcatch("incrementtod");
                char.room(478);
            }
            g.internal.single++;
            break;
        case "eat":
            nav.killall();
            nav.bg("478_kitchen/eat.jpg");
            if (!g.internal.talkList.includes("eat"))
                chat(36, 478);
            else
                chat(9999, 478);
            break;
        default:
            break;
    }
};

room478.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(478);
            break;
        case "tiedup1":
            nav.button({
                "type": "btn",
                "name": "tiedupleft",
                "left": 1186,
                "top": 694,
                "width": 232,
                "height": 150,
                "image": "526_bar/arrowLeft.png"
            }, 478);
            nav.button({
                "type": "btn",
                "name": "tiedupright",
                "left": 487,
                "top": 785,
                "width": 232,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 478);
            break;
        case "trio0":
        case "trio1":
        case "trio2":
        case "trio3":
        case "trio4":
        case "trio5":
            nav.bg("478_kitchen/" + callback + ".jpg");
            break;
        case "trioEnd":
            if (!g.internal.talkList.includes("trio"))
                g.internal.talkList.push("trio");
            room480.chatcatch("incrementtod");
            char.room(478);
            break;
        case "duoEnd":
            if (!g.internal.talkList.includes("duo"))
                g.internal.talkList.push("duo");
            room480.chatcatch("incrementtod");
            char.room(478);
            break;
        case "smoke1":
            if (!g.internal.talkList.includes("smoke"))
                g.internal.talkList.push("smoke");
            room480.chatcatch("incrementtod");
            char.room(478);
            break;
        default:
            break;
    }
};

room478.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Oh no I'm all tied up and can't do anything. Please don't molest me. ",
            button: [
                { chatID: 1, text: "Oh. Do you want to untie you? Is that ok? ", callback: "" },
                { chatID: -1, text: "I guess since you're tied up you have no choice. ", callback: "tiedup1" },
                { chatID: -1, text: "oh. I'm going to move along.", callback: "reset" },
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "I'm tied too tight. There's no escape for me. Please don't use my body for your pleasure. ",
            button: [
                { chatID: 2, text: "It dosn't look too tight. I think I can get you down.  ", callback: "" },
                { chatID: -1, text: "I guess since you're tied up you have no choice. ", callback: "tiedup1" },
                { chatID: -1, text: "oh. I'm going to move along.", callback: "reset" },
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "It really is tight. I hope you don't rape my tender little bussy. It's so tight. That " +
                "would be the worst! ",
            button: [
                { chatID: 3, text: "I'm not going to rape you. Give me a second and I'll get you down. ", callback: "" },
                { chatID: -1, text: "I guess since you're tied up you have no choice. ", callback: "tiedup1" },
                { chatID: -1, text: "oh. I'm going to move along.", callback: "reset" },
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "Listen, either fuck me or go away.  ",
            button: [
                { chatID: 0, text: "Oh. Are you sure you don't need help?", callback: "" },
                { chatID: -1, text: "I guess since you're tied up you have no choice. ", callback: "tiedup1" },
                { chatID: -1, text: "oh. I'm going to move along.", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Oh. I'm wearing my chastity cage. Drat!",
            button: [
                { chatID: -1, text: "Damn!", callback: "reset" },
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Oh. Hi new girl. Welcome to our little home.  ",
            button: [
                { chatID: 6, text: "Hi. What are you three up to? ", callback: "trio1" },
            ]
        },
        {
            chatID: 6,
            speaker: "random",
            text: "Just taking these two out for our daily walk. Princess Fluffykins here gets so bored laying " +
                "in bed all day. ",
            button: [
                { chatID: 7, text: "...", callback: "trio2" },
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "And of course Nala here has to come along. She's such a good lil puppy. ",
            button: [
                { chatID: 8, text: "So how'd you all get here? ", callback: "trio0" },
            ]
        },
        {
            chatID: 8,
            speaker: "random",
            text: "Nala and I were kidnapped together at a.. uh convention of sorts. We were all glammed out " +
                "in the finest of wares, when these pricks in ghastly robes grabbed us off the street and shoved us " +
                "in their van. It stunk like old man sweat and cheap cologne. We were both gagging. ",
            button: [
                { chatID: 9, text: "Oh no ", callback: "trio3" },
            ]
        },
        {
            chatID: 9,
            speaker: "random",
            text: "All five kidnappers took turns raping us over the 10 hour drive to their compound. Poor Nala was a virgin " +
                "before we were kidnapped. Some creep named River was really brutal with her. If I ever see him " +
                "I'm going to cut his wiener right the fuck off! ",
            button: [
                { chatID: 10, text: "I know River! He's such an asshole! I hate him too! ", callback: "trio4" },
            ]
        },
        {
            chatID: 10,
            speaker: "random",
            text: "I hate that ass hole so much! Nala still can't sit down without pain. Luckily they " +
                "put us in the group cell so I could take care of my poor puppy. That's where we met " +
                "Princess Fluffykins. I'm her first owner, she even let me name her!",
            button: [
                { chatID: 11, text: "Princess Fluffykins is such a cute name ", callback: "trio5" },
            ]
        },
        {
            chatID: 11,
            speaker: "random",
            text: "Totally. We were the best of friends while they fed us hormones and beat the shit out of us. " +
                "I so glad I had these two with me at that fucked up place. They're really the best pets a girl " +
                "can have. I just wish we could have helped Princess Fluffykins before she lost her eyes. ",
            button: [
                { chatID: 12, text: "oh my, what happened?", callback: "trio0" },
            ]
        },
        {
            chatID: 12,
            speaker: "random",
            text: "She was the first to take the CUM bath ritual. As you can see the transformation worked, but " +
                "during the impregnation ritual the evil spirits decided she wasn't worthy and ripped her eyes " +
                "out. She didn't even want to do it, they made her! And that evil fucking spirit ripped out her eyes " +
                "anyway. Fucking horrible. Then they threw her in the swamps to die. Luckily the " +
                sc.n("queen") + " was able to find her and save us from fucking dying. ",
            button: [
                { chatID: 13, text: "Holy crap! What's the evil spirit? ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "No one knows. Everyone that made it that far is stuck in a pitch black room. They see different " +
                "things, but Princess Fluffykins saw a dim, almost ghostly face and long white claw like hands floating " +
                "around her. The only noise she heard was some growling sounds and moaning unworthy over and over. " +
                "The moaning grew louder and louder till those ghostly claws just sunk into her sockets and " +
                "ripped them out. ",
            button: [
                { chatID: 14, text: "Oh fuck. Wow ", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "random",
            text: "Yeah. All this talk is upsetting my pets. I'm going to give them pets and cuddles. " +
                " We must be off. Ciao babe. ",
            button: [
                { chatID: -1, text: "Ciao ", callback: "trioEnd" },
            ]
        },
        {
            chatID: 15,
            speaker: "random",
            text: "some words, I have to think of something in the future. ",
            button: [
                { chatID: -1, text: "Ciao ", callback: "reset" },
            ]
        },
        {
            chatID: 16,
            speaker: "random",
            text: "Oh my god. Will you look at that. Just showing the goods to everyone. Being naked is not " +
                "cute, it's just gross. Why are you talking to us? ",
            button: [
                { chatID: 19, text: "I was told I had to talk to people to get out of here. ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "random",
            text: "Oh gross. You totally dress like a boy. You need help girl. Just because you're in a cave " +
                "doesn't mean you should dress like a cave troll. Why are you event talking to us?",
            button: [
                { chatID: 19, text: "I was told I had to talk to people to get out of here. ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "random",
            text: "You're so cute! It's nice to see someone who knows how to dress around here. You could use " +
                "some help dressing even sexier. But not bad. Did you come here looking for pointers? ",
            button: [
                { chatID: 19, text: "I was told I had to talk to people to get out of here. ", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "random",
            text: "Ugh! " + sc.n("a") + " always sends the clueless new girls around like they're on some " +
                "kinda mission to save themselves. Like you, we all had a terrible stories of our time with " +
                "the cult, but they are better than the stories of those that did not survive their time " +
                "there. Only a few girls have chosen to leave and those girls are gone. Disappeared.  " +
                "Vanished. Poof. ",
            button: [
                { chatID: 20, text: "What happened to them?", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "random",
            text: "You know what happened. The cult's reach is wide with members around the world. They " +
                "find anyone they want to find. That's why we're all stuck here hiding in this ghastly cave " +
                "with a paltry collection of second hand outfits. ",
            button: [
                { chatID: 21, text: "Where do these outfits come from? ", callback: "" },
                { chatID: 22, text: "Did they kill the ones that got away?  ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "random",
            text: "Oh lol! We may live in a cave, but there's little adventures out of here to acquire stuff " +
                "from the world. We have to be careful on our outings though. We only go out at night when the " +
                "cult has gathered for their weekly gatherings. ",
            button: [
                { chatID: 23, text: "Oh cool. ", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "random",
            text: "Yea, I was trying to say it without saying it. They cult kills them. Very terrible. Don't " +
                "leave here or you will die too. Like the rest. That's why you need to stay, so you can live. ",
            button: [
                { chatID: 23, text: "oh.", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "random",
            text: "Well, we're bored. Catch you later. ",
            button: [
                { chatID: -1, text: "bye", callback: "duoEnd" },
            ]
        },
        {
            chatID: 24,
            speaker: "random",
            text: "Duo repeating dialog",
            button: [
                { chatID: -1, text: "bye", callback: "reset" },
            ]
        },
        {
            chatID: 25,
            speaker: "random",
            text: "Ciao nuova ragazza",
            button: [
                { chatID: 26, text: "huh?", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "random",
            text: "Wadda ya want? Got smokes? ",
            button: [
                { chatID: 27, text: "Hi. I uh didn't bring any smokes.I was told to go around to talk to everyone. ", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "random",
            text: "Ragazza stupida. Why you wanna leave? There's so much pussy and ass here. I don't even try and " +
                "and some troia is rubbing on me. This is heaven. More figa than my cock can please. ",
            button: [
                { chatID: 28, text: "But don't you want your freedom? ", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "random",
            text: "This is the freedom man. I have a working cock and whatever bella I want. Out there I have " +
                "to work for it, in here they throw themselves to me. ",
            button: [
                { chatID: 29, text: "So how did you get here? ", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "random",
            text: "Got caught like the rest, but I was saved before I even got to the cults hideout. I tell you " +
                "the first night I was here I had the sex with like five sexy poca things. I was came so much " +
                "it was just dust coming out. My balls hurt from all the fucking. This is heaven. You don't want " +
                "to leave, unless you don't like fucking. ",
            button: [
                { chatID: 30, text: "I do. ", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "random",
            text: "Then stay. I'm going to get some eggs from the chef and fuck a face. Ciao bella. ",
            button: [
                { chatID: -1, text: "Bye", callback: "smoke1" },
            ]
        },
        {
            chatID: 31,
            speaker: "random",
            text: "So you got any smokes? ",
            button: [
                { chatID: 32, text: "no", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "random",
            text: "Ugh. I'm looking for smoke in this stupid place. Ciao ",
            button: [
                { chatID: -1, text: "bye", callback: "reset" },
            ]
        },
        {
            chatID: 33,
            speaker: "random",
            text: "Ugh. I'm looking for smoke in this stupid place. Ciao ",
            button: [
                { chatID: -1, text: "bye", callback: "reset" },
            ]
        },
        {
            chatID: 34,
            speaker: "random",
            text: "Hello there! ",
            button: [
                { chatID: 35, text: "Hi. What are you up to? ", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "random",
            text: "I'm making food for all my little girls. Now run along so I can get back to it.",
            button: [
                { chatID: -1, text: "oh ", callback: "reset" },
            ]
        },
        {
            chatID: 36,
            speaker: "random",
            text: "Can't you see I'm getting my ass eaten? How rude!",
            button: [
                { chatID: 37, text: "oh sorry. ", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "random",
            text: "Oh wait, you're that new girl. Do you want to eat my ass? ",
            button: [
                { chatID: -1, text: "Yes I do! ", callback: "reset" },
                { chatID: -1, text: "Some other time ", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};