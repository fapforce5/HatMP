//Room name
var room751 = {};
room751.main = function () {
    if (daily.get("751_crystal")) {

    }
    else {
        switch (sc.taskGetStep("crystal", "t")) {
            case -1:
            case 0:
                sc.show("crystal");
                sc.startMission("crystal", "t");
                sc.completeMissionTask("crystal", "t", 0);
                chat(0, 751);
                break;
            default:
                chat(1, 751);
        }
    }
    nav.buildnav([750, 0]);
};

room751.btnclick = function (name) {
    nav.kill();
    if (name === "mainMenu") {
        sc.select("icon_main", "751_crystal/icon_main.webp", 0);
        sc.select("icon_rel", "751_crystal/icon_rel.webp", 1);
        sc.select("icon_other", "751_crystal/icon_other.webp", 2);
    }
    else if (name === "icon_main") {
        chat(900, 751);
    }
    else if (name === "icon_other") {

    }
    else if (name === "icon_rel") {

    }
};

room751.chatcatch = function (callback) {
    switch (callback) {
        case "bg1":
            nav.bg("751_crystal/" + callback + ".jpg");
            break;
        case "goatweed":
            if (inv.has("cavekey")) {
                char.room(750);
            }
            else if (!gv.get("mapopen")) {
                chat(2, 751);
            }
            else if (inv.get("hornyGoatWeed").count < 10) {
                chat(4, 751);
            }
            else {
                chat(5, 751);
            }
            break;
        case "leave":
            char.room(750);
            break;
        case "hgw10":
            inv.use("hornyGoatWeed", 10); 
            inv.add("cavekey");
            nav.button({
                "type": "btn",
                "name": "cavekey",
                "left": 768,
                "top": 246,
                "width": 588,
                "height": 538,
                "title": "Cave Key",
                "image": "751_crystal/key.webp"
            }, 751);
            g.roomTimeout = setTimeout(function () {
                nav.killbutton("cavekey"); 
                chat(6, 751);
            }, 1200);
            break;
        case "select":
            room751.btnclick("mainMenu");
            break;
        case "fortune1":
            if (gv.get("money") < 5) {
                chat(1, 751);
                return;
            }
            gv.mod("money", -5);
            room751.btnclick("mainMenu");
            break;
        default:
            break;
    }
};

room751.chat = function (chatID) {
    if (chatID === 900) {
        let storyLine = "";
        if (gv.get("jobapplyconst") < 2) {
            storyLine = "I see you have great potential. You will do great things, but you need to get " +
                "off your flat lazy butt. Each journey has a beginning and yours is to get out there " +
                "and start working. To see your true path you much travel the wrong path. Start working at " +
                "the construction site. I see a suprise awaits you there. ";
        }
        else if (gv.get("jobapplyconst") < 100) {
            storyLine = "You must continue working. The catalist for change will come from your own " +
                "curiosity. I see a suprise awaits you there. ";
        }
        else if (missy.get("totalDaysWorked") === 0) {
            storyLine = "Awww. I see your curiosity has placed with in a surprising oppurtunity. " +
                "You see your proper path only comes after you try the wrong path. It's an exciting path " +
                "and suited for you. Continue working for Missy, she'll lead you right.";
        }
        else if (missy.get("totalDaysWorked") === 0) {
            storyLine = "Awww. I see your curiosity has placed with in a surprising oppurtunity. " +
                "You see your proper path only comes after you try the wrong path. It's an exciting path " +
                "and suited for you. Continue working for Missy, she'll lead you right.";
        }
        else if (missy.get("totalDaysWorked") === 0) {
            storyLine = "Awww. I see your curiosity has placed with in a surprising oppurtunity. " +
                "You see your proper path only comes after you try the wrong path. It's an exciting path " +
                "and suited for you. Continue working for Missy, she'll lead you right.";
        }
        else if (missy.get("uniform") < 2) {
            storyLine = "Stop denying your true self. We both know you want to wear panties. Be true " +
                "to yourself and start going out in panties you silly boy. ";
        }
        else if (!sissy.st[0].ach) {
            storyLine = "I see you are the catalyst for great change, but you are not ready yet. Much is " +
                "needed to go down this path. You must continue what you're doing so that greatness may find you. ";
        }
        else if (!sissy.st[21].ach) {
            storyLine = "Hahaha! Quite the sissy you're becoming. You may even find yourself coming to a full " +
                "woman soon enough if that path is taken when it comes. Much will change from you that you " +
                "are not yet aware of. There are many ways to greatness, you must find your own way. ";
        }
        else if (sc.getMission("cult", "kidnap").notStarted) {
            storyLine = "I see you have done well. You have found your path and are on the way to greatness. " +
                "There is one more thing I see in your future, but I can't quite make it out yet. It is a " +
                "surprise that will be revealed when the time is right. ";
        }

        return {
            chatID: 0,
            speaker: "crystal",
            text: storyLine,
            button: [
                { chatID: -1, text: "ok. Thanks", callback: "goatweed" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "crystal",
            text: "Hello new traveler. Welcome to my home. What can I do to help guide you in life? ",
            button: [
                { chatID: 1, text: "Huh?", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "crystal",
            text: "I am a fortune teller. I can tell you your fortune as best I see it. ",
            button: [
                { chatID: 7, text: "Sure", callback: "bg1" },
                { chatID: -1, text: "Some other time. ", callback: "goatweed" },
            ]
        },
        {
            chatID: 2,
            speaker: "crystal",
            text: "Say, you wouldn't have any Horny Goat Weed on you, would you? ",
            button: [
                { chatID: 3, text: "What's that? ", callback: "bg1" }
            ]
        },
        {
            chatID: 3,
            speaker: "crystal",
            text: "A special plant that grows in the forest. I do desperately need some. " +
                "When you find your way into the forest, and you will. Get me some and I'll reward " +
                "you with something you desperatly need. ",
            button: [
                { chatID: -1, text: "oh. ok.", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "crystal",
            text: "Now you have found your way into the forest, get me 10 Horny Goat Weeds. You'll " +
                "find it along the path as you walk around. Just pick it and save it. Once you have " +
                "10, bring them to me. ",
            button: [
                { chatID: -1, text: "oh. ok.", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "crystal",
            text: "*sniff* *sniff* What's that I smell? Is that Horny Goat Weed! Please I need it. Give " +
                "me 10 and I'll give you something of great value. ",
            button: [
                { chatID: -1, text: "Sure [Give her 10 Horny Goat Weeds]", callback: "hgw10" },
                { chatID: -1, text: "Some other time.", callback: "reset" },
            ]
        },
        {
            chatID: 6,
            speaker: "crystal",
            text: "For the gift of Horny Goat Weed, I give you the cave key. Only the members of the cult " +
                "have that key, and now you have one too. In the back of the forest path you'll find a locked " +
                "door. Use that key to continue into the cave. Be wary, Follow the path too deep and you " +
                "may find yourself joining the cult. And not in a good way. Travel well. ",
            button: [
                { chatID: -1, text: "Thanks! ", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "crystal",
            text: "First let me get comfortable and open myself up to the spirits. ",
            button: [
                { chatID: 900, text: "👀", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};