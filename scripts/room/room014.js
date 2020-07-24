//motherRoom
var room14 = {};

room14.main = function () {
    var btnList = new Array();
    g.internal = { pussy: 0, asshole: 0 };
    if (!g.hourBetween(6, 21)) {
        nav.bg("14_motherRoom/14_motherRoomNight.jpg");
        if (g.dt.getDay() === 0 || g.dt.getDay() === 5 || g.dt.getDay() === 6) {
            //14_motherAsleepDick.png
            btnList = [{
                "type": "btn",
                "name": "dickSleep",
                "left": 986,
                "top": 696,
                "width": 713,
                "height": 193,
                "image": "14_motherRoom/14_motherAsleepDick.png"
            }];
        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherSleep",
                "left": 1031,
                "top": 779,
                "width": 591,
                "height": 114,
                "image": "14_motherRoom/14_motherAsleep.png"
            }];
        }
    }
    else if (sc.mother().thisRoom) {
        if (g.dt.getDay() === 0 || g.dt.getDay() === 5 || g.dt.getDay() === 6) {
            switch (sc.getstep("bigguy")) {
                case 0:
                case 1:
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple.png"
                    }];
                    break;
                case 2:
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple1.png"
                    }];
                    break;
                case 3:
                    if (g.get("bigguy")) {
                        btnList = [{
                            "type": "btn",
                            "name": "couple",
                            "left": 737,
                            "top": 0,
                            "width": 714,
                            "height": 1080,
                            "image": "14_motherRoom/couple.png"
                        }];
                    }
                    else {
                        nav.bg("14_motherRoom/couple3.jpg");
                        chat(27, 14);
                    }
                    break;
                default:
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple.png"
                    }];
                    break;
            }
        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherRobe",
                "left": 1193,
                "top": 42,
                "width": 466,
                "height": 1038,
                "image": "14_motherRoom/14_motherRobe.png"
            }];
        }
    }
    else {
        btnList = [
            {
                "type": "btn",
                "name": "closet",
                "left": 414,
                "top": 375,
                "width": 461,
                "height": 538,
                "image": "14_motherRoom/14_closet.png"
            },
            {
                "type": "btn",
                "name": "dresser",
                "left": 1569,
                "top": 781,
                "width": 317,
                "height": 299,
                "image": "14_motherRoom/dresserDay.png"
            }];
        if (g.checkflag("momChore")) {
            btnList.push({
                "type": "img",
                "name": "bedmade",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bedmade.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "bedMessy",
                "title": "Make Bed?",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bed.png"
            });
        }
    }

    navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 14);
    });

    nav.buildnav(navList);
};

room14.btnclick = function (name) {
    switch (name) {
        case "closet":
            if (!g.checkflag("momRaidCloset"))
                char.room(17);
            else
                chat(1, 14);
            break;
        case "motherRobe":
            if (sc.getstep("me") > 1)
                chat(3, 14);
            else
                chat(2, 14);
            break;
        case "motherSleep":
            nav.killall();
            nav.bg("14_motherRoom/bedSleep.jpg");
            nav.buildnav([14]);
            nav.button({
                "type": "img",
                "name": "msleep",
                "left": 0,
                "top": 115,
                "width": 1920,
                "height": 965,
                "image": "14_motherRoom/14_motherSleepPresent.png"
            }, 14);
            nav.button({
                "type": "btn",
                "name": "sleepPussy",
                "left": 988,
                "top": 730,
                "width": 214,
                "height": 205,
                "image": "14_motherRoom/sleepPussy.png"
            }, 14);
            nav.button({
                "type": "btn",
                "name": "sleepAsshole",
                "left": 1000,
                "top": 532,
                "width": 190,
                "height": 190,
                "image": "14_motherRoom/sleepAsshole.png"
            }, 14);
            if (!pic.has("landlordSleep")) {
                nav.button({
                    "type": "btn",
                    "name": "takePic",
                    "left": 771,
                    "top": 660,
                    "width": 98,
                    "height": 98,
                    "image": "14_motherRoom/camera.png"
                }, 14);
            }
            break;
        case "dickSleep":
            chat(42, 14);
            break;
        case "sleepPussy":
            nav.killbutton("sleepPussy");
            nav.killbutton("sleepAsshole");
            chat(9, 14);
            break;
        case "sleepAsshole":
            nav.killbutton("sleepPussy");
            nav.killbutton("sleepAsshole");
            chat(13, 14);
            break;
        case "dresser":
            nav.bg("14_motherRoom/014_dresserDrawer.jpg");
            nav.killall();
            chat(5, 14);
            break;
        case "bedMessy":
            nav.killbutton("bedMessy");
            nav.button({
                "type": "img",
                "name": "bedmade",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bedmade.png"
            }, 14);
            g.setflag("momChore");
            g.mod("rentKnockOff", 5);
            chat(8, 14);
            break;
        case "takePic":
            nav.killbutton("takePic");
            pic.add("landlordSleep");
            chat(15, 14);
            break;
        case "couple":
            if (g.get("bigguy"))
                chat(16, 14);
            else {
                switch (sc.getstep("bigguy")) {
                    case 0:
                        chat(18, 14);
                        break;
                    case 1:
                        chat(23, 14);
                        break;
                    case 2:
                        chat(25, 14);
                        break;
                    default:
                        chat(16, 14);
                        break;
                }
            }
            break;
        default:
            break;
    }
};

room14.chatcatch = function (callback) {
    switch (callback) {
        case "takekey":
            g.popUpNotice("You have a new Key!");
            inv.update("flatmateKey", true, null);
            char.room(14);
            break;
        case "search":
            if (inv.has("flatmateKey"))
                chat(6, 14);
            else
                chat(7, 14);
            break;
        case "ret":
            char.room(14);
            break;
        case "rub":
            $('#room_footer').hide();
            g.internal.pussy = g.internal.pussy < 1 ? 1 : g.internal.pussy; 
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_rubPussy.gif"
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () { chat(10, 14); }, 4000);
            break;
        case "poke":
            $('#room_footer').hide();
            g.internal.pussy = g.internal.pussy < 2 ? 2 : g.internal.pussy;
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepPoke.gif?a=" + Math.random()
            }, 14);
            g.mod("arousal", 10);
            g.mod("giveFingerFemale", 1);
            setTimeout(function () { chat(10, 14); }, 9500);
            break;
        case "slam":
            $('#room_footer').hide();
            g.internal.pussy = g.internal.pussy < 2 ? 2 : g.internal.pussy;
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepSlam.gif"
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "inTrouble",
                    "left": 230,
                    "top": 86,
                    "width": 1519,
                    "height": 994,
                    "image": "14_motherRoom/inTrouble.png"
                }, 14);
                chat(11, 14);
            }, 3000);
            break;
        case "rimjob":
            $('#room_footer').hide();
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepBholeLick.gif"
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () { chat(10, 14); }, 4000);
            break;
        case "fingerButtholeLube":
            if (inv.has("lube")) {
                $('#room_footer').hide();
                nav.button({
                    "type": "img",
                    "name": "pussyPlay",
                    "left": 665,
                    "top": 470,
                    "width": 851,
                    "height": 610,
                    "image": "14_motherRoom/014_sleepBholePokeLube.gif"
                }, 14);
                inv.use("lube");
                g.mod("arousal", 10);
                g.mod("giveFingerFemale", 1);
                setTimeout(function () { chat(10, 14); }, 4000);
            }
            else {
                chat(14, 14);
            }
            break;
        case "fingerButtholeDry":
            $('#room_footer').hide();
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepBholePokeDry.gif?a=" + Math.random()
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "inTrouble",
                    "left": 230,
                    "top": 86,
                    "width": 1519,
                    "height": 994,
                    "image": "14_motherRoom/inTrouble.png"
                }, 14);
                chat(11, 14);
            }, 4000);
            break;
        case "sleepReset":
            room14.btnclick("motherSleep");
            break;
        case "sleepSpank":
            g.pass = "sleepSpank";
            char.room(21);
            break;
        case "fin0":
            g.setflag("bigguy");
            char.addtime(60);
            break;
        case "fin1":
            sc.setstep("bigguy", 1);
            g.setflag("bigguy");
            char.addtime(60);
            break;
        case "fin2":
            sc.setstep("bigguy", 2);
            g.setflag("bigguy");
            char.addtime(60);
            break;
        case "fin3":
            sc.setstep("bigguy", 3);
            g.setflag("bigguy");
            char.addtime(60);
            break;
        case "fin4":
            sc.setstep("bigguy", 4);
            g.setflag("bigguy");
            char.addtime(60);
            break;
        case "couple3a":
            nav.bg("14_motherRoom/couple3a.jpg");
            break;
        case "couple3b":
            nav.bg("14_motherRoom/couple3b.jpg");
            break;
        case "couple3c":
            nav.bg("14_motherRoom/couple3c.jpg");
            break;
        case "couple3d":
            nav.bg("14_motherRoom/couple3d.jpg");
            break;
        case "couple3e":
            nav.bg("14_motherRoom/couple3e.jpg");
            break;
        case "couple3f":
            nav.bg("14_motherRoom/couple3f.jpg");
            break;
        case "couple3g":
            g.mod("loadSwollowed", 1);
            nav.bg("14_motherRoom/couple3g.jpg");
            break;
        default:
            break;
    }
};

room14.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Nothing here..",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I've already raided " + sc.n("landlord") + "'s closet today. I better wait till tomorrow. ",
            button: []
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "You need to log into your computer in your room, look for job, then go work. I'm not supporting your any longer.",
            button: []
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Hello honey, I so proud that you're working now. you keep it up and you just may make something of yourself.",
            button: []
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Mustn't wake " + sc.n("landlord") + "...",
            button: []
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Wow " + sc.n("landlord") + " has a lot of big panties....",
            button: [
                { chatID: -1, text: "Look through panties", callback: "search" },
                { chatID: -1, text: "I shouldn't be looking in here.", callback: "ret" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Nothing here.. and I feel dirty for going through " + sc.n("landlord") + "'s panties...",
            button: [
                { chatID: -1, text: "Close Dresser Drawer", callback: "ret" },
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "There's a key in here, I wonder where it goes to?",
            button: [
                { chatID: -1, text: "Leave key", callback: "ret" },
                { chatID: -1, text: "Take Key", callback: "takekey" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "$5 dollars knocked off the rent this week.",
            button: []
        },
        {
            chatID: 9,
            speaker: "me",
            text: "How do you want to play with that pussy?",
            button: [
                { chatID: -1, text: "Rub the pussy", callback: "rub" },
                { chatID: -1, text: "Gently finger your " + sc.n("landlord"), callback: "poke" },
                { chatID: -1, text: "Finger fuck that pussy", callback: "slam" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Try something else", callback: "sleepReset" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "What the hell do you think you're doing‽ ",
            button: [
                { chatID: 12, text: "I uhhhhh... huh?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "I can't believe you thought you could get away with sticking your dirty fingers inside me while I'm " + 
                "sleeping, what gets in your head.",
            button: [
                { chatID: -1, text: "ohhh uhhhh, I don't know", callback: "sleepSpank" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "What do you want to do to that butthole?",
            button: [
                { chatID: -1, text: "Give " + sc.n("landlord") + " a rimjob. ", callback: "rimjob" },
                { chatID: -1, text: "Lube up your finger and slide in in her bum", callback: "fingerButtholeLube" },
                { chatID: -1, text: "Stick it in dry", callback: "fingerButtholeDry" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I don't have any lube...",
            button: [
                { chatID: -1, text: "Try Something else", callback: "sleepReset" }
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "Picture added to camera.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Hay honey. Why don't you go play so me and " + sc.n("bigguy") + " can play adult games.",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "bigguy",
            text: "Hehehe... You're a cute kid.. maybe we'll let you play some time...",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "Hay honey, I don't think you've met my new boyfriend " + sc.n("bigguy") + ". He's just visiting for the weekend. ",
            button: [
                { chatID: 19, text: "Hi " + sc.n("bigguy") + "..", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "bigguy",
            text: "Hi little man. " + sc.n("landlord") + " has told me so much about you. You remind me of me when I was younger. " +
                "I used to have tiny girly body. Then I decided to stop being a little girly man. You have a tiny body. You should lift weights. " +
                "Do you like girls. Girls like big guys. I know your " + sc.n("landlord") + " likes big guys hehehe",
            button: [
                { chatID: 20, text: "... oh ok...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "Ugh, I have two perverts in this house, at least " + sc.n("lola") + " and " + sc.n("eva") + " are nice sweet girls that never " +
            "do anything perverted like you too. ",
            button: [
                { chatID: 21, text: "...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "bigguy",
            text: "Boys are perverts, it's in our blood, isn't that right young one. That's why your " + sc.n("landlord") + 
            " has me over. She loves my giant perverted friend here",
            button: [
                { chatID: 22, text: "oh gross...", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "Oh stop it, " + sc.n("me") + " doesn't need to hear the things you do to me. " + sc.n("me") + " why don't you run along now " +
            "we have some..... stuff to do",
            button: [
                { chatID: -1, text: "oh double gros...", callback: "fin1" }
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "You are a naughty boy, it looks like you caught us again. Why don't you run along so we can get some alone time..",
            button: [
                { chatID: 24, text: "oh.", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "bigguy",
            text: "Yeah, I gotta giant problem that needs to be solved and only your " + sc.n("landlord") + " can suck it. ",
            button: [
                { chatID: -1, text: "oh damn it.. gross again", callback: "fin2" }
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "Oh my! " + sc.n("me") + " Just because I don't lock my door doesn't mean you can just walk right in! ",
            button: [
                { chatID: 26, text: "But it was slightly ajar!", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Don't even! Just run along now... ",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "fin3" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "glug.. glug...glug...glug...glug",
            button: [
                { chatID: 28, text: sc.n("landlord") + "?", callback: "couple3a" }
            ]
        },
        {
            chatID: 28,
            speaker: "bigguy",
            text: "Oh fuck, I'm going to fill your throat full",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "bigguy",
            text: "Oh yeah, take my load while " + sc.n("me") + " watches. He's likes to watch you take my giant cock.",
            button: [
                { chatID: 30, text: "...", callback: "couple3b" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "Blub...",
            button: [
                { chatID: 31, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "bigguy",
            text: "Haha it's hard to talk with your mouth full of my cum. hehehe",
            button: [
                { chatID: 32, text: "...", callback: "couple3c" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "Hahaha OMG, I said don't shoot it down my throat, I know how you like to put on a show. And you " + sc.n("me") + ". " +
            "Why do you insist on walking in on us? ",
            button: [
                { chatID: 33, text: "...", callback: "couple3c" }
            ]
        },
        {
            chatID: 33,
            speaker: "bigguy",
            text: "I think he wanted to take your place hehehe, he wanted to eat my cum! HAHAHAhahahah",
            button: [
                { chatID: 34, text: "...", callback: "couple3d" }
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "Is that what you wanted? Did you want a taste? You're a dirty boy, did you want to clean up your " + sc.n("landlord") + " ? ",
            button: [
                { chatID: 35, text: "I do", callback: "couple3e" },
                { chatID: 41, text: "Oh my god NO", callback: "" }
                
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "I know what a bad boy you are, clean my hand you naughty boy. I'm a cum expert and this is some really quality stuff, it's so " +
            "thick and creamy.",
            button: [
                { chatID: 36, text: "[Suck her fingers clean]", callback: "couple3f" }
            ]
        },
        {
            chatID: 36,
            speaker: "landlord",
            text: "That's right suck my fingers clean you bad boy.",
            button: [
                { chatID: 37, text: "[Keep sucking her cum covered fingers]", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "bigguy",
            text: "Hahahaha How's my cum taste little man? Now swollow it up for " + sc.n("landlord") + ".",
            button: [
                { chatID: 38, text: "[swollow it down]", callback: "couple3g" }
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "It really is a waste going into your belly. I could sell if for a nice profit. That's a real man's cum you've just swallowed.",
            button: [
                { chatID: 39, text: "MMmmmmmm", callback: "couple3c" }
            ]
        },
        {
            chatID: 39,
            speaker: "bigguy",
            text: "You need to run along now boy, or I'm going to fill that ass up with cum too ",
            button: [
                { chatID: 40, text: "What", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: sc.n("bigguy") + "! I'm not done with you yet. Now run along " + sc.n("me") + ".",
            button: [
                { chatID: -1, text: "[Run along]", callback: "fin4" }
            ]
        },
        {
            chatID: 41,
            speaker: "landlord",
            text: "Ok you naughty boy, run along so I can finish up. Now go!",
            button: [
                { chatID: -1, text: "[Run along]", callback: "fin0" }
            ]
        },
        {
            chatID: 42,
            speaker: "me",
            text: "I'm not fucking with " + sc.n("bigguy") + "!",
            button: [
                { chatID: -1, text: "[Run along]", callback: "" }
            ]
        },
    ];

    return cArray[chatID];
}