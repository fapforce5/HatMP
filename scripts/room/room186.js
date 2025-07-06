//Room name
var room186 = {};
room186.main = function () {
    let dowList = [0, 5, 6];
    if (dowList.includes(g.dt.getDay())) {
        if (g.hourBetween(7, 17))
            chat(4, 186);
        else if (g.gethourdecimal() > 18) {
            nav.bg("170_stage/stage.jpg");
            chat(5, 186);
        }
    }
    else if (sc.getMissionTask("black", "talent", 0).notStarted) {
        sc.startMission("black", "talent");
        sc.completeMissionTask("black", "talent", 0);
        nav.bg("186_talenshow/black.webp");
        chat(0, 186);
    }

    nav.buildnav([213, 214, 215, 171]);

};

room186.btnclick = function (name) {
    switch (name) {
        case "show5":
            nav.kill();
            levels.oral(3);
            nav.bg("186_talenshow/show5.webp");
            chat(12, 186);
            break;
        case "show7":
            levels.anal(3);
            chat(13, 186);
            break;
        default:
            break;
    }
};

room186.chatcatch = function (callback) {
    switch (callback) {
        case "show1":
        case "show2":
            nav.bg("186_talenshow/" + callback + ".webp");
            break;
        case "show7":
            nav.kill();
            nav.bg("186_talenshow/" + callback + ".webp");
            break;
        case "show0":
            nav.kill();
            nav.bg("186_talenshow/show0.webp");
            if (sc.getMissionTask("black", "talent", 0).notStarted) {
                sc.startMission("black", "talent");
                sc.completeMissionTask("black", "talent", 0);
                chat(6, 186);
            }
            else {
                chat(8, 186);
            }
            break;
        case "show4":
            nav.bg("186_talenshow/stage_closeup.webp");
            nav.button({
                "type": "img",
                "name": "bed",
                "left": 569,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "186_talenshow/show4.gif"
            }, 186);
            nav.next("show5");
            break;
        case "show6":
            nav.bg("186_talenshow/show6.webp");
            nav.kill();
            nav.button({
                "type": "img",
                "name": "bed",
                "left": 250,
                "top": 580,
                "width": 1600,
                "height": 500,
                "image": "186_talenshow/show6.gif"
            }, 186);
            nav.next("show7");
            break;
        case "reset":
            char.room(186);
            break;
        case "passtime":
            char.settime(18, 15);
            char.room(186);
            break;
        case "showEnd":
            levels.mod("fame", 100);
            char.settime(23, 50);
            char.addtime(17);
            char.room(213);
            break;
        default:
            break;
    }
};

room186.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "black",
            text: "Hey! It's so good to see you outside of class. You know " + sc.n("martha") +
                "keeps me so busy disciplining " + sc.n("!sanaria") + ". She is a wild one, " +
                "but her screams are fulfilling. So what have you been up to? ",
            button: [
                { chatID: 1, text: "Oh, you know, mostly butt stuff. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "black",
            text: "That's my girl! You know, speaking of butt stuff, " + sc.n("cecilia") +
                "and I do the talent show on the weekends. We would love to have a third for " +
                "our act and you would be perfect. ",
            button: [
                { chatID: 2, text: "Oh? What talent? ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "noop",
            button: [
                { chatID: -1, text: "Oh? What talent? ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "black",
            text: "You know, mostly butt stuff. Don't worry about it, you'll be amazing. If you " +
                "want, just be here when there's a talent show. I'd love to have you. ",
            button: [
                { chatID: -1, text: "oh. ok cool. ", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I'm pretty early, should I just hang out 'til " + char.friendlyTime(18) +
                " for the talent show? ",
            button: [
                { chatID: -1, text: "No", callback: "" },
                { chatID: -1, text: "Hang out", callback: "passtime" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Should I watch the show or go to the backroom and see what's up?",
            button: [
                { chatID: -1, text: "Go back stage", callback: "show0" },
                { chatID: -1, text: "Watch the talent show", callback: "" }
                
            ]
        },
        {
            chatID: 6,
            speaker: "black",
            text: "What are you doing back here?",
            button: [
                { chatID: 7, text: "Just wandering around", callback: "" },

            ]
        },
        {
            chatID: 7,
            speaker: "black",
            text: "Perfect! Follow me to the stage, we have a show to put on. ",
            button: [
                { chatID: 9, text: "Oh. ok", callback: "show1" },

            ]
        },
        {
            chatID: 8,
            speaker: "black",
            text: "Fantastic! I'm so glad you came! Let's go get to the stage and put on a show.",
            button: [
                { chatID: 9, text: "Follow her", callback: "show1" }
            ]
        },
        {
            chatID: 9,
            speaker: "black",
            text: "Ladies, gentlemen, and gentlefolk. I have brought a little suprise for you " +
                "all. Tony pull the rope! ",
            button: [
                { chatID: 10, text: "...", callback: "show2" }
            ]
        },
        {
            chatID: 10,
            speaker: "black",
            text: "Before you are two of the most cock crazied sissies in this entire town... ",
            button: [
                { chatID: 11, text: "...", callback: "show3" }
            ]
        },
        {
            chatID: 11,
            speaker: "black",
            text: "...that will greedily take a double ended dildo in their tight little holes! " +
                "They are so excited to show you all what sluts they are, their little clitties " +
                "are leaking all over the stage! Let's untie these girls and have them choke on " +
                "the dildo! ",
            button: [
                { chatID: -1, text: "...", callback: "show4" }
            ]
        },
        {
            chatID: 12,
            speaker: "black",
            text: "Look at those dripping face cunts! Don't you just want to stick your dick, clit, " +
                "or asshole against those wet slippery lips? Let's see if their other lips can grip " +
                "this dildo like their pie holes. ",
            button: [
                { chatID: -1, text: "...", callback: "show6" }
            ]
        },
        {
            chatID: 13,
            speaker: "black",
            text: "They could do this all night! Aren't they just slutty little whores! " +
                "Bend over and show everyone you loose little pussies girls! ",
            button: [
                { chatID: 14, text: "...", callback: "show7" }
            ]
        },
        {
            chatID: 14,
            speaker: "black",
            text: "Thank you! Thank you all! These two cock hungry whores are both available " +
                "in the Pink Room or your local gloy hole for your pleasure! I'm available by appointment in the " +
                "Black Room! Thank you again and good night! ",
            button: [
                { chatID: -1, text: "[End the show]", callback: "showEnd" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};