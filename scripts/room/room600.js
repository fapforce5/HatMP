//Girl GloryHole Broom

var room600 = {};

room600.main = function () {
    if (cl.isLewd()) {

    }
    else if (sc.getMission("tony", "strip").notStarted) {

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
            zcl.bj(300, 400, .7, "", true);
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
                { chatID: 2, text: "Oh. Yeah, sure", callback: "" },
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
                { chatID: 9, text: "I want it. I really want it!", callback: "office1" },
            ]
        },
        {
            chatID: 8,
            speaker: "tony",
            text: "Don't tell my face. Tell my cock how much you want it ",
            button: [
                { chatID: 9, text: "[Suck Fat Tony's cock] ", callback: "office2" },
                { chatID: -1, text: "You monster! [Run away crying] ", callback: "leave" },
            ]
        },
    ];
    return cArray[chatID];
};