//Room name
var room250 = {};
room250.main = function () {
    
    if (g.isNight()) {
        nav.bg("250_beaver/outside.jpg");
        nav.buildnav([0]);
        chat(25, 250);
        nav.buildnav([0]);
    }
    else if (cl.isLewd()) {
        if (sc.getMission("dolly", "happy").inProgress()) {
            
            if (sc.getMissionTask("dolly", "happy", 1).complete) {
                nav.bg("250_beaver/d1.jpg");
                chat(18, 250);
            }
            else {
                nav.bg("250_beaver/d0.jpg");
                sc.completeMissionTask("dolly", "happy", 1);
                chat(12, 250);
            }
        }
        else if (sc.getMission("dolly", "mad").complete()) {
            nav.bg("250_beaver/hollymad.jpg");
            chat(19, 250);
        }
        else {
            nav.button({
                "type": "img",
                "name": "kill_olly",
                "left": 964,
                "top": 28,
                "width": 483,
                "height": 1052,
                "image": "250_beaver/side_holly.png"
            }, 250);
            chat(21, 250);
        }
    }
    else {
        if (sc.getMission("holly", "mad").startedOrComplete) {
            nav.button({
                "type": "btn",
                "name": "hollyStand",
                "left": 1094,
                "top": 77,
                "width": 540,
                "height": 1003,
                "image": "250_beaver/holly_stand_mad.png"
            }, 250);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "hollyStand",
                "left": 1104,
                "top": 81,
                "width": 432,
                "height": 999,
                "image": "250_beaver/holly_stand.png"
            }, 250);
        }
        nav.buildnav([0]);
    }
};

room250.btnclick = function (name) {
    switch (name) {
        case "hollyStand":
            if (missy.activecase().caseId === 14) {
                if (missy.get("reusableCaseCounter") === 0) {
                    if (g.hourBetween(6, 11)) {
                        chat(10, 250);
                    }
                    else {
                        chat(8, 250);
                    }
                }
                else {
                    chat(22, 250);
                }
            }
            else if (missy.cases[14].complete) {
                chat(22, 250);
            }
            else if (gv.get("jobapplybeaver") === 1) {
                chat(5, 250);
            }
            else {
                chat(0, 250);
            }
            break;
        default:
            break;
    }
};

room250.chatcatch = function (callback) {
    switch (callback) {
        case "250_beaver":
        case "d1":
        case "d2":
        case "cop":
            nav.bg("250_beaver/" + callback + ".jpg");
            break;
        case "d3":
            levels.swallowCum("n", "dolly");
            char.addtime(20);
            char.room(0);
            break;
        case "leave":
            char.room(0);
            break;
        case "jail":
            char.room(376);
            break;
        case "backOffice":
            if (g.hourBetween(6, 11)) {
                g.pass = "startWork";
                char.room(251);
            }
            else {
                chat(23, 250);
            }
            break;
        case "sit":
            if (sc.getMission("holly", "mad").startedOrComplete) {
                chat(24, 250);
            }
            else {
                chat(1, 250);
            }
            break;
        case "pizza":
            if (gv.get("money") < 18) {
                chat(3, 250);
            }
            else {
                gv.mod("money", -18);
                gv.mod("energy", 200);
                nav.killall();
                nav.bg("250_beaver/pizza.jpg");
                chat(2, 250);
            }
            break;
        case "burger":
            if (gv.get("money") < 15) {
                chat(3, 250);
            }
            else {
                nav.killall();
                nav.bg("250_beaver/burger.jpg");
                gv.mod("money", -15);
                gv.mod("energy", 100);
                chat(2, 250);
            }
            break;
        case "tea":
            if (gv.get("money") < 8) {
                chat(3, 250);
            }
            else {
                nav.killall();
                nav.bg("250_beaver/tea.jpg");
                gv.mod("money", -8);
                gv.mod("energy", 50);
                chat(2, 250);
            }
            break;
        case "reset":
            char.room(250);
            break;
        default:
            break;
    }
};

room250.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "holly",
            text: "Hi sir, would you like a table?",
            button: [
                { chatID: 1, text: "Yes", callback: "sit" },
                { chatID: -1, text: "No, Just wandering around I guess", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "holly",
            text: "What would you like to eat? We have<br/>" +
                "$18 Pizza [+200 energy]<br/>" +
                "$15 Hamburger [+100 energy]<br/>" +
                "$8 Biscuits and Tea [+50 energy]",
            button: [
                { chatID: -1, text: "Pizza!", callback: "pizza" },
                { chatID: -1, text: "Hamburger!", callback: "burger" },
                { chatID: -1, text: "Biscuits and Tea please", callback: "tea" },
                { chatID: -1, text: "Never mind, I'm not hungry. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "holly",
            text: "Enjoy!",
            button: [
                { chatID: -1, text: "Finish eating!", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "holly",
            text: "Sorry, it doesn't look like you have enough money.",
            button: [
                { chatID: -1, text: "Oh, I'm an idiot.", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Yummy!",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 5,
            speaker: "holly",
            text: "You're here for the Naked Beaver waitress position?",
            button: [
                { chatID: 6, text: "Yes, I applied online.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "holly",
            text: "You know you're not a girl right? You can't be a waitress as a boy silly.",
            button: [
                { chatID: 7, text: "I can be a waiter", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "holly",
            text: "You have to be a girl to work at the Naked Beaver.. sorry honey.",
            button: [
                { chatID: -1, text: "Oh ", callback: "applyEnd" }
            ]
        },
        {
            chatID: 8,
            speaker: "holly",
            text: "hi honey, what can I do for you?",
            button: [
                { chatID: 9, text: "I'm the new waitress ", callback: "" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "holly",
            text: "No you're not, or you would know " + sc.n("jeffery") + " only interviews in the morning before 10AM. ",
            button: [
                { chatID: -1, text: "Oh I guess I'll come back tomorrow. " , callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "holly",
            text: "hi honey, what can I do for you?",
            button: [
                { chatID: 11, text: "I'm the new waitress ", callback: "" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "holly",
            text: "Oh, I thought you would have a beaver.. oh well " + sc.n("jeffery") + "'s in the back office",
            button: [
                { chatID: -1, text: "Thank you [Go to the back office]", callback: "backOffice" }
            ]
        },
        {
            chatID: 12,
            speaker: "dolly",
            text: "You're naked!",
            button: [
                { chatID: 13, text: "And you have a dick!", callback: "d1" }
            ]
        },
        {
            chatID: 13,
            speaker: "dolly",
            text: "Hehehe. I know. You excited it. I guess I have too much gooey goo in my balls. Tell you what sugar, " +
                "since I can't work like this I'm going to have to empty this really quick. Wait right here and I'll be right " +
                "back.",
            button: [
                { chatID: 14, text: "Huh?", callback: "250_beaver" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "I wonder what she's up to...",
            button: [
                { chatID: 15, text: "...", callback: "d2" }
            ]
        },
        {
            chatID: 15,
            speaker: "dolly",
            text: "Some gooey goo with a spot of sugar for you honey. Drink up, it's packed with the good stuff.",
            button: [
                { chatID: 16, text: "Thanks!", callback: "" },
                { chatID: 17, text: "I'll have to pass. So full.", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "dolly",
            text: "Good girl. Anytime you need another fill up just stop by sugar! I've got to get back to my tables now. ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "d3" }
            ]
        },
        {
            chatID: 17,
            speaker: "dolly",
            text: "Awww. ok. I guess I'll have to drink this up. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 18,
            speaker: "dolly",
            text: "You sure do have a never ending belly. Want some more gooey goo just for you?",
            button: [
                { chatID: 16, text: "I sure do!", callback: "d2" },
                { chatID: -1, text: "no thanks", callback: "leave" }
            ]
        },
        {
            chatID: 19,
            speaker: "holly",
            text: "You have lost your mind! Fuck us over then come here naked! I've got " +
                "just the thing for you! ",
            button: [
                { chatID: 20, text: "Oh?", callback: "cop" },
            ]
        },
        {
            chatID: 20,
            speaker: "cop",
            text: "I one way ride to the jail. c'mon weird-o, you're going with me.  ",
            button: [
                { chatID: -1, text: "drat!", callback: "jail" },
            ]
        },
        {
            chatID: 21,
            speaker: "holly",
            text: "Oh honey. You're naked. You can't come in here like that. ",
            button: [
                { chatID: -1, text: "I guess that makes sense. ", callback: "leave" }
            ]
        },
        {
            chatID: 22,
            speaker: "holly",
            text: "hi " + sc.n("me") + ", Here to eat or work?",
            button: [
                { chatID: -1, text: "Here to work a shift. ", callback: "backOffice" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "holly",
            text: "Sorry hun, work day started already. Please come in before 10. ",
            button: [
                { chatID: -1, text: "oh ok.", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "holly",
            text: "No way! I'm not going to serve you. Eat somewhere else!  ",
            button: [
                { chatID: -1, text: "Still mad? ", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "holly",
            text: "They must be closed for the night. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
