//Room name
var room57 = {};
room57.main = function () {
    if (sc.tiffany().thisRoom && sc.candy().thisRoom()) {
        nav.bg("57_pussyPalace/fuckbg.jpg");
        nav.button({
            "type": "img",
            "name": "f0",
            "left": 444,
            "top": 0,
            "width": 1280,
            "height": 1080,
            "image": "57_pussyPalace/fuck.gif"
        }, 57);
        g.roomTimeout = setTimeout(function () { room57.btnclick("f1"); }, 3000);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "mirror",
                "left": 1596,
                "top": 219,
                "width": 324,
                "height": 861,
                "image": "57_pussyPalace/makeup.png"
            },
            {
                "type": "btn",
                "name": "bed",
                "left": 226,
                "top": 697,
                "width": 1070,
                "height": 362,
                "image": "57_pussyPalace/bed.png"
            },
        ];
        var navList = [51];
        $.each(btnList, function (i, v) {
            nav.button(v, 57);
        });
        nav.buildnav(navList);
    }
};

room57.btnclick = function (name) {
    switch (name) {
        case "f1":
            nav.killbutton("f0");
            nav.bg("57_pussyPalace/f1.jpg");
            chat(0, 57);
            break;
        case "c3":
            nav.killbutton("c3");
            nav.button({
                "type": "img",
                "name": "f0",
                "left": 1330,
                "top": 84,
                "width": 499,
                "height": 499,
                "image": "57_pussyPalace/c3.gif"
            }, 57);
            nav.bg("57_pussyPalace/c3.jpg");
            g.roomTimeout = setTimeout(function () { room57.btnclick("c4"); }, 2000);
            break;
        case "c4":
            nav.bg("57_pussyPalace/c4.jpg");
            chat(27, 57);
            break;
        case "mirror":
            g.pass = 57;
            char.room(27);
            break;
        case "bed":
            char.room(58);
            break;
        default:
            break;
    }
};

room57.chatcatch = function (callback) {
    switch (callback) {
        case "runaway":
            char.addtime(60);
            if (g.dt.getHours() < 19)
                char.addtime(60);
            char.room(51);
            break;
        case "f2":
            if (cl.hasoutfit("nude") === null) {
                if (cl.c.chastity === null)
                    chat(2, 57);
                else
                    chat(24, 57);
            }
            else
                chat(1, 57)
            break;
        case "f3":
            g.mod("arousal", 100);
            nav.bg("57_pussyPalace/f3.jpg");
            break;
        case "f4":
            nav.bg("57_pussyPalace/f4.jpg");
            break;
        case "f5":
            nav.bg("57_pussyPalace/f5.jpg");
            break;
        case "f6":
            nav.bg("57_pussyPalace/f6.jpg");
            break;
        case "f7":
            nav.bg("57_pussyPalace/f7.jpg");
            break;
        case "f8":
            nav.bg("57_pussyPalace/f8.jpg");
            break;
        case "f9":
            nav.bg("57_pussyPalace/f9.jpg");
            break;
        case "f10":
            nav.bg("57_pussyPalace/f10.jpg");
            break;
        case "f11":
            nav.bg("57_pussyPalace/f11.jpg");
            break;
        case "f12":
            nav.button({
                "type": "img",
                "name": "f12",
                "left": 569,
                "top": 149,
                "width": 976,
                "height": 931,
                "image": "57_pussyPalace/pair.png"
            }, 57);
            nav.bg("57_pussyPalace/bg.jpg");
            break;
        case "c1":
            nav.bg("57_pussyPalace/c1.jpg");
            break;
        case "c2":
            nav.button({
                "type": "tongue",
                "name": "c3",
                "left": 972,
                "top": 368,
                "width": 255,
                "height": 246,
                "image": "57_pussyPalace/c2.png"
            }, 57);
            nav.bg("57_pussyPalace/c2.jpg");
            break;
        case "c5":
            nav.bg("57_pussyPalace/c5.jpg");
            break;
        case "c6":
            nav.bg("57_pussyPalace/c6.jpg");
            break;
        case "c7":
            nav.killbutton("f0");
            nav.button({
                "type": "img",
                "name": "c7",
                "left": 622,
                "top": 0,
                "width": 800,
                "height": 1080,
                "image": "57_pussyPalace/c7.gif"
            }, 57);
            nav.button({
                "type": "img",
                "name": "f0",
                "left": 1330,
                "top": 84,
                "width": 499,
                "height": 499,
                "image": "57_pussyPalace/c3.gif"
            }, 57);
            break;
        case "c8":
            nav.killbutton("c7");
            nav.bg("57_pussyPalace/c8.jpg");
            break;
        case "c9":
            nav.killbutton("f0");
            nav.button({
                "type": "img",
                "name": "f0",
                "left": 1330,
                "top": 84,
                "width": 499,
                "height": 499,
                "image": "57_pussyPalace/c9.gif"
            }, 57);
            break;
        case "c10":
            nav.killbutton("f0");
            break;
        case "c11":
            nav.bg("57_pussyPalace/c11.jpg");
            break;
        case "c12":
            nav.bg("57_pussyPalace/c12.jpg");
            break;
        case "c13":
            nav.kill();
            nav.bg("57_pussyPalace/bg.jpg");

            break;
        default:
            break;
    }
};

room57.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "So are you going to keep staring, or join us?",
            button: [
                { chatID: -1, text: "Oh no!", callback: "runaway" },
                { chatID: -1, text: "Oh yes!", callback: "f2" },
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "Strip off those clothes and come back. Then we'll have some fun!",
            button: [
                { chatID: -1, text: "Ok!", callback: "runaway" },
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "Come sit on the bed sexy!",
            button: [
                { chatID: 3, text: "[Sit with your cock out]", callback: "f3" },
            ]
        },
        {
            chatID: 3,
            speaker: "candy",
            text: "Slurp, lick, suck",
            button: [
                { chatID: 4, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "mmmMMMmmm Let's play rusty trombone!",
            button: [
                { chatID: 5, text: "...", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "candy",
            text: "ooOOoo I get the mouth piece!",
            button: [
                { chatID: 6, text: "...", callback: "f4" },
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "MMmmmmm such a yummy cock!",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "candy",
            text: "I need that cock in my pussy!",
            button: [
                { chatID: 8, text: "...", callback: "f5" },
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Oh, your tongue is so wicked! I fucking love it!",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "candy",
            text: "It's not as good as this cock!",
            button: [
                { chatID: 10, text: "...", callback: "f6" },
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "Awwww fuck I'm going to cum all over your cock!",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "That's so hot! Cum all over that cock!",
            button: [
                { chatID: 12, text: "...", callback: "f7" },
            ]
        },
        {
            chatID: 12,
            speaker: "candy",
            text: "aaaaaAAAAAAaaaaaaaa FUCK!!!!",
            button: [
                { chatID: 13, text: "...", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "That's so hot! I've gotta finish myself off!",
            button: [
                { chatID: 14, text: "...", callback: "f8" },
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "Awwww fuck! Fuck fuck fuck fuck, cum on my face when I cum!!",
            button: [
                { chatID: 15, text: "...", callback: "f9" },
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "ooo",
            button: [
                { chatID: 16, text: "...", callback: "f10" },
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "AAAAaaaaa",
            button: [
                { chatID: 17, text: "...", callback: "f11" },
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "GULP!",
            button: [
                { chatID: 18, text: "...", callback: "f12" },
            ]
        },
        {
            chatID: 18,
            speaker: "candy",
            text: "That was fun, we really love your cock!",
            button: [
                { chatID: 19, text: "...", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "tiffany",
            text: "Yeah it was our fans really love it when we bring a boy in to play!",
            button: [
                { chatID: 20, text: "Fans?", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "candy",
            text: "Oh we do a cam show every day after work. " +
            "want to play! ",
            button: [
                { chatID: 21, text: "...", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "We just get so horny after teasing so many men all day we just have to fuck each other or our pussies ache.  ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "candy",
            text: "Please join us anytime. Having a new toy to play with is so much fun! ",
            button: [
                { chatID: 23, text: "...", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "I'm tired... I'm going to head to my room. Love ya!",
            button: [
                { chatID: -1, text: "ok bye", callback: "runaway" },
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "I see you're wearing your chastity, naughty girl. Thinking too much about sex again. It's a good that you have lots " +
            "of fun holes to play with!",
            button: [
                { chatID: 25, text: "...", callback: "c1" },
            ]
        },
        {
            chatID: 25,
            speaker: "candy",
            text: "I love a big cock, but we'll have to have fun in others ways I guess.",
            button: [
                { chatID: 26, text: "...", callback: "c2" },
            ]
        },
        {
            chatID: 26,
            speaker: "candy",
            text: "You can start by licking my clit. It's so horny baby.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "tiffany",
            text: "I want to take you for a ride!",
            button: [
                { chatID: 28, text: "?", callback: "c5" },
            ]
        },
        {
            chatID: 28,
            speaker: "tiffany",
            text: "HHHnnnnggggg",
            button: [
                { chatID: 29, text: "!", callback: "c6" },
            ]
        },
        {
            chatID: 29,
            speaker: "tiffany",
            text: "That just slid right in you little butt slut!",
            button: [
                { chatID: 30, text: "!", callback: "c7" },
            ]
        },
        {
            chatID: 30,
            speaker: "tiffany",
            text: "Look at that hungry pussy eating my strapon! You slut!",
            button: [
                { chatID: 31, text: "mmmm", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "tiffany",
            text: "That's such a sexy pussy, I have to get a taste!",
            button: [
                { chatID: 32, text: "mmmm", callback: "c8" },
            ]
        },
        {
            chatID: 32,
            speaker: "candy",
            text: "Ah fuck I'm going to cum all over your face!",
            button: [
                { chatID: 33, text: "mmmm", callback: "c9" },
            ]
        },
        {
            chatID: 33,
            speaker: "candy",
            text: "AAAaaaaaaaaaaa fuck",
            button: [
                { chatID: 34, text: "GAH!!!", callback: "c10" },
            ]
        },
        {
            chatID: 34,
            speaker: "candy",
            text: "hehehe sorry I didn't warn you that sometime I pee when I cum! ",
            button: [
                { chatID: 35, text: "GAH!!!", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "tiffany",
            text: "It's my turn, I want to sit on your face " + sc.n("me") + ".",
            button: [
                { chatID: 36, text: "...", callback: "c11" },
            ]
        },
        {
            chatID: 36,
            speaker: "tiffany",
            text: "OOhh yea eat my pussy. Ooooo deeper ",
            button: [
                { chatID: 37, text: "...", callback: "c12" },
            ]
        },
        {
            chatID: 37,
            speaker: "tiffany",
            text: "Fuck!!!!!! YES!!!!!!!! ",
            button: [
                { chatID: 38, text: "...", callback: "f12" },
            ]
        },
        {
            chatID: 38,
            speaker: "candy",
            text: "It's too bad you're all locked up or we would make you cum all over us! Oh well, see you around sexy! ",
            button: [
                { chatID: 38, text: "Oh yea, bye.", callback: "runaway" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};