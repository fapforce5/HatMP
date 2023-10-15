//Room name
var room204 = {};

room204.main = function () {
    $('#room_footer').hide();
    chat(4, 204);
};

room204.countdown = function (timer) {
    if (g.roomTimeout !== null) {
        timer--;
        if (timer > 0) {
            console.log(timer);
            $('.room-img[data-name=countdown]').text("Seconds Left :" + timer);
            if (g.internal.horny > 0 && !g.internal.s) {
                
                if (Math.floor(Math.random() * g.internal.horny) === 0) {
                    g.internal.s = true;
                    nav.button({
                        "type": "img",
                        "name": "dirtythought",
                        "left": 600,
                        "top": 40,
                        "width": 1000,
                        "height": 1000,
                        "image": "204_cardgame/h" + Math.floor(Math.random() * 4) + ".png"
                    }, 204);
                    chat(15, 204);
                }
            }
            g.roomTimeout = setTimeout(function () { room204.countdown(timer) }, 1000);
        }
        else {
            room204.chatcatch("endgame");
        }
    }
};

room204.btnclick = function (name) {
    name = name.toString();
    if (name.indexOf("intro") === -1) {
        $('.room-204fail').removeClass('room-204fail');
        name = name.toString();
        if (g.pass[0] === name) {
            g.pass.shift();
            nav.killbutton(name);
        }
        else {
            g.internal.numberWrong++;
            $('.room-btn[data-name=' + name + ']').addClass("room-204fail");
        }
        if (g.pass.length === 0) {
            room204.chatcatch("endgame");
            ////gv.mod("money", 60);
            ////g.roomTimeout = null;
            ////if (sc.getstep("missy") === 5)
            ////    chat(15, 204);
            ////else
            ////    chat(13, 204);

            
        }
    }
    else {
        switch (g.internal) {
            case "step1":
                if (name === "intro2") {
                    nav.killbutton(name);
                    chat(8, 204);
                }
                else if (name === "intro1")
                    chat(6, 204);
                else
                    chat(7, 204);
                break;
            case "step2":
                if (name === "intro1") {
                    chat(10, 204);
                    nav.killbutton(name);
                }
                else
                    chat(9, 204);
                break;
            default:
                break;
        }
    }
};

room204.startGame = function () {
    var thisArousal = gv.get("arousal");
    var secondsOffsetForHorny = thisArousal > 50 ? Math.floor((115 - thisArousal) * .6) : 0;
    g.internal = { s: false, horny: secondsOffsetForHorny, numberWrong: 0, pay: 0 };
    $('#room_footer').hide();
    //88
    var checkArray = new Array();
    var i, j, k, numEntries, kString;
    numEntries = 88;
    g.pass = new Array();
    for (i = 0; i < numEntries; i++)
        checkArray.push(i);
    var btnWidth = 300 * g.ratio;
    var btnHeight = 50 * g.ratio;
    var top = 0;
    var left = 810 * g.ratio;
    var clock = 60;
    switch (gv.get("difficulty")) {
        case 0:
            clock = 180;
            break;
        case 1:
            clock = 60;
            break;
        case 2:
            clock = 20;
            break;
        default:
            clock = 60;
            break;
    }
    $('#room-buttons').append('<div class="room-img" data-name="countdown" data-room="204" ' +
        ' style="text-align:center; background:#000; color:#fff; font-size:1.5rem; width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" >Seconds Left :' + clock + '</div>');
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            k = Math.floor(Math.random() * numEntries);
            while (checkArray[k] === null) {
                k++;
                if (k >= numEntries)
                    k = 0;
            }

            if (k < 10)
                kString = "0" + k.toString();
            else
                kString = k.toString();
            nav.button({
                "type": "btn",
                "name": kString,
                "left": (j * 340) + 500,
                "top": (i * 365) + 50,
                "width": 280,
                "height": 300,
                "image": "204_cardgame/" + kString + ".jpg"
            }, 204);

            g.pass.push(kString);
            checkArray[k] = null;
        }
    }
    g.roomTimeout = setTimeout(function () { room204.countdown(clock); }, 1000);
    g.pass.sort();
};

room204.chatcatch = function (callback) {
    switch (callback) {
        case "buildIntro":
            var btnWidth = 300 * g.ratio;
            var btnHeight = 50 * g.ratio;
            var top = 0;
            var left = 810 * g.ratio;
            var btnList = [
                {
                    "type": "btn",
                    "name": "intro1",
                    "left": 700,
                    "top": 400,
                    "width": 280,
                    "height": 300,
                    "image": "204_cardgame/intro1.jpg"
                },
                {
                    "type": "btn",
                    "name": "intro2",
                    "left": 1040,
                    "top": 400,
                    "width": 280,
                    "height": 300,
                    "image": "204_cardgame/intro2.jpg"
                },
                {
                    "type": "btn",
                    "name": "intro3",
                    "left": 1380,
                    "top": 400,
                    "width": 280,
                    "height": 300,
                    "image": "204_cardgame/intro3.jpg"
                }];
            $.each(btnList, function (i, v) {
                nav.button(v, 204);
            });
            $('#room-buttons').append('<div class="room-img" data-name="countdown" data-room="204" ' +
                'style="text-align:center; background:#000; color:#fff; font-size:1.5rem; width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" >Seconds Left :30</div>');
            break;
        case "step1":
            g.internal = "step1";
            break;
        case "step2":
            g.internal = "step2";
            break;
        case "step3":
            $('.room-btn[data-name=intro3]').addClass("room-204fail");
            break;
        case "clear":
            nav.killall();
            break;
        case "file":
            room204.startGame();
            break;
        case "endgame":
            g.roomTimeout = null;

            var cardsComplete = 12 - g.pass.length;
            var piPoints = (cardsComplete * 2) - g.internal.numberWrong;
            var numberWrong = g.internal.numberWrong;
            var pay = Math.ceil(cardsComplete * 3.33);
            g.internal.pay = pay;

            if (piPoints > 0) {
                levels.mod("pi", piPoints, 4);
                levels.mod("int", Math.ceil(piPoints / 2), 4);
            }

            if (cardsComplete === 12 && numberWrong === 0) {
                missy.mod("mood", 15);
                chat(13, 204);

            }
            else if (cardsComplete === 12) {
                missy.mod("mood", numberWrong * -1);
                chat(998, 204);
            }
            else {
                missy.mod("mood", (numberWrong * -1) + ((12 - cardsComplete) * -2));
                chat(999, 204);
            }

            g.internal = { cardsLeft: g.pass.length, pay: pay, numberWrong: numberWrong };
            break;
        case "mhate":
            missy.mod("mood", -2);
            break;
        case "killDirtyThought":
            nav.killbutton("dirtythought");
            g.internal.s = false;
            break;
        case "lunch":
            missy.didJob(1, null, g.internal.pay);
            char.room(224);
            break;
        default:
            break;
    }
};

room204.chat = function (chatID) {
    if (chatID === 998) {
        return {
            chatID: 998,
            speaker: "missy",
            text: "You misfiled " + g.internal.numberWrong + " files, but you were able to complete the task. " +
                " You need to work on your attention span. Go to lunch ",
            button: [
                { chatID: -1, text: "...", callback: "lunch" }
            ]
        }
    }
    else if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: "You misfiled " + g.internal.numberWrong + " files, and you only filed " +
                (12 - g.pass.length) + " files.  You will only receive $" + g.internal.pay +
                ". You need to try harder if you're going to succeed in life. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "lunch" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Your first real task working here is filing. " + sc.n('cecilia') + " is incredibly " +
                    "loyal, but she has the reading comprehension of a child." +
                    "I have thousands of files, some I've taken, some I've acquired from the client, " +
                    "and some... through other means.",
                button: [
                    { chatID: 1, text: "...", callback: "buildIntro" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "The three images in front of you are from previous cases. Ralph Zurich, the first " +
                    "image, was a cheating husband case. I tailed " +
                    "that pig for 3 days before I caught him. He took his secretary out to eat, then " +
                    "brought her to a cheap motel. The second picture was a " +
                    "corporate case where Allen claimed a slip made it so he was unable to walk. I " +
                    "caught them hiking and boating on the first weekend " +
                    "I was tailing him. It was almost too easy. ",
                button: [
                    { chatID: 2, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "The last picture, Samual, is one of my favorite cases. His wife thought he " +
                    "was back on drugs because he would come home late smelling " +
                    "like piss all the time. Since he was so fat she never dreamed he would cheat on her. " +
                    "His wife let me on their computer where I found hundreds of videos with him getting " +
                    "pissed on by hookers. " +
                    "The best part was when I confronted him with the videos he claimed he never " +
                    "cheated since he would only jack off while getting pissed on. " +
                    "I gave these screen captures to her lawyer with the videos. Their divorce was " +
                    "quick since he didn't want anyone to know of his secret sick fetish.",
                button: [
                    { chatID: 3, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Now I need you to file an organize all these images, but I need you to be " +
                    "orderly and efficient. Are you ready to learn how to do this?",
                button: [
                    { chatID: 5, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "Are you ready to do your filing?",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "file" },
                    { chatID: 5, text: "No ma'am, can you explain it to me again.", callback: "buildIntro" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "So I need these arranged alphabetically. Since 'A' is the first letter and 'Allen " +
                    "Waters' starts with an 'A', he'll be " +
                    "the first one filed. To file it click the picture with 'Allen Waters'. ",
                button: [
                    { chatID: -1, text: "Begin Lesson", callback: "step1" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "Idiot, that's Ralph Zurich. Click 'Allen Waters' picture since his name " +
                    "is alphabetically before Ralph. ",
                button: [
                    { chatID: -1, text: "Try again.", callback: "mhate" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "No dummy, that's Samual Shepard the piss bag. You need to click on " +
                    "Allen since his name is alphabetically before Samual. ",
                button: [
                    { chatID: -1, text: "Try again.", callback: "mhate" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "Good job. Now there's only 2 left. Pick which one comes next alphabetically. ",
                button: [
                    { chatID: -1, text: "Continue Lesson", callback: "step2" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "Not only do you not know your alphabet, but given a 50% chance of picking " +
                    "the right one you picked the wrong one! " +
                    "I can't tell if you're as big of an airhead as " + sc.n('cecilia') +
                    ", or you just don't pay attention. The alphabet goes o, p, q, r, s, t... " +
                    "so Ralph comes before Samual the piss sucker. Select the picture with Ralph. ",
                button: [
                    { chatID: -1, text: "Try Again", callback: "mhate" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "OK good job. If you pick the wrong card it will appear with a red " +
                    "border and be darker. ",
                button: [
                    { chatID: 11, text: "[see incorrect selection]", callback: "step3" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "OK good job. If you pick the wrong card it will appear with a red " +
                    "border and be darker. ",
                button: [
                    { chatID: 12, text: "[see incorrect selection]", callback: "step3" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "Samual now has a red border and is darker, that means you picked the wrong one. " +
                    "Finally since I can't have you filing " +
                    "all day you'll be timed. in the top center there's a black box that states: " +
                    "'Seconds left: 30', that's how much " +
                    "time you have to complete this task. I don't believe in paying by time, " +
                    "but I pay in your ability to do your job. " +
                    "so the more you file the more you get paid. ",
                button: [
                    { chatID: 4, text: "got it ma'am", callback: "clear" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: "Not only did you file everything, you didn't misfile a single record! For doing such a perfect " +
                    "job I'm going to double your pay today! ",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "lunch" }
                ]
            },
            {
                chatID: 14,
                speaker: "missy",
                text: "Are you ready to do your filing?",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "file" }
                ]
            },
            {
                chatID: 15,
                speaker: "thinking",
                text: "Fuck, I'm so horny! I should have just jacked off before starting! ",
                button: [
                    { chatID: -1, text: "...", callback: "killDirtyThought" }
                ]
            }
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};