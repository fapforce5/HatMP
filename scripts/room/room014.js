//motherRoom
var room14 = {};

room14.main = function () {
    var btnList = new Array();
    g.internal = { pussy: 0, asshole: 0 };
    if (!g.hourBetween(6, 21)) {
        nav.bg("14_motherRoom/14_motherRoomNight.jpg");
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
    else if (sc.mother().thisRoom) {
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

    navList = [11];
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
    ];

    return cArray[chatID];
}