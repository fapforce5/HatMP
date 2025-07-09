//Glory Hole
var room216 = {};
room216.main = function () {
    g.internal = false;
    if (missy.get("cumMaidCounter") === 1) {
        nav.bg("207_door/bg.jpg");
        chat(0, 216);
    }
    else {
        room216.chatcatch("cumRoom");
        if (g.internal
            && sc.getMissionTask("zoey", "friends", 2).complete
            && sc.getMissionTask("zoey", "cheating", 3).notStarted) {

            sc.completeMissionTask("zoey", "cheating", 3);
            if (sc.getMission("zoey", "cheating").complete)
                chat(10, 216);
            else
                chat(9, 216);
        }
    }
    missy.mod("cumMaidCounter", 1);
};

room216.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            if (g.rand(0, 2) === 0) {
                nav.bg("216_pinkglory/pull0_" + gender.pronoun("f") + ".jpg");
                sc.select("plug0", "216_pinkglory/icon_pull.png", 0);
                sc.select("plugclean", "216_pinkglory/icon_clean.png", 1);
            }
            else {
                nav.bg("216_pinkglory/dirty_" + gender.pronoun("f") + ".jpg");
                sc.select("cum0", "216_pinkglory/icon_lick.png", 0);
                sc.select("lickclean", "216_pinkglory/icon_clean.png", 1);
            }
            break;
        case "plug0":
            nav.killall();
            nav.bg("216_pinkglory/pull1_" + gender.pronoun("f") + ".jpg");
            nav.next("plug1");
            break;
        case "plug1":
            nav.killall();
            nav.bg("216_pinkglory/pull2_" + gender.pronoun("f") + ".jpg");
            nav.next("plug2");
            break;
        case "plug2":
            nav.killall();
            nav.bg("216_pinkglory/pull3_" + gender.pronoun("f") + ".jpg");
            cl.c.cumface = true;
            levels.mod("cum", 20, 999);
            chat(5, 216);
            break;
        case "plugclean":
            nav.killall();
            chat(6, 216);
            break;
        case "lickclean":
            nav.killall();
            nav.bg("216_pinkglory/clean_" + gender.pronoun("f") + ".jpg");
            chat(6, 216);
            break;
        case "cum0":
            if (levels.get("cum").l < 2) {
                chat(8, 216);
            }
            else {
                nav.killall();
                nav.bg("216_pinkglory/ass.jpg");
                nav.button({
                    "type": "tongue",
                    "name": "cum1",
                    "left": 950,
                    "top": 354,
                    "width": 151,
                    "height": 717,
                    "image": "216_pinkglory/cum0.png",
                    "title": "Lick up slut"
                }, 216);
            }
            break;
        case "cum1":
            nav.killbutton("cum1");
            nav.button({
                "type": "tongue",
                "name": "cum2",
                "left": 950,
                "top": 354,
                "width": 151,
                "height": 496,
                "image": "216_pinkglory/cum1.png",
                "title": "Lick up slut"
            }, 216);
            break;
        case "cum2":
            nav.killbutton("cum2");
            nav.button({
                "type": "tongue",
                "name": "cum3",
                "left": 1003,
                "top": 354,
                "width": 98,
                "height": 232,
                "image": "216_pinkglory/cum2.png",
                "title": "Lick up slut"
            }, 216);
            break;
        case "cum3":
            nav.killall();
            nav.bg("216_pinkglory/clean_" + gender.pronoun("f") + ".jpg");
            gv.mod("energy", 100);
            levels.mod("cum", 25, 999);
            chat(7, 216);
            break;
    }
}

room216.chatcatch = function (callback) {
    switch (callback) {
        case "pink0":
            nav.bg("216_pinkglory/intro.jpg");
            break;
        case "cumRoom":
            nav.killall();
            nav.bg("216_pinkglory/bg.jpg");
            var holes;
            if (gv.get("pinkroomopen")) {
                holes = g.shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            }
            else {
                holes = g.shuffleArray([0, 1, 2, 3, 4, 5, 6]);
            }
            for (i = 0; i < 5; i++) {
                if (holes[i] === 3)
                    g.internal = true;
                nav.button({
                    "type": "img",
                    "name": "ho_" + i,
                    "left": 300 + (i * 335),
                    "top": 73,
                    "width": 335,
                    "height": 324,
                    "image": "216_pinkglory/" + holes[i] + "_s.png",
                    "title": "Free Use Slut"
                }, 216);
                nav.button({
                    "type": "img",
                    "name": "hox_" + i,
                    "left": 300 + (i * 335),
                    "top": 400,
                    "width": 335,
                    "height": 570,
                    "image": "216_pinkglory/" + holes[i] + "_d.png",
                    "title": "Free Use Slut"
                }, 216);
            }
            nav.button({
                "type": "btn",
                "name": "clean",
                "left": 1250,
                "top": 850,
                "width": 231,
                "height": 206,
                "image": "216_pinkglory/clean.png",
                "title": "Clean Up"
            }, 216);
            break;
        case "complete":
            missy.didJob(5, 1, null);
            char.room(224);
            break;
        case "clean":
            nav.bg("216_pinkglory/clean_" + gender.pronoun("f") + ".jpg");
            break;
        default:
            break;
    }

}

room216.chat = function (chatID) {
    if (chatID === 1000) {
        //
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Excuse me! I'm going to the Pink Room!",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!missyguardday",
            text: "I thought I told you, you aren't allowed in here!",
            button: [
                { chatID: 2, text: "Missy said I could", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!missyguardday",
            text: "Oh. Oh yeah. I guess you've graduated from being a nobody to a dirty whore. " +
                "step right in. ",
            button: [
                { chatID: 3, text: "...", callback: "pink0" }
            ]
        },
        {
            chatID: 3,
            speaker: "p",
            text: "Welcome to the Pink Pleasure Club for Outstanding Ladies and Gentlement, " +
                "or as most people simply call it, the Pink Room. I would give you the tour, but " +
                "I'm far too busy. I just need you to come in and do a quick job for me. ",
            button: [
                { chatID: 4, text: "Awesome! What is it?", callback: "cumRoom" }
            ]
        },
        {
            chatID: 4,
            speaker: "p",
            text: "This is the free use room. I need you to fill in as our cum dump maid. Our usual maid is on materinity leave. " +
                "I think she was scooping the cum into her pussy. The job's pretty easy, clean up " +
                "cum up and don't mess with the fuck holes. Also whores don't get to wear clothes " +
                "here, but I'll have you wear an apron so the VIPs know you're only a maid. Now clean " +
                "those dirty pussies and assholes. ",
            button: [
                { chatID: -1, text: "Will do. ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Of course there's 30 loads of cum in her ass that's now covering my face. " +
                "I'm such an airhead sometimes. ",
            button: [
                { chatID: -1, text: "*gasp*", callback: "complete" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I've cleaned all these cum covered sluts so well, people will think they're " +
                "all virgins! Good job me! ",
            button: [
                { chatID: -1, text: "*smile*", callback: "complete" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Yummy! I love how thick and creamy it feels sliding over my tongue and in my " +
                "mouth. I'm such a dirty cum whore! ",
            button: [
                { chatID: -1, text: "*smile*", callback: "complete" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Ewwww. Gross. I'm not going to lick that!  *gag*",
            button: [
                { chatID: 6, text: "[Need Cum level 2]", callback: "clean" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Holy crap! That's " + sc.n("chloe") + "! Why is she working here? I bet " + 
                sc.n("zoey") + "'s going to be kinda mad her girlfriend is getting fucked by " +
                "all these guys! She has more cum dripping out of her than a porn star in a " +
                "gangbang scene. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Holy crap! That's " + sc.n("chloe") + "! Why is she working here? " +
                "She has more cum dripping out of her than a porn star in a " +
                "gangbang scene. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};