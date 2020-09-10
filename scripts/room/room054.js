//Room name
var room54 = {};
room54.main = function () {
    if (sc.tiffany().thisRoom) {
        if (g.hourBetween(7, 22)) {
            nav.button({
                "type": "btn",
                "name": "tif",
                "left": 941,
                "top": 28,
                "width": 690,
                "height": 1052,
                "image": "54_tif/tif1.png"
            }, 54);
        }
        else
            nav.bg("54_tif/tifNight_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};

room54.btnclick = function (name) {
    switch (name) {
        case "tif":
            if (cl.hasoutfit("nude") === null) {
                var tifstep = sc.getstep("tiffany");
                if (g.get("tiffanyDayEvent")) {
                    chat(0, 54);
                }
                else {
                    if (tifstep === 16)
                        chat(3, 54);
                    else if (tifstep === 17)
                        chat(13, 54);
                    else if (tifstep === 18)
                        chat(26, 54);
                    else if (tifstep > 18)
                        chat(32, 54);
                    else
                        chat(2, 54);
                }
            }
            else {
                chat(1, 54);
            }
            break;
        
        default:
            break;
    }
};

room54.chatcatch = function (callback) {
    switch (callback) {
        case "a1":
            nav.killbutton("tif");
            nav.bg("54_tif/a1.jpg");
            break;
        case "a2":
        case "a3":
        case "a4":
        case "a5":
        case "a6":
        case "a7":
            nav.bg("54_tif/" + callback + ".jpg");
            break;
        case "a8":
            char.addtime(60);
            g.setflag("tiffanyDayEvent");
            sc.setstep("tiffany", 17);
            cl.horny(75);
            nav.bg("54_tif/tif.jpg", "54_tif/tifNight.jpg");
            nav.button({
                "type": "btn",
                "name": "tif",
                "left": 711,
                "top": 0,
                "width": 638,
                "height": 1080,
                "image": "54_tif/tif2.png"
            }, 54);
            break;
        case "b1":
            nav.killbutton("tif");
            nav.bg("54_tif/b1.jpg");
            zcl.displayMain(0, 400, .30, "", false);
            break;
        case "b2":
            nav.killall();
            nav.bg("54_tif/b2.jpg");
            break;
        case "b3":
            nav.bg("54_tif/b3.jpg");
            break;
        case "b4":
            cl.horny(100);
            nav.bg("54_tif/b4.jpg");
            break;
        case "b5":
            nav.bg("54_tif/b5.jpg");
            break;
        case "b6":
            nav.bg("54_tif/b6.jpg");
            break;
        case "b7":
            nav.bg("54_tif/b7.gif");
            g.roomTimeout = setTimeout(function () { chat(22, 54) }, 3000);
            break;
        case "b8":
            nav.bg("54_tif/b8.gif");
            g.roomTimeout = setTimeout(function () { chat(23, 54) }, 4000);
            break;
        case "b9":
            nav.bg("54_tif/b9.jpg");
            break;
        case "b10":
            nav.bg("54_tif/b10.jpg");
            break;
        case "b11":
            g.mod("receiveAnalFemale", 1);
            cl.c.butthole += .2;
            char.addtime(60);
            sc.setstep("tiffany", 18);
            g.setflag("tiffanyDayEvent");
            sc.setstep("me", -8);
            inv.add("pinkDildo");
            char.room(54);
            break;
        case "p1":
            nav.kill();
            nav.bg("51_livingRoom/livingroom.jpg");
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 711,
                "top": 0,
                "width": 638,
                "height": 1080,
                "image": "54_tif/tif2.png"
            }, 54);
            break;
        case "p2":
            nav.bg("57_pussyPalace/bg.jpg");
            break;
        case "p3":
            nav.killbutton("tif");
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 711,
                "top": 28,
                "width": 690,
                "height": 1052,
                "image": "54_tif/tif3.png"
            }, 54);
            break;
        case "p4":
            nav.killbutton("tif");
            nav.bg("57_pussyPalace/p4.jpg");
            break;
        case "p5":
            g.pass = -1;
            char.room(27);
            break;
        case "iMakeup":
            g.pass = -2;
            char.room(27);
            break;
        default:
            console.log("invalid callback: " + callback);
            break;
    }
};

room54.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "I just want to fuck my pussy with this dildo, can you come back later?",
            button: [
                { chatID: -1, text: "oh, of course", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "Are those clothes? Sluts don't wear clothes.",
            button: [
                { chatID: -1, text: "Oh, how about a modest slut?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "That's all I have.",
            button: [
                { chatID: -1, text: "Drat!", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "Have girl! I just finished masturbating. Sometimes a girl just needs to get off really quick. Have you ever masturbated " +
            "like a girl?",
            button: [
                { chatID: 4, text: "I've masturbated", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "No silly, not like a boy, like a girl. The trick is to rub it with finess, not jerk it like a jock! Here I'll show you. ",
            button: [
                { chatID: 5, text: "Oh yeah!", callback: "a1" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "You start at the top...",
            button: [
                { chatID: 6, text: "...", callback: "a2" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "Slowly build up...",
            button: [
                { chatID: 7, text: "...", callback: "a3" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "Find your rhythm",
            button: [
                { chatID: 8, text: "...", callback: "a4" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Really rub it",
            button: [
                { chatID: 9, text: "...", callback: "a5" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Oh god I'm cuming",
            button: [
                { chatID: 10, text: "...", callback: "a6" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "AAaaaaAAAAaaaaaaaaaaaaaa oooOOOoooooooooooo",
            button: [
                { chatID: 11, text: "...", callback: "a7" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "And that's how you masturbate like a girl! Hehe",
            button: [
                { chatID: 12, text: "Soooo uhh Do you want to masturbate me?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "hehe. My wrist is sore, how about your come back later and I'll give you a hands on demonstration on how to " + 
            "masturbate like a girl! Kisses",
            button: [
                { chatID: -1, text: "You bet!", callback: "a8" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "Oh how sweet, you came back. I bet you want me to masturbate you. ",
            button: [
                { chatID: 14, text: "Oh yeah", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "Ok baby get on the bed. ",
            button: [
                { chatID: 15, text: "Oh yeah", callback: "b1" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "Oh hahahah, not sit on the bed like a boy. I'm going to teach you how to masturbate like a girl.. hahaha  ",
            button: [
                { chatID: 16, text: "ok, how do I sit?", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "So lay on the bed and put your legs over your head..... Here let me help....",
            button: [
                { chatID: 17, text: "Oh.. what...?", callback: "b2" }
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "Yes, like this. You need to put that pussy on display for me. Let me have free access to it. ",
            button: [
                { chatID: 18, text: "...", callback: "b3" }
            ]
        },
        {
            chatID: 18,
            speaker: "tiffany",
            text: "So first I'm going to tease your pussy... ",
            button: [
                { chatID: 19, text: "...", callback: "b4" }
            ]
        },
        {
            chatID: 19,
            speaker: "tiffany",
            text: "Next I'll put some lube on your pussy, get it nice and slick. Everyone loves a wet pussy. ",
            button: [
                { chatID: 20, text: "...", callback: "b5" }
            ]
        },
        {
            chatID: 20,
            speaker: "tiffany",
            text: "Get the inside of your pussy nice and wet",
            button: [
                { chatID: 21, text: "...", callback: "b6" }
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "Now your pussy is nice and wet I'm going to show you how to masturbte like a girl.",
            button: [
                { chatID: -1, text: "OooooOOOoooo", callback: "b7" }
            ]
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Are you ready to get your pussy filled little girl?",
            button: [
                { chatID: -1, text: "please....", callback: "b8" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "How does that feel? Are you starting to feel like a girl?",
            button: [
                { chatID: 24, text: "OOOoooooo", callback: "b9" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "Don't worry honey, if you keep using your pussy you'll learn how to cum like a girl. It just takes practice. ",
            button: [
                { chatID: 25, text: "aaawww", callback: "b10" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "Here. Take my dildo. You can use it to play with your pussy anytime! Also you should come down to Toy 'n us and get " +
            "some toys!",
            button: [
                { chatID: -1, text: "Sweet! thank you so much!", callback: "b11" }
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "Oh my you must really love me, or you just want me to play with you some more.",
            button: [
                { chatID: 27, text: "Oh.. I love you, but I also want to play some more.", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "tiffany",
            text: "Hahaha, lets keep playing my favorite game: Make you into a pretty little girl. Follow me.",
            button: [
                { chatID: 28, text: "Oh, ok", callback: "p1" }
            ]
        },
        {
            chatID: 28,
            speaker: "tiffany",
            text: sc.n("candy") + " and I have our cam room and makeup room behind this door. We keep it locked because some " +
                "pervert broke into our house and masturbated all over our bed. It would have been hot if he wasn't so homeless looking. " +
            "The old gross pervert still grosses me out. Lets go in.",
            button: [
                { chatID: 29, text: "...", callback: "p2" }
            ]
        },
        {
            chatID: 29,
            speaker: "tiffany",
            text: "This is the Pussy Palace. In the middle is where we put on our cam shows and on the right is where we keep all our " +
            "makeup. You're free to use any of it to make yourself pretty. Have you ever put on your own makeup?",
            button: [
                { chatID: 30, text: "On, no, I haven't", callback: "p3" }
            ]
        },
        {
            chatID: 30,
            speaker: "tiffany",
            text: "WHAT!! How have you never put on your own makeup! Take a seat honey, we're going to teach you how to make yourself " +
            "into a pretty girl!",
            button: [
                { chatID: 31, text: "Well...", callback: "p4" }
            ]
        },
        {
            chatID: 31,
            speaker: "tiffany",
            text: "Come here, I'll teach you how to make yourself a pretty girl. ",
            button: [
                { chatID: -1, text: "....", callback: "p5" }
            ]
        },
        {
            chatID: 32,
            speaker: "tiffany",
            text: "Did you want me to show you how to improve your makeup?",
            button: [
                { chatID: -1, text: "Yes I do", callback: "iMakeup" },
                { chatID: -1, text: "Some other time", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};