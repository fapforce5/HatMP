//Room name
var room222 = {};
room222.main = function () {
    switch (missy.st[8].c) {
        case 0:
            missy.st[8] = 1;
            chat(0, 222);
            break;
        default:
            chat(11, 222);
            break;
    }
};

room222.btnclick = function (name) {
    switch (name) {
        case "case0-1":
            nav.killall();
            nav.bg("222_errands/case0-1.jpg");
            chat(1, 222);
            break;
        case "case-default1":
            nav.killall();
            nav.bg("222_errands/case-default1.jpg");
            break;
        default:
            break;
    }
};

room222.chatcatch = function (callback) {
    switch (callback) {
        case "case0-1":
            nav.bg("map/map2.jpg");
            var p = g.getRoomMap(375);
            nav.button({
                "type": "btn",
                "name": "case0-1",
                "left": p.left,
                "top": p.top,
                "width": p.width,
                "height": p.height,
                "image": p.img
            }, 222);
            break;
        case "case0-2":
            nav.bg("222_errands/case0-2.jpg");
            break;
        case "case0-end":
            levels.mod("pi", 20, 999); 
            char.room(224);
            break;
        case "displayMissy":
            nav.bg("200_frontOffice/bg.jpg");
            break;
        case "lunch":
            missy.mod(8, 1);
            missy.mod(31, 1);
            char.room(224);
            break;
        case "punishLunch":
            levels.mod("pi", -10, 999); //pi skillz
            g.pass = "punish";
            char.room(224);
            break;
        case "case-default0":
            nav.bg("map/map1.jpg");
            var p = g.getRoomMap(910);
            nav.button({
                "type": "btn",
                "name": "case-default1",
                "left": p.left,
                "top": p.top,
                "width": p.width,
                "height": p.height,
                "image": p.img
            }, 222);
            break;
        default:
            break;
    }
};

room222.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "I need you to pick up some files from the police station. Ask for the polie report " +
                "for a Ms. " + sc.n("sammi") + ". If that idiot cop asks what it's for tell him it's for " +
                "a missing persons case. Here's $50 to cover the filing fee. ",
            button: [
                { chatID: -1, text: "Got it. Thanks", callback: "case0-1" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Hi I need the police report for " + sc.n("sammi") + " please. ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "cop2",
            text: "Awww kid. No you don't. Why don't you run along, I've got police business to do. ",
            button: [
                { chatID: 3, text: "[Insist] No. I need that file. ", callback: "" },
                { chatID: 10, text: "[Give up] ok. ", callback: "diplayMissy" },
            ]
        },
        {
            chatID: 3,
            speaker: "cop2",
            text: "What does a kid like you need criminal records for a missing person case for? ",
            button: [
                { chatID: 4, text: "Missy sent me to get them. ", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "cop2",
            text: "Oh. So you're one of Missy's lackeys. Listen kid, she's bad news. Stay away from " +
                "her. She's nothing but a thorn in my side. Tell her to let the real police handle " +
                "the crime in this town. ",
            button: [
                { chatID: 5, text: "I need those files. I have the filing fee. Please just get them. ", callback: "case0-2" },
                { chatID: 7, text: "Missy said you're an idiot and to just give me the files", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "cop2",
            text: "Fine. I'll give you the files this time, but don't keep coming here insisting on them. ",
            button: [
                { chatID: 6, text: "Thanks. [Return to Missy's] ", callback: "displayMissy" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Great work. This poor girl's been missing for several weeks now. Those lasy cops " +
                "won't lift a finger to help find her. They say she's just another run away in the " +
                "long list of runaways in the area. I'm pretty sure they are feigning incompetence " +
                "to hide their corruption. You may go to lunch. ",
            button: [
                { chatID: 6, text: "Yes ma'am", callback: "case0-end" },
            ]
        },
        {
            chatID: 7,
            speaker: "cop2",
            text: "Missy said that, did she. Well you go tell Missy that if she wants the files she'll have " +
                "to come down herself and show us that fine ass of hers. Now get out of here before I arrest you!",
            button: [
                { chatID: 8, text: "..crap. ok [Return to Missy's]", callback: "diplayMissy" },
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "...then he said to show you your fine ass if you want the files.",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "I sent you on a simple errand, to go get some files, and you botched that up. No where " +
                "did I say to tell him it's for me. I said pay the money and get the file. You've failed this " + 
                "simple task. Your lunch will be spent thinking about your screw up. ",
            button: [
                { chatID: -1, text: "...", callback: "punishLunch" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "What do you mean you didn't get the report. I sent you there with one simple job, " +
                "to get the report. You are a failure and a dissapointment. I'm going to have to " +
                "reschedule some appointments now to do your job. You've failed this " +
                "simple task. Your lunch will be spent thinking about your screw up. ",
            button: [
                { chatID: -1, text: "...", callback: "punishLunch" },
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "I need you to run these files to the court house. (line needs work)",
            button: [
                { chatID: 12, text: "...", callback: "case-default0" },
            ]
        },
        {
            chatID: 12,
            speaker: "govlady",
            text: "here's your files",
            button: [
                { chatID: 13, text: "...", callback: "diplayMissy" },
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "good work. go to lunch",
            button: [
                { chatID: -1, text: "...", callback: "lunch" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};