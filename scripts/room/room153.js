//Room name
var room153 = {};
room153.main = function () {
    if (!daily.get("jonesCleanRoom2")) {
        if (gv.get("jonesroom") === g.roomID) {
            if (gv.get("jonestotal") > 3) {
                nav.bg("153_bathroom/d2.jpg");
                if (gender.canUseCock()) {
                    chat(10, 153);
                }
                else {
                    chat(11, 153);
                }
            }
            else {
                nav.bg("153_bathroom/d0.jpg");
                if (sc.getMission("bimbo", "fuck").startedOrComplete)
                    chat(0, 153);
                else
                    chat(1, 153);
            }
        }
        else {
            sc.select("clean", "152_sittingRoom/clean.png", 0);
        }
    }
    nav.buildnav([150, 152, 154]);
};

room153.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            char.addtime(60);
            nav.bg("153_bathroom/clean.jpg");
            daily.set("jonesCleanRoom2");
            nav.next("finishClean");
            break;
        case "finishClean":
            char.room(153);
            break;
        default:
            break;
    }
};

room153.chatcatch = function (callback) {
    switch (callback) {
        case "d1":
        case "d4":
            nav.bg("153_bathroom/" + callback + ".jpg");
            break;
        case "d2":
            if (gender.canUseCock()) {
                nav.bg("153_bathroom/d3.jpg");
                chat(7, 153);
            }
            else {
                nav.bg("153_bathroom/d2.jpg");
                chat(3, 153);
            }
            break;
        case "clean":
            invoker.invokeCurrent("btnclick", "clean");
            break;
        default:
            break;
    }
};

room153.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bimbo",
            text: "It's the pizza " + gender.pronoun("boy") + "! We're so bored! Do you want to have " +
                "sex with us both? ",
            button: [
                { chatID: -1, text: "I sure do! ", callback: "d2" },
                { chatID: 2, text: "Sorry, no. I have to clean the toilet. ", callback: "d1" },
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "Hi. We're so bored! Do you want to have " +
                "sex with us both? ",
            button: [
                { chatID: -1, text: "I sure do! ", callback: "d2" },
                { chatID: 2, text: "Sorry, no. I have to clean the toilet. ", callback: "d1" },
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "*sigh* So lame. I guess we'll just have to find ourselves some real men.",
            button: [
                { chatID: -1, text: "...", callback: "clean" },
            ]
        },
        {
            chatID: 3,
            speaker: "!girl",
            text: "Is that your penis!!! My lipstick is bigger than that! Oh no. Does it get bigger? ",
            button: [
                { chatID: 4, text: "Well, no. That's as big as it gets. ", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "That's the tiniest boner I've ever seen! It's smaller than a defeated pubic hair " +
                "that gave up halfway through growing. Micro-penis!! Micro-penis!!  ",
            button: [
                { chatID: 5, text: "...", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "!girl",
            text: "Micro-penis! Micro-penis! Just clean up in here. We'll find a real man that has a " +
                "big, heavy dick swinging between his legs. Not that shriveled pinky-sized disappointment!",
            button: [
                { chatID: -1, text: "*sigh*", callback: "clean" },
            ]
        },
        {
            chatID: 6,
            speaker: "!girl",
            text: "Micro-penis! Micro-penis! Just clean up in here. We'll find a real man that has a " +
                "big, heavy dick swinging between his legs. Not that shriveled pinky-sized disappointment!",
            button: [
                { chatID: -1, text: "*sigh*", callback: "clean" },
            ]
        },
        {
            chatID: 7,
            speaker: "bimbo",
            text: "You can fuck my friend first. That way there's no cum left when you fuck me. My doctor " +
                "said not to get cum in my pussy anymore. ",
            button: [
                { chatID: 8, text: "Fuck yes!", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "!girl",
            text: "Oh yes! So excited! I like surprises! You can put it in any hole you want! Don't tell me " +
                "just shove it inside me!",
            button: [
                { chatID: 9, text: "I'm going to totally surprise you alright! ", callback: "d4" },
            ]
        },
        {
            chatID: 9,
            speaker: "bitch",
            text: "What the fuck are you doing! You're here to clean, not spread your semen all over. " +
                "Now put your penis away and scrub that toilet!!",
            button: [
                { chatID: -1, text: "*gulp* Sorry. Yes ma'am.", callback: "clean" },
            ]
        },
        {
            chatID: 10,
            speaker: "bimbo",
            text: "It's the loser that didn't fuck us because " + gender.pronoun("her") + " mommy " +
                "wouldn't let " + gender.pronoun("her") + "! Go clean the toilet loser! ",
            button: [
                { chatID: 2, text: "*groan*", callback: "d2" },
            ]
        },
        {
            chatID: 11,
            speaker: "bimbo",
            text: "Hahaha! It's the tiny dick loser! Come to clean the toilets and not have sex with two " +
                "hot chicks! ",
            button: [
                { chatID: 2, text: "*groan*", callback: "d1" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(153, room153);
