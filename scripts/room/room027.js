//Mirror
var room27 = {};
room27.main = function () {
    g.internal = new Array();
    var nextChat = g.pass === 57 ? 19 : 20
    if (inv.has("redl") || g.pass === 57)
        g.internal.push({ chatID: nextChat, text: "Red lipstick", callback: "red" });
    if (inv.has("pinkl") || g.pass === 57)
        g.internal.push({ chatID: nextChat, text: "Pink lipstick", callback: "pink" });
    if (inv.has("purplel") || g.pass === 57)
        g.internal.push({ chatID: nextChat, text: "Purple lipstick", callback: "purple" });
    if (g.internal.length === 0)
        g.internal.push({ chatID: g.pass === 57 ? 12 : 0, text: "I don't have any lipstick", callback: "" });
   
    switch (g.pass) {
        case 12:
            nav.bg("12_bathroom/012_brushTeeth.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 56:
            nav.bg("56_bathroom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 57:
            nav.bg("57_pussyPalace/makeup.jpg");
            zcl.displayMirror();
            chat(12, 27);
            break;
        case 451:
        case 452:
            nav.bg("451_parkMensRoom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case -1:
            case -2:
            nav.bg("57_pussyPalace/makeup.jpg");
            zcl.displayMirror();
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            if (g.pass === -1)
                chat(4, 27);
            else
                chat(22, 27);
            break;
    }
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 27);
    //});
    //nav.buildnav(navList);
};

room27.btnclick = function (name) {
    switch (name) {
        case "buildChar":
            zcl.displayMirror();
            break;
        default:
            break;
    }
};

room27.chatcatch = function (callback) {
    switch (callback) {
        case "return":
            if (g.pass > -1)
                char.room(g.pass);
            else
                char.room(24);
            break;
        case "makeup":
            if (inv.has("makeup") || g.pass === 57) {
                var makeUpLevel = g.get("makeup");
                if (makeUpLevel < 2)
                    chat(13, 27);
                else if (makeUpLevel < 4)
                    chat(14, 27);
                else
                    chat(15, 27);
            }
            else
                chat(1, 27);
            break;
        case "lipstick":
            chat(2, 27);
            break;
        case "wash":
            cl.clean("face");
            zcl.displayMirror();
            break;
        case "light":
            cl.c.makeup = "lb";
            zcl.displayMirror();
            nav.killbutton("tif");
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            break;
        case "red":
        case "purple":
        case "pink":
            cl.applyLipstick(callback);
            cl.display();
            zcl.displayMirror();
            if (g.pass === -1) {
                nav.killbutton("tif");
                nav.button({
                    "type": "img",
                    "name": "tif",
                    "left": 0,
                    "top": 0,
                    "width": 1547,
                    "height": 1080,
                    "image": "27_mirror/tif.png"
                }, 12);
            }
            break;
        case "tifKey":
            inv.add("reddoor");
            nav.button({
                "type": "img",
                "name": "reddoor",
                "left": 655,
                "top": 218,
                "width": 635,
                "height": 479,
                "image": "53_candy/reddoor.png"
            }, 53);
            break;
        case "killkey":
            nav.killbutton("reddoor");
            break;
        case "incTif":
            sc.setstep("tiffany", 19);
            sc.setstep("me", -5);
            sc.setstep("me", -12);
            g.setflag("tiffanyDayEvent");
            break;
        case "killtif":
            char.addtime(90);
            char.room(57);
            break;
        case "lb":
        case "mb":
        case "hb":
        case "lp":
        case "mp":
        case "hp":
            cl.c.makeup = callback;
            cl.display();
            zcl.displayMirror();
            if (g.pass === -2) {
                nav.killbutton("tif");
                nav.button({
                    "type": "img",
                    "name": "tif",
                    "left": 0,
                    "top": 0,
                    "width": 1547,
                    "height": 1080,
                    "image": "27_mirror/tif.png"
                }, 27);
                chat(24, 27);
            }
            else if (g.pass === 57)
                chat(19, 27);
            else
                chat(20, 27);
            break;
        case "nextLesson":
            g.mod("makeup", 1);
            var mk = g.get("makeup");
            if (mk < 2)
                chat(23, 27);
            else if (mk < 4)
                chat(25, 27);
            else
                chat(26, 27);
            break;
        default:
            break;
    }
};

room27.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Hay good looking",
            button: [
                { chatID: -1, text: "Apply Makeup", callback: "makeup" },
                { chatID: 21, text: "Apply Lipstick", callback: "" },
                { chatID: 3, text: "Wash Face", callback: "wash" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I don't have any makeup.",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't have any lipstick.",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "My Face is all clean.",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "So I'm going to teach you how to put on makeup! Since this is your first time I'm going to teach you how to put " +
            "on light makeup. Ready?",
            button: [
                { chatID: 5, text: "Ready", callback: "light" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "OOoooo there, aren't you a pretty girl!",
            button: [
                { chatID: 6, text: "I really am.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "Next is your lipstick. I'm going to make your lips so so so pretty. All the girls will be jealous of your pretty mouth. " +
            "What color do you want to make your lips?",
            button: [
                { chatID: 7, text: "Red", callback: "red" },
                { chatID: 7, text: "Purple", callback: "purple" },
                { chatID: 7, text: "Pink", callback: "pink" },
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "That's such a pretty color on you. All the girls want your pretty lips!",
            button: [
                { chatID: 8, text: "I'm so pretty", callback: "tifKey" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "I'm going to give you the key to the Pussy Palace. Feel free to use it anytime you want. Careful the webcam is always " +
                "on, so everything you do in here is broadcasted to thousands of hony perverts. Haha, they can even watch you put on " +
            "you pretty makeup! Say hi to everyone out there!",
            button: [
                { chatID: 9, text: "What... I'm on camera?", callback: "killkey" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Don't be such a prude! " + sc.n("candy") + " and I use it to make some extra money, and thousands of perverted men " +
            "jack off to us. They absolutely love watching us fuck each other. ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "Oh hey! If you need some extra money you can play on our stream. Any money you earn you get to keep! If you ever " +
            "want to join our stream we do a show at 5PM most days. Our fans would love to watch you fuck us!",
            button: [
                { chatID: 11, text: "oh sweet!", callback: "incTif" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "I'm going to go back to playing with my pussy. It relaxes me and helps me sleep. If you ever want more makeup lessons " +
            "stop by my room sexy girl.",
            button: [
                { chatID: -1, text: "Thanks!", callback: "killtif" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "Oh nice, I have all of " + sc.n("tiffany") + "'s and " + sc.n("candy") + "'s makeup.",
            button: [
                { chatID: -1, text: "Apply Makeup", callback: "makeup" },
                { chatID: 21, text: "Apply Lipstick", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "I need to get with " + sc.n("tiffany") + " and learn how improve my makeup skills.",
            button: [
                { chatID: 16, text: "Apply Light Makeup", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I need to get with " + sc.n("tiffany") + " some more and learn more tips!",
            button: [
                { chatID: 16, text: "Apply Light Makeup", callback: "" },
                { chatID: 17, text: "Apply Normal Makeup", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "How shall I paint my pretty face?",
            button: [
                { chatID: 16, text: "Apply Light Makeup", callback: "" },
                { chatID: 17, text: "Apply Normal Makeup", callback: "" },
                { chatID: 18, text: "Apply Bimbo Makeup", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "What color of light makeup should I choose?",
            button: [
                { chatID: -1, text: "Black", callback: "lb" },
                { chatID: -1, text: "Purple", callback: "lp" },
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "What color of makeup should I choose?",
            button: [
                { chatID: -1, text: "Black", callback: "mb" },
                { chatID: -1, text: "Purple", callback: "mp" },
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "What color of bimbo makeup should I choose?",
            button: [
                { chatID: -1, text: "Black", callback: "hb" },
                { chatID: -1, text: "Purple", callback: "hp" },
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "Such a pretty girl.",
            button: [
                { chatID: 12, text: "Do something else.", callback: "" },
                { chatID: -1, text: "Leave", callback: "return" },
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "Such a pretty girl.",
            button: [
                { chatID: 0, text: "Do something else.", callback: "" },
                { chatID: -1, text: "Leave", callback: "return" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Make your lips pretty.",
            button: g.internal
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Ready to continue our lessons?",
            button: [
                { chatID: -1, text: "Yes make me a pretty girl", callback: "nextLesson" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "You're still not ready for a regular makeup, we're still going to go over light makeup. Ready? ",
            button: [
                { chatID: -1, text: "Yes, please put makeup on my face.", callback: "lb" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "You really are a pretty girl. ",
            button: [
                { chatID: -1, text: "Thank you " + sc.n("tiffany") + ".", callback: "killtif" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "You're really coming along in your makeup training. Some more lessons and I'll show you how to put on Bimbo makeup!",
            button: [
                { chatID: -1, text: "Oh nice.", callback: "mb" }
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "Now you're a true bimbo! You've learned all I have to teach.",
            button: [
                { chatID: -1, text: "I am a stupid bimbo!", callback: "hb" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};