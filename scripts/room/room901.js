//Pool

var room901 = {};

room901.main = function () {
    var cindyStep = sc.getstep("cindy");
    if (cl.hasoutfit("swim") === null) {
        if (cindyStep === 1 && g.dt.getDay() === 3 && g.gethourdecimal().between(15, 17)) {
            nav.button({
                "type": "btn",
                "name": "girlchallenge",
                "left": 651,
                "top": 0,
                "width": 816,
                "height": 1080,
                "image": "901_pool/girl2.png"
            }, 901);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "swimming",
                "left": 0,
                "top": 409,
                "width": 1575,
                "height": 575,
                "image": "901_pool/swim.png"
            }, 901);
            nav.button({
                "type": "btn",
                "name": "changeroom",
                "left": 385,
                "top": 273,
                "width": 665,
                "height": 151,
                "title": "Change Room",
                "image": "901_pool/changeroom.png"
            }, 901);
            if (sc.swimgirl().thisRoom) {
                nav.button({
                    "type": "btn",
                    "name": "girl",
                    "left": 87,
                    "top": 453,
                    "width": 626,
                    "height": 627,
                    "title": "Dat Booty!!!",
                    "image": "901_pool/girl1.png"
                }, 901);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "boy",
                    "left": 1570,
                    "top": 334,
                    "width": 127,
                    "height": 342,
                    "title": "Soooo tan",
                    "image": "901_pool/boy1.png"
                }, 901);
            }
            if (sc.sister().thisRoom) {
                nav.button({
                    "type": "btn",
                    "name": "lola",
                    "left": 573,
                    "top": 65,
                    "width": 288,
                    "height": 1015,
                    "image": "901_pool/lola.png"
                }, 901);
            }
        }
    }
    else {
        nav.bg("901_pool/bathroom.jpg");
        nav.button({
            "type": "btn",
            "name": "bboy",
            "left": 1339,
            "top": 534,
            "width": 358,
            "height": 546,
            "image": "901_pool/bboy.png"
        }, 901);
        nav.button({
            "type": "btn",
            "name": "bgirl",
            "left": 301,
            "top": 534,
            "width": 358,
            "height": 546,
            "image": "901_pool/bgirl.png"
        }, 901);
        nav.t({
            type: "img",
            name: "warning",
            left: 400,
            top: 100,
            font: 20,
            hex: "#ffffff",
            text: "I've got to wear a swimsuit to go swimming."
        });
    }
    nav.buildnav([0, 902, 903]);
};

room901.btnclick = function (name) {
    var i;
    switch (name) {
        case "girl":
            var cindy = sc.getstep("cindy");
            nav.killbutton("girl");
            nav.button({
                "type": "img",
                "name": "girl",
                "left": 651,
                "top": 0,
                "width": 816,
                "height": 1080,
                "image": "901_pool/girl2.png"
            }, 901);
            switch (cindy) {
                case 0:
                    chat(0, 901);
                    break;
                case 1:
                    chat(8, 901);
                    break;
                case 2:
                    if (cl.appearance() === 0)
                        chat(31, 901);
                    else
                        chat(32, 901);
                    break;
            }
            break;
        case "boy":
            nav.killbutton("boy");
            nav.killbutton("lola");
            nav.button({
                "type": "img",
                "name": "boy",
                "left": 864,
                "top": 0,
                "width": 552,
                "height": 1080,
                "image": "901_pool/boy2a.png"
            }, 901);
            if (cl.appearanceBody() < 1)
                chat(33, 901);
            else if (cl.appearanceBody() < 3)
                chat(34, 901);
            else {
                var boyStep = sc.getstep("tim");
                if (boyStep === 0)
                    chat(36, 901);
                else if (boyStep === 1)
                    chat(42, 901);

            }
            break;
        case "lola":
            nav.killbutton("boy");
            var lolaStep = sc.getstep("lola");
            if (lolaStep < 8)
                chat(9, 901);
            else if (lolaStep === 8) {
                if (sc.checkevent("lola", -2))
                    chat(12, 901);
                else
                    chat(16, 901);
            }
            else
                chat(17, 901);
            break;
        case "girlchallenge":
            if (cl.appearance() === 0)
                chat(18, 901);
            else
                chat(2, 901);
            break;
        case "changeroom":
            nav.killbutton("boy");
            nav.killbutton("girl");
            nav.killbutton("swimming");
            nav.killbutton("lola");
            nav.killbutton("changeroom");
            nav.bg("901_pool/bathroom.jpg");
            nav.button({
                "type": "btn",
                "name": "bboy",
                "left": 1339,
                "top": 534,
                "width": 358,
                "height": 546,
                "image": "901_pool/bboy.png"
            }, 901);
            nav.button({
                "type": "btn",
                "name": "bgirl",
                "left": 301,
                "top": 534,
                "width": 358,
                "height": 546,
                "image": "901_pool/bgirl.png"
            }, 901);
            nav.buildnav([901]);
            break;
        case "bboy":
            char.room(903);
            break;
        case "bgirl":
            char.room(902);
            break;
        case "swimming":
            if (g.get("energy") < 30) {
                chat(21, 901);
            }
            else {
                nav.killall();
                nav.bg("901_pool/race.jpg");
                char.changeMenu("hide");
                g.internal = 150;
                nav.button({
                    "type": "img",
                    "name": "swimman",
                    "left": g.internal,
                    "top": 540,
                    "width": 209,
                    "height": 70,
                    "image": "901_pool/swimman.png"
                }, 901);
                nav.button({
                    "type": "btn",
                    "name": "stroke",
                    "left": 717,
                    "top": 826,
                    "width": 486,
                    "height": 200,
                    "image": "901_pool/stroke1.png"
                }, 901);
            }
            break;
        case "stroke":
            g.internal += 100 + (g.get("bodyLevel") * 10);
            if (g.internal > 1600)
                g.internal = 1600;
            $('.room-img[data-name="swimman"]').css({ "left": (g.internal * g.ratio) + "px" });
            if (g.internal === 1600) {
                chat(22, 901);
            }
            else {
                nav.modbutton("stroke", "901_pool/stroke0.png", "strokepause", "");
                g.roomTimeout = setTimeout(function () {
                    nav.modbutton("strokepause", "901_pool/stroke1.png", "stroke", "");
                }, 500);
                var xi;
                for (i = 0; i < g.st.length; i++) {
                    if (g.st[i].n === "energy") {
                        xi = i;
                        i = 9999;
                    }
                }
                g.st[xi].t -= 5;
                if (g.st[xi].t < 1) {
                    g.st[xi].t = 0;
                    nav.killbutton("stroke");
                    chat(20, 901);
                }
            }
            break;
        case "stroke_r":
            var girlAhead;
            g.internal.m += 100 + (g.get("bodyLevel") * 10);
            g.internal.f += 148.017;
            girlAhead = g.internal.f > g.internal.m;

            if (g.internal.m > 1600)
                g.internal.m = 1600;
            if (g.internal.f > 1600)
                g.internal.f = 1600;
            
            if (g.internal.m === 1600 || g.internal.f === 1600) {
                if (girlAhead) {
                    g.internal.f = 1600;
                    if (g.internal.m >= 1600)
                        g.internal.m = 1550;
                    $('.room-img[data-name="swimman"]').css({ "left": (g.internal.m * g.ratio) + "px" });
                    $('.room-img[data-name="swimgirl"]').css({ "left": (g.internal.f * g.ratio) + "px" });
                    chat(24, 901);
                }
                else {
                    g.internal.m = 1600;
                    if (g.internal.f >= 1600)
                        g.internal.f = 1550;
                    $('.room-img[data-name="swimman"]').css({ "left": (g.internal.m * g.ratio) + "px" });
                    $('.room-img[data-name="swimgirl"]').css({ "left": (g.internal.f * g.ratio) + "px" });
                    chat(26, 901);
                }
            }
            else {
                $('.room-img[data-name="swimman"]').css({ "left": (g.internal.m * g.ratio) + "px" });
                $('.room-img[data-name="swimgirl"]').css({ "left": (g.internal.f * g.ratio) + "px" });

                nav.modbutton("stroke_r", "901_pool/stroke0.png", "strokepause", "");
                g.roomTimeout = setTimeout(function () {
                    nav.modbutton("strokepause", "901_pool/stroke1.png", "stroke_r", "");
                }, 500);
                var yi;
                for (i = 0; i < g.st.length; i++) {
                    if (g.st[i].n === "energy") {
                        yi = i;
                        i = 9999;
                    }
                }
                g.st[yi].t -= 8;
                if (g.st[yi].t < 1) {
                    g.st[yi].t = 0;
                    nav.killbutton("stroke");
                    chat(23, 901);
                }
            }

            break;
        default:
            break;
    }
};

room901.chatcatch = function (callback) {
    switch (callback) {
        case "cindy0":
            if (cl.appearance() === 0) {
                var cstep = sc.getstep("cindy");
                if (cstep === 0)
                    chat(1, 901);
                else if (cstep === 1)
                    chat(6, 901);
            }
            else
                chat(2, 901);
            break;
        case "reset":
            char.addtime(30);
            char.room(901);
            break;
        case "cindyInc1":
            sc.setstep("cindy", 1);
            room901.chatcatch("reset");
            break;
        case "cindyInc2":
            sc.setstep("cindy", 1);
            room901.chatcatch("reset");
            break;
        case "lola-2":
            sc.setstep("lola", -2);
            char.addtime(120);
            char.room(901);
            break;
        case "swimbadend":
            var badFitness = Math.round(g.internal / 200);
            g.mod("fitness", badFitness);
            g.mod("body", badFitness * 2);
            char.room(901);
            break;
        case "swimgoodend":
            g.mod("fitness", 30);
            g.mod("body", 45);
            char.room(901);
            break;
        case "swimfan":
            nav.killall();
            nav.bg("901_pool/race.jpg");
            char.changeMenu("hide");
            g.internal = { m: 150, f: 150 };
            nav.button({
                "type": "img",
                "name": "swimman",
                "left": g.internal.m,
                "top": 540,
                "width": 209,
                "height": 70,
                "image": "901_pool/swimman.png"
            }, 901);
            nav.button({
                "type": "img",
                "name": "swimgirl",
                "left": g.internal.f,
                "top": 300,
                "width": 209,
                "height": 70,
                "image": "901_pool/swimgirl.png"
            }, 901);
            nav.button({
                "type": "btn",
                "name": "stroke_r",
                "left": 717,
                "top": 826,
                "width": 486,
                "height": 200,
                "image": "901_pool/stroke1.png"
            }, 901);
            break;
        case "swimLose":
            nav.killall();
            nav.bg("901_pool/pool.jpg");
            nav.button({
                "type": "img",
                "name": "girl",
                "left": 651,
                "top": 0,
                "width": 816,
                "height": 1080,
                "image": "901_pool/girl2.png"
            }, 901);

            break;
        case "swimwin":
            nav.killbutton("girl");
            nav.button({
                "type": "img",
                "name": "girl",
                "left": 111,
                "top": 0,
                "width": 1545,
                "height": 1080,
                "title": "Dat Booty!!!",
                "image": "901_pool/girl1peek.png"
            }, 901);
            sc.setstep("cindy", 2);
            char.addtime(100);
            break;
        case "checkboy":
            var checkboy = sc.getstep("tim");
            if (checkboy === 0)
                chat(37, 901);

            break;
        case "boycock":
            nav.killbutton("boy");
            nav.button({
                "type": "img",
                "name": "boy",
                "left": 774,
                "top": 0,
                "width": 920,
                "height": 1080,
                "title": "Soooo tan",
                "image": "901_pool/boy3.png"
            }, 901);
            break;
        case "boy1":
            sc.setstep("tim", 1);
            room901.chatcatch("reset");
            break;
    }
};


room901.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "cindy",
            text: "Hay there, what's up?",
            button: [
                { chatID: -1, text: "Hay sexy, I'm feeling short of breath, wanna give me mouth to mouth?", callback: "cindy0" },
                { chatID: -1, text: "Oh sorry, I didn't mean to poke your butt with my finger.", callback: "reset" },
            ]
        },
        {
            chatID: 1,
            speaker: "cindy",
            text: "Ugh, like I haven't heard that a million times. Wait don't you know " + sc.n("lola") + " and " + sc.n("eva") + "?",
            button: [
                { chatID: 3, text: "Oh yea they're my " + sc.n("el"), callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "cindy",
            text: "Ewwwww gross. Go away loser. You're so disgusting. Why would I, a really hot girl, want to give you mouth to mouth?",
            button: [
                { chatID: -1, text: "Oh... Well that really hurt.", callback: "reset" },
            ]
        },
        {
            chatID: 3,
            speaker: "cindy",
            text: sc.n("lola") + " really is the best. She helped me improve my breast stroke. Took 5 seconds off my time. ",
            button: [
                { chatID: 4, text: "I know, she swims all the time!", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "cindy",
            text: "She really does. I love that girl.",
            button: [
                { chatID: 6, text: "So would you like to go on a date sometime?", callback: "" },
                { chatID: 5, text: "Yea, she's cool. ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "cindy",
            text: "Cool. I'm going to get back to my lifeguard duties. Take it easy.",
            button: [
                { chatID: -1, text: "Oh ok, bye. ", callback: "cindyInc1" },
            ]
        },
        {
            chatID: 6,
            speaker: "cindy",
            text: "Ohh... hmmm I'll tell you what, if you can beat me in a swim race I'll go out with you!",
            button: [
                { chatID: 7, text: "You're on!", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "cindy",
            text: "OK! I do my laps every Wednesday between 4:00 PM and 6:00 PM. I'll see you there cutie!",
            button: [
                { chatID: -1, text: "You're on! I'll see you there!", callback: "cindyInc2" },
            ]
        },
        {
            chatID: 8,
            speaker: "cindy",
            text: "Hay what's up?",
            button: [
                { chatID: -1, text: "I wanted to ask you out on a date.", callback: "cindy0" },
                { chatID: -1, text: "Oh sorry, I didn't mean to poke your butt with my finger.", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "lola",
            text: "Hay " + sc.n("me") + "! Getting some laps in?",
            button: [
                { chatID: 10, text: "Oh yeah!", callback: "" },
                { chatID: 11, text: "Nope, just here to check you out in a swimsuit", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "lola",
            text: "Good for you. I'm here during the week from 3:00 pm till 5:00 pm to keep fit too",
            button: [
                { chatID: -1, text: "And you look great!", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "Oh " + sc.n("me") + "! You're too much. I'll see you at home *wink",
            button: [
                { chatID: -1, text: "Ok see you", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "lola",
            text: "Oh my god " + sc.n("me") + "! I'm sooooo sorry you got kicked out! " + sc.n("eva") + " and I have just been " +
                "the saddest ever. It's so terrible you're not here. I just want to smuggle you and take you in!",
            button: [
                { chatID: 13, text: "I know I miss you two too", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "I just want to tackle you and squeeze you, but that lifeguard is a real butthead. Where did you go after? ",
            button: [
                { chatID: 14, text: sc.n("zoey") + " was nice enough to take me in. [Tell " + sc.n("lola") + " your story. ", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "lola",
            text: "Oh I'm so happy " + sc.n("lola") + " was able to take you in. She's such a great friend. " +
                + sc.n("eva") + " and I will keep working on " + sc.n("landlord") + " to get you back in.We really miss " +
                "you. Also ever since you left " + sc.n("bigguy") + " has been acting really creepy. He's been staring at us, and I " +
                "swear he was licking his lips. We told " + sc.n("landlord") + ", but she just said we were being weird. ",
            button: [
                { chatID: 15, text: "That's horrible. I'll try to find a way to get back in and look out for you two.", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "I hope so. You know " + sc.n("landlord") + ". She'll get mad, but give her some time and she'll get over it. " +
                "I'm going to get my laps in, it's good seeing you. Love you!",
            button: [
                { chatID: -1, text: "You too I'm going to get some laps too", callback: "lola-2" }
            ]
        },
        {
            chatID: 16,
            speaker: "lola",
            text: "Hay " + sc.n("me") + "! I'm so happy every time I see you. We're still working on " + sc.n("landlord") + ". " +
                "She said maybe, you'll have to earn her trust. Just keep working on her. I know you'll get back in. ",
            button: [
                { chatID: -1, text: "I will. Thanks " + sc.n("lola") + ".", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "If you keep swimming like this you're going to turn into a fish!",
            button: [
                { chatID: -1, text: "You're a fish!", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "cindy",
            text: "Oh so you decided to show your face? You know I'm going to destroy you. No one can swim like me!",
            button: [
                { chatID: 19, text: "You're on! And if I win you're going on that date!", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cindy",
            text: "Slow down turbo! You have to beat me first.",
            button: [
                { chatID: -1, text: "Lets go!", callback: "swimfan" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "Ohhh man swimming is hard. I need to keep working on my upper body to get across this entire pool.",
            button: [
                { chatID: -1, text: "Give up", callback: "swimbadend" }
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "I'm too tired to swim.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "I love doing laps!",
            button: [
                { chatID: -1, text: "...", callback: "swimgoodend" }
            ]
        },
        {
            chatID: 23,
            speaker: "me",
            text: "Oh crap I ran out of energy!",
            button: [
                { chatID: 25, text: "...", callback: "swimLose" }
            ]
        },
        {
            chatID: 24,
            speaker: "cindy",
            text: "Haha I won!",
            button: [
                { chatID: 25, text: "Damn I need to work on my upper body strength", callback: "swimLose" }
            ]
        },
        {
            chatID: 25,
            speaker: "cindy",
            text: "I can't respect a man that I'm stronger and faster than. Maybe next time turbo!",
            button: [
                { chatID: -1, text: "ouch", callback: "reset" }
            ]
        },
        {
            chatID: 26,
            speaker: "cindy",
            text: "You totally beat me!",
            button: [
                { chatID: 27, text: "YES! I won", callback: "swimLose" }
            ]
        },
        {
            chatID: 27,
            speaker: "cindy",
            text: "Well I guess I owe you a date. There's nothing that turns me on more than a man who's stronger than me. ",
            button: [
                { chatID: 28, text: "Well with muscles like these", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "cindy",
            text: "They are great muscles, you need to show me how well you use them. Meet me at the club. You can find me there on the weekend.",
            button: [
                { chatID: 29, text: "Nice I'll let you see all my muscles at our date.", callback: "swimwin" }
            ]
        },
        {
            chatID: 29,
            speaker: "cindy",
            text: "You better. Here's a sneak peak of your dinner.",
            button: [
                { chatID: 30, text: "I'm hungry for a snack now...", callback: "swimLose" }
            ]
        },
        {
            chatID: 30,
            speaker: "cindy",
            text: "Ok turbo, slow it down. Meet me at the club and I'll let you eat the entire thing. I've gotta run. You stay sexy.",
            button: [
                { chatID: -1, text: "Ok. See you this weekend at the club.", callback: "reset" }
            ]
        },
        {
            chatID: 31,
            speaker: "cindy",
            text: "Hay sexy meet me at the club this weekind.",
            button: [
                { chatID: -1, text: "Cool see you there.", callback: "reset" }
            ]
        },
        {
            chatID: 32,
            speaker: "cindy",
            text: "Ewwww gross! what happened to you! I only like manly men, you look like a chick! Don't talk to me.",
            button: [
                { chatID: -1, text: "Oh.. ouch", callback: "reset" }
            ]
        },
        {
            chatID: 33,
            speaker: "tim",
            text: "Hay dude I can't chat now. Gotta keep people safe bro.",
            button: [
                { chatID: -1, text: "oh yeah", callback: "reset" }
            ]
        },
        {
            chatID: 34,
            speaker: "tim",
            text: "Hay what's up?",
            button: [
                { chatID: 35, text: "Just seeing how you're doing cutie", callback: "" },
                { chatID: -1, text: "Oh nothing. Stop talking to me", callback: "reset" }
            ]
        },
        {
            chatID: 35,
            speaker: "tim",
            text: "I'm going to stop you there. I look way too good to waste time on someone like you.",
            button: [
                { chatID: -1, text: "Ouch", callback: "reset" }
            ]
        },
        {
            chatID: 36,
            speaker: "tim",
            text: "You must be a swimmer 'cause it looks like you've mastered the brest stroke.",
            button: [
                { chatID: -1, text: "haha stop, you're embarrassing me.", callback: "checkboy" },
                { chatID: -1, text: "Nevermind", callback: "reset" },
            ]
        },
        {
            chatID: 37,
            speaker: "tim",
            text: "So I haven't seen you around here before. If you want some swim lessons I can show you how to stroke it. ",
            button: [
                { chatID: 38, text: "I'm sure you're a master at stroking it", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "tim",
            text: "With a body like this I never have to stroke it. But I am great at diving, ever girl has complimented me when I " +
                "go down.",
            button: [
                { chatID: 39, text: "You may be good, but my blowjob.. er I mean going down.. crap. I want to suck your dick.", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "tim",
            text: "I know. You should catch me at the club I may let you suck my cock in the bathroom. If you do a good job I may " +
            "just rock your world. ",
            button: [
                { chatID: 40, text: "How do I know you won't chicken out?", callback: "boycock" },
            ]
        },
        {
            chatID: 40,
            speaker: "tim",
            text: "Does this looks like a chicken? If you wrap your lips around it, it grows way bigger. ",
            button: [
                { chatID: 41, text: "It's such a cute penis. You better bring it to the club this weekend.", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "tim",
            text: "You know it. Wear something sexy for me, and skip dinner, I'll be feeding you snacks all night.",
            button: [
                { chatID: -1, text: "Hahah ok, see you this weekend. ", callback: "boy1" },
            ]
        },
        {
            chatID: 42,
            speaker: "tim",
            text: "Hay sexy, I can't wait to see you at the club!",
            button: [
                { chatID: -1, text: "I'll see you there", callback: "reset" },
            ]
        },
    ];

    return cArray[chatID];
};