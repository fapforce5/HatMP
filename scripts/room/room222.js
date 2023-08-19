//Room name
var room222 = {};
room222.main = function () {
    if (levels.get("xdress").l < 2) {
        chat(14, 222);
    }
    else {
        var errand = Math.floor(Math.random() * 3);
        switch (errand) {
            case 0:
                chat(0, 222);
                break;
            case 1:
                chat(14, 222);
                break;
            default:
                chat(11, 222);
                break;
        }
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
        case "laudry-panties":
            nav.killall();
            nav.bg("222_errands/laundry1-panties.jpg");
            levels.mod("xdress", 20, 2);
            chat(17, 222);
            break;
        case "laudry-coin":
            nav.killall();
            nav.bg("222_errands/laundry2.jpg");
            chat(19, 222);
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
            room222.chatcatch("lunch");
            break;
        case "displayMissy":
            nav.bg("200_frontOffice/bg.jpg");
            break;
        case "lunch":
            missy.didJob(4, 1, null);
            char.room(224);
            break;
        case "punishLunch":
            missy.didJob(4, .5, null);
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
        case "laundry0":
            nav.bg("222_errands/laundry0.jpg");
            break;
        case "laundry1":
            nav.bg("222_errands/laundry1.jpg");
            nav.button({
                "type": "btn",
                "name": "laudry-coin",
                "left": 1468,
                "top": 507,
                "width": 207,
                "height": 245,
                "image": "222_errands/coin.png"
            }, 222);
            nav.button({
                "type": "btn",
                "name": "laudry-panties",
                "left": 757,
                "top": 737,
                "width": 268,
                "height": 119,
                "image": "222_errands/panties.png"
            }, 222);
            break;
        case "laundry2":
            nav.killall();
            nav.bg("222_errands/laundry2.jpg");
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
                { chatID: -1, text: "Yes ma'am", callback: "case0-end" },
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
        {
            chatID: 14,
            speaker: "missy",
            text: "I'm so glad you've decided to run errands today. I desperately need my laundry done. ",
            button: [
                { chatID: 15, text: "Laundry ma'am?", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "Yes. Just take it to the local laundromat. Hurry along, it should only take a couple hours.  ",
            button: [
                { chatID: 16, text: "Yes ma'am?", callback: "laundry0" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "What crap. I have to spend the entire morning in this dirty hot ass laudromat washing her dirty " +
                "clothes while she sits in her nice office. The pay isn't even that good. ",
            button: [
                { chatID: -1, text: "...", callback: "laundry1" },
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "Oh wow! Missy's panties. They are so soft and delicate, and the smell is so wonderful, " +
                "like a mix of passionate sex and spring flowers. I am in the presence of the most perfect " +
                "dirty panties. ",
            button: [
                { chatID: 18, text: "Hmmm", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "I should put these back. Don't want to get get caught stealing panties.  ",
            button: [
                { chatID: 19, text: "...", callback: "laundry2" },
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "So fucking boring. Missy should buy a washing machine so she can do her own laudry at her own home. ",
            button: [
                { chatID: 20, text: "...", callback: "laundry3" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Finally fuckin' done. I'm going to take these back to Missy and grab lunch. ",
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