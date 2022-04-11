//College

var room900 = {};

room900.main = function () {
    if (cl.isLewd()) {
        nav.button({
            "type": "img",
            "name": "cop",
            "left": 870,
            "top": 39,
            "width": 784,
            "height": 1041,
            "image": "452_parkWomansRoom/cop.png"
        }, 452);
        chat(23, 900);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "building",
                "left": 525,
                "top": 403,
                "width": 864,
                "height": 582,
                "image": "900_college/college.png",
                "night": "900_college/collegeNight.png"
            }
        ];

        var navList = [0];

        if (sc.getstep("me") === 1)
            navList.unshift(902);

        $.each(btnList, function (i, v) {
            nav.button(v, 900);
        });

        nav.buildnav(navList);
    }
};

room900.btnclick = function (name) {
    switch (name) {
        case "building":
            nav.killall();
            nav.bg("900_college/frontDesk.jpg");
            nav.button({
                "type": "btn",
                "name": "lib",
                "left": 978,
                "top": 326,
                "width": 185,
                "height": 324,
                "image": "900_college/lib.png"
            }, 900);
            nav.buildnav([0]);
            break;
        case "lib":
            if (inv.has("studentid")) {
                chat(2, 900);
            }
            else {
                chat(1, 900);
            }
            break;
        default:
            break;
    }
};

room900.chatcatch = function(callback){
    switch (callback) {
        case "showid":
            if (cl.appearance() > 1) {
                nav.killall();
                nav.bg("900_college/inside.jpg");
                if (sc.getstep("eva") === 203 && cl.c.necklace === "d")
                    chat(4, 900);
                else {
                    nav.buildnav([0]);
                }
            }
            else
                chat(3, 900);
            break;
        case "e2":
            nav.bg("900_college/e2.jpg");
            break;
        case "e3":
            nav.bg("900_college/e3.jpg");
            break;
        case "e4":
            cl.nude();
            nav.bg("900_college/e4.jpg");
            break;
        case "e5":
            nav.bg("900_college/e5.jpg");
            break;
        case "e6":
            nav.bg("900_college/e6.jpg");
            break;
        case "e7":
            nav.bg("900_college/e7.jpg");
            break;
        case "e8":
            nav.bg("900_college/e8.jpg");
            break;
        case "e9":
            nav.bg("900_college/e9.jpg");
            break;
        case "e10":
            nav.bg("900_college/e10.jpg");
            break;
        case "e11":
            nav.bg("900_college/e11.jpg");
            break;
        case "e12":
            nav.bg("900_college/e12.jpg");
            break;
        case "e13":
            nav.bg("900_college/e13.jpg");
            break;
        case "e14":
            nav.bg("900_college/e14.jpg");
            break;
        case "e15":
            nav.bg("900_college/e15.jpg");
            break;
        case "e16":
            sc.setstep("eva", 204);
            g.mod("phum", 1);
            char.room(0);
            break;
        case "jail":
            g.pass = "jail";
            char.room(425);
            break;
        default:
            break;
    }
}

room900.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I don't have time to go to the Student Center. I need to finish my math final",
            button: []
        },
        {
            chatID: 1,
            speaker: "librarian",
            text: "Only students can enter the school library. You need to have a student ID. ",
            button: [
                { chatID: -1, text: "Drat!", callback: "resest" }
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
            text: "You fucking liar. This isn't you. Get out of here! ",
            button: [
                { chatID: -1, text: "ok. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I need to call " + sc.n("eva") + ".",
            button: [
                { chatID: 5, text: "Send her a text", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Oh nice, she's on her way.",
            button: [
                { chatID: 6, text: "Wait for her...", callback: "e2" }
            ]
        },
        {
            chatID: 6,
            speaker: "eva",
            text: "I've told my friends all about your perverted ways. Even how you like to play doggy. ",
            button: [
                { chatID: 7, text: "Huh?", callback: "e2" }
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "So becuase you're a big ol' pervert Deb here thought we should have some fun with you. ",
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
            speaker: "cop2",
            text: "Ok slut. You can't be running around the campus naked. Time for jail. ",
            button: [
                { chatID: -1, text: "...", callback: "jail" }
            ]
        }
    ];

    return cArray[chatID];
}