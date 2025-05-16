//Girl GloryHole Broom

var room600 = {};

room600.main = function () {
    if (g.gethourdecimal() > 3 && g.gethourdecimal() < 17) {
        nav.bg("600_body/closed.jpg");
        chat(18, 600);
    }
    else if (daily.get("stripper")) {
        chat(17, 600);
    }
    else if (cl.isLewd()) {
        chat(15, 600);
    }
    else if (g.dt.getDay() === 5 && gv.get("sissySchoolClass") === "finalx") {
        nav.bg("600_body/femboy.webp");
        zcl.displayMain(500, 840, .09, "clothes", true);
        chat(19, 600);
    }
    else if (sc.getMission("tony", "strip").startedOrComplete) {
        char.room(602);
        return;
    }
    else {
        if (cl.appearance() > 2) {
            chat(1, 600);
        }
        else {
            chat(0, 600);
        }
    }
    nav.buildnav([0]);
};


room600.btnclick = function (name) {
   
};

room600.chatcatch = function (callback) {
    switch (callback) {
        case "office":
        case "office1":
            nav.bg("600_body/" + callback + ".jpg");
            break;
        case "office2":
            nav.bg("600_body/office2.jpg");
            zcl.bj(300, 400, .7, "", true);
            break;
        case "office3":
            nav.bg("600_body/office3.jpg");
            zcl.bj(300, 400, .7, "open", true);
            nav.button({
                "type": "img",
                "name": "office3",
                "left": 857,
                "top": 0,
                "width": 784,
                "height": 1080,
                "image": "600_body/office3.png"
            }, 600);
            break;
        case "office4":
            nav.killbutton("office3");
            nav.bg("600_body/office4.jpg");
            zcl.bj(300, 400, .7, "", true);
            sc.show("tony");
            sc.startMission("tony", "strip");
            sc.completeMissionTask("tony", "strip", 0);
            break;
        case "job":
            if (qdress.st[25].ach) {
                chat(2, 600);
            }
            else
                chat(16, 600);
            break;
        case "room602":
            char.room(602);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room600.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "!freddy",
            text: "This here's a gentlemen's club, slick, and you don't look like the " +
                "kinda gentlemen we let in. Get lost before I get you lost. ",
            button: [
                { chatID: -1, text: "aww man!", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "!freddy",
            text: "Hey! You're a hot piece of ass! You wanna job? ",
            button: [
                { chatID: -1, text: "Oh. Yeah, sure", callback: "job" },
                { chatID: -1, text: "Ewwww. gross. no.", callback: "leave" },
            ]
        },
        {
            chatID: 2,
            speaker: "!freddy",
            text: "Thought so. You look like the kinda girl that works here. Let me take you " +
                "to the big guy. See if you can pass the interview. ",
            button: [
                { chatID: 3, text: "[Follow him]", callback: "office" },
            ]
        },
        {
            chatID: 3,
            speaker: "tony",
            text: "Yeah. Wadda you want!",
            button: [
                { chatID: 4, text: "I came about working here", callback: "" },
                { chatID: -1, text: "eeekk. Nothing [run away]", callback: "leave" },
            ]
        },
        {
            chatID: 4,
            speaker: "tony",
            text: "Oooo. You you's wanna be a stripper huh? Good body, nice and tight. " +
                "You ever been a stripper before? ",
            button: [
                { chatID: 5, text: "No sir.", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "tony",
            text: "You think you can shake that pretty ass of yours on stage for a bunch " +
                "of horny dudes? ",
            button: [
                { chatID: 6, text: "Yeah. I'm great at that! ", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "tony",
            text: "How 'bout private dances? You good with being in a private room shaking " +
                "your ass in there? ",
            button: [
                { chatID: 7, text: "Totally! ", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "tony",
            text: "Hmmm... maybe. I don't know. I got lots of girls, and some girly boys. " +
                "I don't really NEED another dancer, but you look like you could use some " +
                "extra money. Tell you what. Let me see what 'cha got. Strip off your clothes.  ",
            button: [
                { chatID: 8, text: "That makes sense. Ok ", callback: "officea" },
            ]
        },
        {
            chatID: 8,
            speaker: "tony",
            text: "I don't know. You look a'right. Turn around. Show me your ass. ", 
            button: [
                { chatID: 9, text: "Ok ", callback: "officeb" },
            ]
        },
        {
            chatID: 9,
            speaker: "tony",
            text: "Nice butt. I would love to see you shake that on the stage. But I've got " +
                "lot's a nice butts shaking on stage. Maybe too many. I don't know kid. " +
                "How badly do you want this job? ",
            button: [
                { chatID: 10, text: "I want it. I really want it!", callback: "office1" },
            ]
        },
        {
            chatID: 10,
            speaker: "tony",
            text: "Don't tell my face. Tell my cock how much you want it. ",
            button: [
                { chatID: 11, text: "[Get down on your knees] ", callback: "office2" },
                { chatID: -1, text: "You monster! [Run away crying] ", callback: "leave" },
            ]
        },
        {
            chatID: 11,
            speaker: "tony",
            text: "That's right. That look in your eyes... it tells me you understand the way things work around here. You're sharp. You're hungry. And that's good. A bit of a tramp and a little bit of... eagerness... those are qualities I value. Now, let's not waste any more time on pleasantries. Get to sucking.",
            button: [
                { chatID: 12, text: "[Suck Fat Tony's cock you dirty dirty tramp] ", callback: "office3" },
            ]
        },
        {
            chatID: 12,
            speaker: "tony",
            text: "I like girls like you. Know your place and what you're good for. ",
            button: [
                { chatID: 13, text: "[Suck the cum out of Fat Tony's fat cock] ", callback: "office4" },
            ]
        },
        {
            chatID: 13,
            speaker: "tony",
            text: "Arright kid. You can work for me. I exepct loyalty, so do what I say. My cut is fifty percent " +
                "of your tips, gotta keep the lights on. You need to wear a bra and panties when " +
                "you're on stage. You can drop the bra, but don't drop them panties on stage or the " +
                "cops give me a hard time. Capisce?",
            button: [
                { chatID: 14, text: "Yes sir! Thank you sir!", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "tony",
            text: "Now get dressed and get out of my office. I gots work to do. You can " +
                "change backstage. You start tonight. And no sex with the clients. That'll " +
                "get me in trouble with the cops too. Now go make me some moolah. ",
            button: [
                { chatID: -1, text: "Yes sir!", callback: "room602" },
            ]
        },
        {
            chatID: 15,
            speaker: "!freddy",
            text: "Whoa, whoa, whoa, whoa! This here's a respectable establishment! You's " +
                "gotsta get some clothes on. ",
            button: [
                { chatID: -1, text: "Oh. Ok", callback: "leave" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "What am I saying??? There's no way I'm comfortable enough stripping " +
                "in front of a lot of strange horny men!",
            button: [
                { chatID: -1, text: "[Need to unlock Stripper]", callback: "leave" },
            ]
        },
        {
            chatID: 17,
            speaker: "!freddy",
            text: "Hey, youse are done for the night. I heard what you tried to do. You " +
                "can come back tomrrow, just keep you panties on.",
            button: [
                { chatID: -1, text: "Oh. Ok", callback: "leave" },
            ]
        },
        {
            chatID: 18,
            speaker: "thiking",
            text: "Oh. They're closed..",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 19,
            speaker: "p",
            text: "Welcome everyone to the first ever FEMBOY FRIDAY at Fat Tony's!!!!" + 
                "Now the rules are that whoever makes the most money tonight gets an A+ " +
                "for the sexy part of their final! Wooooo! " + sc.n("!freddy") + " here will " +
                "explain the rules, but you girls have fun!",
            button: [
                { chatID: 20, text: "...", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "!freddy",
            text: "Hehehee. I notice there's a few of youse that been working here a while. You " +
                "already knows the rules. For the rest of youse, underwears only in the club, and " +
                "no taking off youse panties. Take off your panties and you'll be 86th from here " +
                "and youse won't get no tips. Got it?",
            button: [
                { chatID: 21, text: "[Nod]", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "p",
            text: "Ok girls! Get in there and shake your money makers!!!!!!!",
            button: [
                { chatID: -1, text: "Yea!!!!", callback: "room602" },
            ]
        },
    ];
    return cArray[chatID];
};