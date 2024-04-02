//Room name
var room206 = {};

room206.main = function () {
    var l, t, w, h;
    l = 400 * g.ratio;
    t = 150 * g.ratio;
    w = 1400 * g.ratio;
    h = 800 * g.ratio;
    f = 36 * g.ratio;
    $("#room-buttons").append('<div style="position:absolute; left:' + l + 'px; top:' + t + 'px;' +
        ' width:' + w + 'px; height: ' + h + 'px; font-size:' + f + 'px;" id="q206"></div>');
    g.pass = { q: 0, money: 300 };
    g.internal = [
        {
            t: "<h2>Questionnaire for Junior Detective</h2> Being a junior detective may put you in " +
                "some situations that are new to you. The following questionnaire will assess " +
                "your potential for employment. Please answer the following questions honestly so I may " +
                "evaluate your potential employment with this agency.",
            b: [{ t: "q0.png", a: false }]
        },
        {
            t: "It's your first case as a private investigator, which item should you bring with you? ",

            b: [
                { t: "q1_0.png", a: false },
                { t: "q1_1.png", a: false },
                { t: "q1_2.png", a: false }
            ]
        },
        {
            t: "What would you wear on your first day? ",

            b: [
                { t: "q2_0.png", a: false },
                { t: "q2_1.png", a: false },
                { t: "q2_2.png", a: false }
            ]
        },
        {
            t: "Can you initiate conversations with people you don't know? ",
            b: [
                { t: "q4_0.png", a: false },
                { t: "q4_1.png", a: false }
            ]
        },
        {
            t: "Some cases require long amounts of time staying in one spot. How long can you hold your bladder? ",

            b: [
                { t: "q3_0.png", a: false },
                { t: "q3_1.png", a: false }
            ]
        },
        {
            t: "If you were caught and tied up, what would your reaction be? ",
            b: [
                { t: "q5_0.png", a: false },
                { t: "q5_1.png", a: false }
            ]
        },
        {
            t: "If you had to fight your way out of a tough situation, how would you handle it? ",
            b: [
                { t: "q6_0.png", a: false },
                { t: "q6_1.png", a: false },
                { t: "q6_2.png", a: false },
            ]
        },
        {
            t: "You may have to seduce clients to get information from them. How would you convince them? ",
            b: [
                { t: "q7_0.png", a: false },
                { t: "q7_1.png", a: false },
                { t: "q7_2.png", a: false },
            ]
        },
        {
            t: "If you had to seduce someone to get information do you prefer...",
            b: [
                { t: "q8_0.png", a: false },
                { t: "q8_1.png", a: false },
                { t: "q8_2.png", a: false },
            ]
        },
        {
            t: "What is your perfect sized breast? ",
            b: [
                { t: "q9_0.png", a: false },
                { t: "q9_1.png", a: false },
                { t: "q9_2.png", a: false },
                { t: "q9_3.png", a: false },
                { t: "q9_4.png", a: false },
            ]
        },
        {
            t: "What is your perfect sized butt?",
            b: [
                { t: "q10_0.png", a: false },
                { t: "q10_1.png", a: false },
                { t: "q10_2.png", a: false },
                { t: "q10_3.png", a: false },
                { t: "q10_4.png", a: false },
            ]
        },
        {
            t: "Are you the type of person that likes to make your own decisions, or do you prefer to have those decisions made for you? ",
            b: [
                { t: "q11_0.png", a: false },
                { t: "q11_1.png", a: false },
            ]
        },
        {
            t: "I demand servatude above all else. When I tell you to do something can I expect you to follow my orders? ",
            b: [
                { t: "q12_0.png", a: false },
                { t: "q12_1.png", a: false },
            ]
        },
    ]
    room206.chatcatch("questions");
    $('#room_footer').hide();
};

room206.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room206.chatcatch = function (callback) {
    var callbackSplit = callback.split(" ");
    var img;
    $.each(callbackSplit, function (i, v) {
        switch (v) {
            case "questions":
                if (g.pass.q < g.internal.length) {
                    $('#q206').html((g.pass.q === 0 ? "" : g.pass.q.toString() + ". ") + g.internal[g.pass.q].t);
                    $.each(g.internal[g.pass.q].b, function (i, v) {
                        $('#q206').append('<div><button style="background:none; border:none; margin-top:10px; display:block; margin-left:20px;" class="q206-btn" data-a="' + i + '">' +
                            '<img src="./images/room/206_questions/' + v.t + '" style="height: ' + (100 * g.ratio) + 'px; width: ' + (800 * g.ratio) + 'px;" />' +
                            '</button> </div>');
                    });

                    $('.q206-btn').click(function () {
                        var thisEntry = parseInt($(this).data('a'));
                        g.internal[g.pass.q].b[thisEntry].a = true;
                        g.pass.q++;
                        room206.chatcatch("questions");
                    });
                }
                else {
                    $(".q206-btn").remove();
                    nav.killall();
                    nav.bg("206_questions/side.jpg");
                    chat(19, 206);
                }
                break;
            case "missy0":
                nav.bg("206_questions/desk.jpg");
                break;
            case "like":
                missy.mod("mood", 5);
                break;
            case "hate":
                missy.mod("mood", -5);
                break;
            case "q1":
                if (g.internal[1].b[0].a) {
                    img = g.internal[1].b[0].t;
                    chat(5, 206);
                }
                if (g.internal[1].b[1].a) {
                    img = g.internal[1].b[1].t;
                    levels.mod("pi", 20, 1);
                    chat(3, 206);
                }
                else if (g.internal[1].b[2].a) {
                    missy.mod("mood", -5);
                    img = g.internal[1].b[2].t;
                    chat(4, 206);
                }
                
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q2":
                if (g.internal[2].b[0].a) {
                    img = g.internal[2].b[0].t;
                    levels.mod("xdress", 10, 1);
                    chat(7, 206);
                }
                else if (g.internal[2].b[1].a) {
                    img = g.internal[2].b[1].t;
                    chat(8, 206);
                }
                else {
                    img = g.internal[2].b[2].t;
                    chat(8, 206);
                }
                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q3":
                if (g.internal[3].b[0].a) {
                    img = g.internal[3].b[0].t;
                    levels.mod("charisma", 20, 1);
                    missy.mod("mood", 5);
                    chat(39, 206);
                }
                else {
                    levels.mod("sub", 10, 1);
                    img = g.internal[3].b[1].t;
                    chat(40, 206);
                }
                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q4":
                if (g.internal[4].b[0].a) {
                    chat(9, 206);
                    img = g.internal[4].b[0].t;
                }
                else {
                    chat(10, 206);
                    img = g.internal[4].b[1].t;
                    levels.mod("piss", 10, 1);
                }
                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q5":
                nav.bg("206_questions/cross.jpg");
                if (g.internal[5].b[0].a) {
                    chat(12, 206);
                    img = g.internal[5].b[0].t;
                }
                else {
                    chat(13, 206);
                    img = g.internal[5].b[1].t;
                    levels.mod("sub", 10, 1);
                }

                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q6":
                if (g.internal[6].b[0].a) {
                    chat(14, 206);
                    img = g.internal[6].b[0].t;
                }
                else if (g.internal[6].b[1].a) {
                    chat(15, 206);
                    img = g.internal[6].b[1].t;
                    levels.mod("dom", 10, 1);
                }
                else {
                    nav.bg("206_questions/butt.jpg");
                    chat(16, 206);
                    img = g.internal[6].b[2].t;
                    levels.mod("sub", 10, 1);
                    missy.mod("mood", 5);
                }

                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q7": 
                nav.bg("206_questions/laugh.jpg");
                if (g.internal[7].b[0].a) {
                    chat(21, 206);
                    img = g.internal[7].b[0].t;
                    levels.mod("int", 20, 1);
                }
                else if (g.internal[7].b[1].a) {
                    chat(22, 206);
                    img = g.internal[7].b[1].t;
                    levels.mod("charisma", 20, 1);
                }
                else {
                    chat(23, 206);
                    img = g.internal[7].b[2].t;
                    levels.mod("xdress", 20, 999);
                    levels.mod("anal", 5, 1);
                    levels.mod("oral", 5, 1);
                }

                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q8":
                if (g.internal[8].b[0].a) {
                    nav.bg("206_questions/standing.jpg");
                    chat(38, 206);
                    img = g.internal[8].b[0].t;
                }
                else if (g.internal[8].b[1].a) {
                    nav.bg("206_questions/butt.jpg");
                    chat(25, 206);
                    img = g.internal[8].b[1].t;
                    levels.mod("anal", 5, 1);
                    levels.mod("oral", 5, 1);
                }
                else {
                    nav.bg("206_questions/butt.jpg");
                    chat(26, 206);
                    img = g.internal[8].b[2].t;
                    levels.mod("anal", 5, 1);
                    levels.mod("oral", 5, 1);
                    missy.mod("mood", 5);
                }

                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "standing":
                nav.bg("206_questions/standing.jpg");
                break;
            case "q9":
                if (g.internal[9].b[0].a) {
                    gv.set("breastSelect", 2);
                    img = g.internal[9].b[0].t;
                    chat(45, 206);
                }
                else if (g.internal[9].b[1].a) {
                    gv.set("breastSelect", 3);
                    img = g.internal[9].b[1].t;
                    chat(46, 206);
                }
                else if (g.internal[9].b[2].a) {
                    gv.set("breastSelect", 4);
                    img = g.internal[9].b[2].t;
                    chat(46, 206);
                }
                else if (g.internal[9].b[3].a) {
                    gv.set("breastSelect", 5);
                    img = g.internal[9].b[3].t;
                    chat(47, 206);
                }
                else if (g.internal[9].b[4].a) {
                    gv.set("breastSelect", 6);
                    levels.mod("xdress", 10, 1);
                    img = g.internal[9].b[4].t;
                    chat(47, 206);
                }
                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q10":
                if (g.internal[10].b[0].a) {
                    gv.set("assSelect", 1);
                    img = g.internal[10].b[0].t;
                    chat(48, 206);
                }
                else if (g.internal[10].b[1].a) {
                    gv.set("assSelect", 2);
                    img = g.internal[10].b[1].t;
                    chat(49, 206);
                }
                else if (g.internal[10].b[2].a) {
                    gv.set("assSelect", 3);
                    img = g.internal[10].b[2].t;
                    chat(49, 206);
                }
                else if (g.internal[10].b[3].a) {
                    gv.set("assSelect", 4);
                    img = g.internal[10].b[3].t;
                    chat(50, 206);
                }
                else if (g.internal[10].b[4].a) {
                    gv.set("assSelect", 5);
                    levels.mod("xdress", 10, 1);
                    img = g.internal[10].b[4].t;
                    chat(50, 206);
                }
                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q11":
                nav.bg("206_questions/desk.jpg");
                if (g.internal[11].b[0].a) {
                    gv.set("transformation", "forced");
                    img = g.internal[11].b[0].t;
                    chat(43, 206);
                }
                else {
                    gv.set("transformation", "voluntary");
                    img = g.internal[11].b[1].t;
                    chat(44, 206);
                }
                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "q12":
                if (g.internal[12].b[0].a) {
                    nav.bg("206_questions/desk.jpg");
                    chat(27, 206);
                    levels.mod("sub", 15, 1);
                    img = g.internal[12].b[0].t;
                }
                else {
                    nav.bg("206_questions/angry.jpg");
                    chat(28, 206);
                    levels.mod("dom", 15, 1);
                    img = g.internal[12].b[1].t;
                }

                nav.killbutton("question");
                nav.button({
                    "type": "btn",
                    "name": "question",
                    "left": 300,
                    "top": 100,
                    "width": 800,
                    "height": 100,
                    "image": "206_questions/" + img
                }, 206);
                break;
            case "kill":
                nav.killbutton("question");
                break;
            case "money":
                g.pass.money -= 50;
                break;
            case "checkmoney":
                if (g.pass.money === 300)
                    chat(36, 206);
                else
                    chat(37, 206);
                break;
            case "end":
                gv.mod("money", g.pass.money);
                char.settime(17, 0);
                missy.set("activeCase", 3)
                nav.killall();
                nav.bg("206_questions/sideEmpty.jpg")
                break;
            case "realend":
                char.room(0);
                break;
            default:
                console.log("MISS: " + callback);
                break;
        }
    });
};

room206.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "So " + sc.n("me") + ", you want to be a Private Investigator? Do what kind of college degree do you have?",
            button: [
                { chatID: 1, text: "I don't have a degree, you see what happened...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Stop right there. A simple 'no' works. I hate when my employees feel the need to stammer through an excuse.",
            button: [
                { chatID: 2, text: "Sorry", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "Stop!<br />You're boring me. If you're going to waste my time you can at least be interesting.<br />" +
                "Let's look over your application..",
            button: [
                { chatID: -1, text: "Yes..", callback: "q1" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "You said you should bring a notepad with you. That is suprisingly correct. You might not " +
                "be as stupid as you look. ",
            button: [
                { chatID: 6, text: "Yes..", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "You would bring a gun? Who do you think you are? We do investigations, not an army of mercenaries. This " +
                "is why I hate hiring young men. You all think you're in some action movie. I'm going to have " +
                "a lot of retraining for you.",
            button: [
                { chatID: 6, text: "oh..", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "You said you would bring a camera... Not a bad choice. You should bring a notebook as well. " +
                "The most important thing is to keep track of what's happening around you. ",
            button: [
                { chatID: 6, text: "oh..", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Let's see how you answered the next question on what you would wear. ",
            button: [
                { chatID: -1, text: "oh..", callback: "q2" }
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "A bright dress is what you would wear. While not right, it's not wrong. I can see what kind of " +
                "detective you're going to be. ",
            button: [
                { chatID: -1, text: "Hmmmm", callback: "q3" }
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "You're not a clandestine agent. If you wear that you'll stand out. Really you'll wear what I " +
                "tell you to wear. ",
            button: [
                { chatID: -1, text: "Oh, ok", callback: "q3" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "You say you have a strong bladder. So you can hold your pee. Well see how good you can hold " +
                "it when you're on a case. It'd be a real shame if you peed your little panties. ",
            button: [
                { chatID: 12, text: "Oh, ok", callback: "q5" }
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "It appears you're a little pee pee girl. Can't control your bodily functions? Maybe I'll " +
                "have you wearing diapers when you work for me. Would you like that pee pee girl?",
            button: [
                { chatID: 11, text: "No, that's not what I...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "That is what you meant. Don't worry, I adore little pee pee girls. They're so much fun to train. ",
            button: [
                { chatID: 12, text: "Hrumph", callback: "q5" }
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "So you have an aversion to bondage? Don't worry, I'll help you with your fears. This cross here " +
                "has helped many young men overcome their fears. I'm sure you'll be well acquainted with this cross " +
                "in time. ",
            button: [
                { chatID: -1, text: "*GULP*", callback: "standing q6" }
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "You think you enjoy bondage? Well, we will see. You may have played bondage at home, but under " +
                "me you'll experience true bondage and find out what sub space really means. ",
            button: [
                { chatID: -1, text: "*GULP*", callback: "standing q6" }
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "If you were to get in a fight you say you would scream and run? I suppose you get points for self " +
                "preservation and knowing what a disgusting pile of weak pudding you are. Training you will be " +
                "a real treat. ",
            button: [
                { chatID: 20, text: "*GULP*", callback: "standing" }
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "If you were to get in a fight you say you're a fighter? I don't think you know what a real fight is. Don't worry " +
                "under my expert tutelage I'll make you into the man you think you are. ",
            button: [
                { chatID: 20, text: "yes", callback: "standing" }
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "HMUPH. If you were in a fight the first thing you would do is present your slutty ass " +
                " and hope you get fucked? ",
            button: [
                { chatID: 17, text: "Yes", callback: "" },
                { chatID: 18, text: "Oh, no. I didn't understand the question.", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "Usually I have to break my little sluts in before they accept their purpose, but it looks like " +
                "you're going to enjoy my training. ",
            button: [
                { chatID: 20, text: "Oh yes!", callback: "standing" },
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "I think you did understand and you're just scared. Don't worry I'm sure you'll use those " +
                "scared little holes of yours soon enough. ",
            button: [
                { chatID: 20, text: "Sorry.", callback: "standing" },
            ]
        },
        {
            chatID: 19,
            speaker: "cecilia",
            text: "Very good. You can go inside to go over your test with Missy.",
            button: [
                { chatID: 0, text: "Thanks!.", callback: "missy0" },
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "Now let's see how you're going to seduce someone to get information...",
            button: [
                { chatID: -1, text: "...", callback: "q7" },
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "You're going to seduce someone with your intilligence! You have to be smart to try that! " +
                "The only person you're secuding with your brain is a dog. ",
            button: [
                { chatID: -1, text: "...", callback: "q8" },
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "Charisma? What charisma? You have the excitement of a cardboard box. You're going to die a " +
                "virgin if you think you're using your charisma to seduce anyone. ",
            button: [
                { chatID: -1, text: "...", callback: "q8" },
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "Your body? Have you looked in a mirror? The only person you're seducing with that body " +
                "is a pink rolly-polly piggy. oink oink. ",
            button: [
                { chatID: -1, text: "...", callback: "q8" },
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "Next question.. It looks like you're into girls. It's too bad girls are into you. ",
            button: [
                { chatID: -1, text: "...", callback: "q9" },
            ]
        },
        
        {
            chatID: 25,
            speaker: "missy",
            text: "Next question.. It looks like you're into boys. Maybe if you put a paper bag over your " +
                "entire body so they wouldn't have to look at you, you could get laid. ",
            button: [
                { chatID: -1, text: "...", callback: "q9" },
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "You'll seduce whatever I need... Surprisingly correct. Now we just have to work on you so " +
                "you're not so ugly. ",
            button: [
                { chatID: -1, text: "...", callback: "q9" },
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "I think you'll make a good little piggy. Now on to what this job is. ",
            button: [
                { chatID: 29, text: "...", callback: "kill" },
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "So. You say you won't submit. I don't think you know how difficult it is for me to take on " +
                "a new employee. Even more so someone who is lazy, fat, stupid, and overall boring. I'm going to " +
                "to have a lot of fun breaking you in. When I'm done with you, you'll be a drooling little " +
                "slave who's only joy is licking the bottom of my dirty high heel soles. Now enough of what " +
                "you think you're going to do, and on to what you're actually going to do. ",
            button: [
                { chatID: 29, text: "...", callback: "desk kill" },
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "First thing first. We're not locker room buddies, as your superior you will address me " +
                "at all times as ma'am or mistress. ",
            button: [
                { chatID: 30, text: "ok", callback: "money" },
                { chatID: 31, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "That's a $50 deduction from your clothing allowance, now to continue. ",
            button: [
                { chatID: 31, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "Good Piggy. Here's what's going to happen. <br />" +
                "Your job is to do the shit work I don't want to do. Each day you come in I'll give you a task. " +
                "Sometimes it will be stalking a house for a client, sometimes it will be cleaning my toilet for 8 hours. " +
                "If you want to work here you will do exactly what I tell you to do when I tell you to do it.<br /><br />" +
                "Right now you're an idiot and a pervert, I'm going to work on you until you're less of an idiot. " +
                "At the end of the day you will come and thank me in a way I see fit for spending my valuable time mentoring you.<br /><br />" +
                "Is this something you can handle?",
            button: [
                { chatID: 33, text: "Yes ma'am", callback: "" },
                { chatID: 32, text: "Can I do cool stuff? Like chase bad guys?", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "missy",
            text: "Right now you're your not even fit to clean my toilet. You won't be chasing bad guys " +
                "till you less of an embarrassment to me. You will also address me as ma'ma. That's a $50 " +
                "deduction from your clothing allowance. ",
            button: [
                { chatID: 33, text: "Yes ma'am", callback: "money" }
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "My employees don't dress like slobs. Since you may have to do some undercover work you " +
                "will wear what I tell you to wear when I tell you to wear it. " +
                "You will go purchase black dress pants, suit top, black socks, and black dress shoes. " +
                "If you aren't wearing the full suit don't bother showing up. ",
            button: [
                { chatID: 34, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "Good. " +
                "The work day start between 8 AM and 10 AM Monday - Friday. If you're late don't bother coming in. " +
                "Also shower and get in shape. Fat smelly guys disgust me.<br /> Oink for me to let me know you understand. ",
            button: [
                { chatID: 35, text: "Oink", callback: "money" },
                { chatID: -1, text: "Oink ma'am", callback: "checkmoney" }
            ]
        },
        {
            chatID: 35,
            speaker: "missy",
            text: "You would think simple instructions would be something you could handle. That's $50 off your " +
                "clothing allowance. Now oink, but properly. ",
            button: [
                { chatID: -1, text: "Oink ma'am", callback: "checkmoney" }
            ]
        },
        {
            chatID: 36,
            speaker: "missy",
            text: "I can be very generous. Since you have been able to follow my simple instructions I will give " +
                "you $300 so that you may purchase the clothing required for your job. Now don't dissapoint me " +
                "by spending it on something frivolous. Go buy the clothing straight away. Now get out before I " +
                "change my mind about hiring you. ",
            button: [
                { chatID: 41, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "missy",
            text: "I was going to give you $300, but since you can't follow simple instruction you will only " +
                "receive $" + g.pass.money + "  " +
                "so that you may purchase the clothing required for your job. Now don't dissapoint me " +
                "by spending it on something frivolous. Go buy the clothing straight away. Now get out before I " +
                "change my mind about hiring you.",
            button: [
                { chatID: 41, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "Next question.. So you want to fuck girls? You want to put you big throbbing erection into " +
                "some wet sopping pussy? Then pound away till you orgasm your snail trail into her. Leaving her sullied and " +
                "unfulfilled? Well, it's too bad girls aren't into you. ",
            button: [
                { chatID: -1, text: "...", callback: "q9" },
            ]
        },
        {
            chatID: 39,
            speaker: "missy",
            text: "So, you're the center of the party. Just wait until you see what kind of party you're going " +
                "to be attending. We'll see if you still want to be in the center. ",
            button: [
                { chatID: -1, text: "Gulp", callback: "q4" },
            ]
        },
        {
            chatID: 40,
            speaker: "missy",
            text: "So you have trouble initiating converstion? That's fine, there are other ways to get what you " +
                "want, even if you mouth isn't used for talking. ",
            button: [
                { chatID: -1, text: "Gulp", callback: "q4" },
            ]
        },
        {
            chatID: 41,
            speaker: "missy",
            text: "You'll be compinsated for your efforts each Friday. If you miss work on Friday you " +
                "also miss your paycheck.  ",
            button: [
                { chatID: 42, text: "Gulp", callback: "end" },
            ]
        },
        {
            chatID: 42,
            speaker: "thinking",
            text: "That was way more intense than I thought it would be. I'm glad I don't have to work construction " +
                "anymore, but what the hell am I getting into? At least they're both hot, I guess it could be worse. ",
            button: [
                { chatID: -1, text: "...", callback: "realend" },
            ]
        },
        {
            chatID: 43,
            speaker: "missy",
            text: "So you don't like to be in control. Noted. I'll make sure I control your tender little body.  ",
            button: [
                { chatID: -1, text: "*GULP*", callback: "q12" },
            ]
        },
        {
            chatID: 44,
            speaker: "missy",
            text: "So you like choices. Very well, just be careful on what choices you do have to make.  ",
            button: [
                { chatID: -1, text: "*GULP*", callback: "q12" },
            ]
        },
        {
            chatID: 45,
            speaker: "missy",
            text: "Hmmm. A tiny little chest built for speed. Not ideal. But I'm only interested in your holes. ",
            button: [
                { chatID: -1, text: "...", callback: "q10" },
            ]
        },
        {
            chatID: 46,
            speaker: "missy",
            text: "More is always better, but there's nothing wrong with an average set of tits. Like I say, a handful " +
                "is the perfect size. ",
            button: [
                { chatID: -1, text: "...", callback: "q10" },
            ]
        },
        {
            chatID: 47,
            speaker: "missy",
            text: "I can tell you will make a great sex doll. Built for pleasure, and little else. You know there's a misconception " +
                "that bigger breasts produce more milk. ",
            button: [
                { chatID: -1, text: "...", callback: "q10" },
            ]
        },
        {
            chatID: 48,
            speaker: "missy",
            text: "A nice pert little butt is always cute. Easier to get things deep in that tight little hole. ",
            button: [
                { chatID: -1, text: "...", callback: "q11" },
            ]
        },
        {
            chatID: 49,
            speaker: "missy",
            text: "A fine butt. I have to work out every day to get this butt. ",
            button: [
                { chatID: -1, text: "...", callback: "q11" },
            ]
        },
        {
            chatID: 50,
            speaker: "missy",
            text: "Real men do love a plump juicy ass. Do you know why? ",
            button: [
                { chatID: 51, text: "uhhh", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "missy",
            text: "It's a biological trait to associate wide hips with birthing. When men see a big ass they want to " +
                "breed it. Fill it with their cum. I'm sure you do love a gooey cum filled center. ",
            button: [
                { chatID: -1, text: "Mmmm", callback: "q11" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};











