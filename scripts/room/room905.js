//Room name
var room905 = {};
room905.main = function () {
    if (cl.isLewd() && !g.isNight()) {
        nav.button({
            "type": "img",
            "name": "cop",
            "left": 870,
            "top": 39,
            "width": 784,
            "height": 1041,
            "image": "452_parkWomansRoom/cop.png"
        }, 905);
        chat(0, 905);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "lib",
                "left": 1049,
                "top": 282,
                "width": 173,
                "height": 368,
                "image": "905_library/girl.png"
            }
        ];
        var navList = [900, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 905);
        });
        nav.buildnav(navList);
    }
};

room905.btnclick = function (name) {
    switch (name) {
        case "lib":
            if (inv.has("studentid")) {
                chat(2, 905);
            }
            else {
                chat(1, 905);
            }
            break;
        default:
            break;
    }
};

room905.chatcatch = function (callback) {
    switch (callback) {
        case "e2":
        case "e3":
        case "e5":
        case "e6":
        case "e7":
        case "e8":
        case "e9":
        case "e10":
        case "e11":
        case "e12":
        case "e13":
        case "e14":
        case "e15":
            nav.bg("905_library/" + callback + ".jpg");
            break;
        case "e4":
            cl.nude();
            nav.bg("905_library/" + callback + ".jpg");
            break;
        case "e16":
            sc.completeMissionTask("eva", "sissy", 5);
            char.addtime(72);
            char.room(0);
            break;
        case "jail":
            g.pass = "jail";
            char.room(425);
            break;
        case "showid":
            if (cl.appearance() > 1) {
                nav.killall();
                nav.bg("905_library/inside.jpg");
                if (sc.taskGetStep("eva", "sissy") === 5)
                    if (cl.c.chastity !== null)
                        chat(5, 905);
                    else
                        chat(6, 905);
            }
            else
                chat(3, 905);
            break;
        default:
            break;
    }
};

room905.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cop2",
            text: "Ok slut. You can't be running around the campus naked. Time for jail. ",
            button: [
                { chatID: -1, text: "...", callback: "jail" }
            ]
        },
        {
            chatID: 1,
            speaker: "librarian",
            text: "Only students can enter the school library. You need to have a student ID. ",
            button: [
                { chatID: -1, text: "Drat!", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "librarian",
            text: "Only students can enter the school library. You need to have a student ID. ",
            button: [
                { chatID: -1, text: "Yes I do. [Show her your school ID]", callback: "showid" },
                { chatID: -1, text: "ok. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "librarian",
            text: "This is a girl's ID. You're clearly a guy. I don't think so. ",
            button: [
                { chatID: -1, text: "Drat! ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Dammit. I forgot to wear a dog collar. I should pick one up at popular " +
                "girl. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Oh. I'm wearing my chastity device. She told me not to wear it. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I should give " + sc.n("eva") + " a call. Let her know I'm here. ",
            button: [
                { chatID: 23, text: "[Wait for her]", callback: "e2" }
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "So because you're a big ol' pervert Deb here thought we should have some fun with you. ",
            button: [
                { chatID: 8, text: "Fun?", callback: "e3" }
            ]
        },
        {
            chatID: 8,
            speaker: "eva",
            text: "Get him girls!",
            button: [
                { chatID: 9, text: "AAAAAAkkkkk WHAT ARE YOU DOING?", callback: "e4" }
            ]
        },
        {
            chatID: 9,
            speaker: "eva",
            text: "Stop covering up doggy. I know your still a big pervert. ",
            button: [
                { chatID: 10, text: "Why?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "eva",
            text: "Becasue I told my friends all about you and they wanted to see it. Now get on all fours doggy and beg for " +
                "your clothes. ",
            button: [
                { chatID: 11, text: "Ok", callback: "e6" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Can I please have my clothes back?",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "eva",
            text: "That's not how doggies beg. I think you need a tail so you know how to be a proppery doggy. ",
            button: [
                { chatID: 13, text: "A tail?", callback: "e7" }
            ]
        },
        {
            chatID: 13,
            speaker: "eva",
            text: "Hahahaha. If you want your clothes back show us how a doggy pees, and bark when you do it. ",
            button: [
                { chatID: 14, text: "...", callback: "e8" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Arf",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "eva",
            text: "See I told you he was a big pervert. I bet you want your clothes back now? Bark for yes!",
            button: [
                { chatID: 16, text: "Arf", callback: "e9" }
            ]
        },
        {
            chatID: 16,
            speaker: "eva",
            text: "See this ball doggy? If you fetch it and bring it back I'll give you your clothes back. ",
            button: [
                { chatID: 17, text: "Arf", callback: "e10" }
            ]
        },
        {
            chatID: 17,
            speaker: "eva",
            text: "Now fetch!",
            button: [
                { chatID: 18, text: "Arf", callback: "e11" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "Grrrr",
            button: [
                { chatID: 19, text: "...", callback: "e12" }
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "Oh no! Are those the librarian's shoes?",
            button: [
                { chatID: 20, text: "...", callback: "e13" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Fuck! They ran away!",
            button: [
                { chatID: 21, text: "...", callback: "e14" }
            ]
        },
        {
            chatID: 21,
            speaker: "librarian",
            text: "WHAT ARE YOU DOING IN MY LIBRARY YOU FILTHY PIG!!!!",
            button: [
                { chatID: 22, text: "...", callback: "e15" }
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "fuck fuck fuck fuck....",
            button: [
                { chatID: -1, text: "...", callback: "e16" }
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "I've told my friends all about your perverted ways. Even how you like to play doggy. ",
            button: [
                { chatID: 7, text: "Huh?", callback: "e2" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};