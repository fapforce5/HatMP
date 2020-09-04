//Room name
var room456 = {};
room456.main = function () {
    if (sc.checkevent("cop", 1)) {
        nav.bg("456_bench/cop1.jpg");
        chat(14, 456);
    }
    else {
        sc.setstep("cop", 1);
        room456.chatcatch("morning");
    }
};

room456.btnclick = function (name) {
    switch (name) {
        case "bench":
            chat(0, 456);
            break;
        case "cop2":
            nav.killbutton("cop2");
            nav.button({
                "type": "btn",
                "name": "cop3",
                "left": 692,
                "top": 0,
                "width": 1186,
                "height": 1080,
                "image": "456_bench/head.gif"
            }, 456);
            break;
        case "cop3":
            chat(18, 456);
            break;
        default:
            break;
    }
};

room456.chatcatch = function (callback) {
    switch (callback) {
        case "lay":
            nav.killbutton("bench");
            nav.bg("456_bench/sleepdark.jpg", "456_bench/sleepdark.jpg");
            break;
        case "wake":
            char.newdayfake();
            nav.bg("456_bench/456_tif.jpg", "456_bench/456_tif.jpg");
            break;
        case "leave6":
            sc.setstep("tiffany", -6);
            char.room(450);
            break;
        case "leave7":
            sc.setstep("me", 7);
            g.pass = 0;
            cl.c.accessories = new Array();
            cl.c.cumface = false;
            cl.display();
            char.room(400);
            break;
        case "run":
            nav.killbutton("cop2");
            nav.bg("456_bench/456_run.jpg");
            break;
        case "cop2":
            nav.bg("456_bench/456_bg_night.jpg");
            nav.button({
                "type": "btn",
                "name": "cop2",
                "left": 639,
                "top": 0,
                "width": 959,
                "height": 1080,
                "image": "456_bench/cop2.png"
            }, 456);
            break;
        case "cop4":
            nav.killbutton("cop3");
            nav.bg("456_bench/cop4.jpg");
            break;
        case "cop5":
            nav.bg("456_bench/cop5.jpg");
            break;
        case "cop6":
            nav.bg("456_bench/cop6.jpg");
            break;
        case "cop7":
            nav.bg("456_bench/cop7.jpg");
            break;
        case "cop8":
            nav.bg("456_bench/jack.gif");
            break;
        case "cop9":
            nav.bg("456_bench/cop9.jpg");
            break;
        case "cop10":
            nav.bg("456_bench/cop1.jpg");
            break;
        case "cop11":
            g.mod("giveOralMale", 1);
            g.mod("sissy", 15);
            sc.setstep("me", -9);
            cl.c.cumface = true;
            nav.bg("456_bench/sleepdark.jpg", "456_bench/sleepdark.jpg");
            break;
        case "morning":
            //if (sc.getstep("me") === 6) {
            //    nav.bg("456_bench/456_tif.jpg", "456_bench/456_tif.jpg");
            //    char.newday();
            //    chat(13, 456);
            //}
            //else {
            char.newdayfake();
            nav.bg("456_bench/456_bg.jpg", "456_bench/456_bg_night.jpg");
            chat(32, 456);
            break;
        case "newday":
            if (sc.getstep("tiffany") === 13) {
                if (sc.checkevent("tiffany", -6)) {
                    nav.bg("456_bench/456_tif.jpg", "456_bench/456_tif.jpg");
                    chat(13, 456);
                }
                else
                    chat(5, 456);
            }
            else {
                nav.room(450);
            }
            break;
        default:
            break;
    }
};

room456.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I guess there's no where else I can sleep, this bench will have to do..",
            button: [
                { chatID: 1, text: "[Lay down on bench for the night]", callback: "lay" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I really fucked up. Really really fucked up. I don't think I'll be able to afford an apartment with how little I make. " +
                "I guess this bench is my home now, and my backpack is my living room. ",
            button: [
                { chatID: 2, text: "[Sleep]", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "zzzz...",
            button: [
                { chatID: 3, text: "......", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "zzzz...",
            button: [
                { chatID: 4, text: "....", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "zzzz...",
            button: [
                { chatID: 5, text: "..", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "...",
            button: [
                { chatID: 6, text: "[Wake up]", callback: "wake" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "Wakey Wakey sleepy head.. What are you doing on a bench " + sc.n("me") + "?",
            button: [
                { chatID: 7, text: "wha... " + sc.n("tiffany") + "?", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "Yes, I usually do a morning job before the park opens up. I usually try to avoid perverts, but you " +
                "look so cute laying there. So what are you doing sleeping in the park?",
            button: [
                { chatID: 8, text: "[Tell " + sc.n("tiffany") + " the story on how you became homeless]", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Awwww, you poor thing. I always felt bad about getting you in trouble with Missy. I'll tell you what " + sc.n("me") + " " +
                "me and my roomie Candy have an extra bedroom would you want to stay at our place for a while?",
            button: [
                { chatID: 9, text: "Of course. Thank you, thank you, thank you.", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "There is one catch, we live at a girl only house and boys aren't allowed. I'll have to sneak you in somehow.... ",
            button: [
                { chatID: 10, text: "Can I climb in through your window?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "I wouldn't want you to get caught. We'll have to dress you up like a girl to sneak you in. Are you in? ",
            button: [
                { chatID: 12, text: "I guess I have no other choice, I'm in!", callback: "" },
                { chatID: 11, text: "Thanks " + sc.n('tiffany') + ", but there's no way I'm going to wear girls clothes", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "OK sweety, I go running here each morning if you change your mind.",
            button: [
                { chatID: -1, text: "Ok, see you later", callback: "leave6" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "Oh awesome!!! We get to play dress up, I'm so excited! Get up sleepy head Lets go to the mall! ",
            button: [
                { chatID: -1, text: "[Follow " + sc.n('tiffany') + ", to the mall]", callback: "leave7" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "You ready to go shopping with me, or are you still ok being homeless?",
            button: [
                { chatID: 12, text: "I guess I have no other choice, I'm in!", callback: "" },
                { chatID: -1, text: "Thanks " + sc.n('tiffany') + ", but there's no way I'm going to wear girls clothes", callback: "leave6" }
            ]
        },
        {
            chatID: 14,
            speaker: "cop",
            text: "Oh, so you came back? I knew you would.",
            button: [
                { chatID: 15, text: "Wha.. no, I'm just trying to get some sleep.", callback: "cop2" }
            ]
        },
        {
            chatID: 15,
            speaker: "cop",
            text: "Don't play coy with me boy. I know you came back for this big cock. Open that pretty little mouth of yours.",
            button: [
                { chatID: 17, text: "I better do what he says... ", callback: "" },
                { chatID: 16, text: "RUN AND HIDE!!", callback: "run" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "Oh man! I can't beleive that cop was going to make me suck his dick... I better hide our here for the night. " +
                "I can't ever go back to that bench!",
            button: [
                { chatID: -1, text: "...", callback: "morning" }
            ]
        },
        {
            chatID: 17,
            speaker: "cop",
            text: "That's right boy, open that mouth so I can fill it.",
            button: [
                { chatID: -1, text: "Take the head of his cock into your mouth", callback: "cop3" }
            ]
        },
        {
            chatID: 18,
            speaker: "cop",
            text: "Stop playing with it, suck it bitch!",
            button: [
                { chatID: 19, text: "mMMmmm uhhHHhmm Mmm M It's too MMmMM big for my mouth mmMMmmhhHHHhh", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cop",
            text: "Relax your jaw.. ",
            button: [
                { chatID: 20, text: "UUUUgggggHHHHHhhhh ooOOOooooo", callback: "cop4" }
            ]
        },
        {
            chatID: 20,
            speaker: "cop",
            text: "I'm just going to have to force it it. ",
            button: [
                { chatID: 21, text: "ooooo", callback: "cop5" }
            ]
        },
        {
            chatID: 21,
            speaker: "cop",
            text: "Just a bit further... ",
            button: [
                { chatID: 22, text: "aaAAAA", callback: "cop6" }
            ]
        },
        {
            chatID: 22,
            speaker: "cop",
            text: "Fuck take this big dick ",
            button: [
                { chatID: 23, text: "oooOOOOOO", callback: "cop7" }
            ]
        },
        {
            chatID: 23,
            speaker: "cop",
            text: "I can feel the back of your throat... oh yea.. oh fuck I'm going to cum...  ",
            button: [
                { chatID: 24, text: "uuHHHmmmmm", callback: "cop8" }
            ]
        },
        {
            chatID: 24,
            speaker: "cop",
            text: "Get ready for my cum bitch!",
            button: [
                { chatID: 25, text: "...", callback: "cop9" }
            ]
        },
        {
            chatID: 25,
            speaker: "cop",
            text: "Now clean your face up slut, you're covered in cum.",
            button: [
                { chatID: 26, text: "Yes sir", callback: "cop10" }
            ]
        },
        {
            chatID: 26,
            speaker: "cop",
            text: "Remember if you tell anyone I'll just deny it then lock you up " +
                "for lying about the police!",
            button: [
                { chatID: 27, text: "Yes sir [go to sleep]", callback: "cop11" }
            ]
        },
        {
            chatID: 27,
            speaker: "me",
            text: "My jaw hurts and my face smells like cum...",
            button: [
                { chatID: -1, text: "ZZZZzzzz", callback: "morning" }
            ]
        },
        {
            chatID: 28,
            speaker: "me",
            text: "Are those itty bitty tits? I think these pills are chaning my body.",
            button: [
                { chatID: 32, text: "....", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "me",
            text: "Oh no... is my penis getting shrinking!?!?",
            button: [
                { chatID: 32, text: "....", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "me",
            text: "Hahah nice, bigger titties!",
            button: [
                { chatID: 32, text: "....", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "me",
            text: "Check that ass out! So much to grab",
            button: [
                { chatID: 32, text: "....", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "me",
            text: "Time to get up!",
            button: [
                { chatID: -1, text: "....", callback: "newday" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};