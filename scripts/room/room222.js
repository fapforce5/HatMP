//Room name
var room222 = {};
room222.main = function () {
    if (missy.get("jobRunErrands") === 0) {
        chat(14, 222);
    }
    else {
        var errand = g.rand(0, 4);
        switch (errand) {
            case 0:
                chat(0, 222);
                break;
            case 1:
                chat(14, 222);
                break;
            case 2:
                chat(33, 222);
                break;
            default:
                chat(11, 222);
                break;
        }
    }

    missy.mod("jobRunErrands", 1);
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
            levels.mod("xdress", 25, 0);
            if (levels.get("xdress").l > 0 && !cl.hasClothing("panties", "missy")) {
                chat(21, 222);
            }
            else {
                chat(17, 222);
            }
            break;
        case "laudry-coin":
            nav.killall();
            nav.bg("222_errands/laundry2.jpg");
            chat(19, 222);
            break;
        case "case0charismaWin":
            chat(23, 222);
            break;
        case "case0charismaLose":
            chat(24, 222);
            break;
        case "case0-3":
            nav.killbutton("case0-3");
            nav.bg("222_errands/case0-4.jpg");
            nav.button({
                "type": "tongue",
                "name": "case0-4",
                "left": 852,
                "top": 306,
                "width": 563,
                "height": 691,
                "image": "222_errands/case0-4.png"
            }, 222);
            chat(27, 222);
            break;
        case "case0-4":
            nav.killall();
            nav.bg("222_errands/case0-5.gif");
            nav.next("case0-5");
            break;
        case "case0-5":
            nav.killbutton("case0-5");
            nav.bg("222_errands/case0-6.jpg");
            nav.next("case0-6");
            break;
        case "case0-6":
            levels.oral(4, "m", "cop", true);
            nav.killall();
            nav.bg("222_errands/case0-2.jpg");
            chat(29, 222);
            break;
        case "case-2-1":
            nav.killall();
            nav.bg("222_errands/case-2-cop_0.jpg");
            nav.button({
                "type": "btn",
                "name": "case-2-records",
                "left": 1745,
                "top": 673,
                "width": 145,
                "height": 330,
                "title": "Record's Office",
                "image": "911_cityhall/records.png"
            }, 222);
            nav.button({
                "type": "btn",
                "name": "case-2-stoner",
                "left": 414,
                "top": 100,
                "width": 499,
                "height": 980,
                "title": "Stoner",
                "image": "222_errands/buy.png"
            }, 222);
            
            break;
        case "case-2-stoner":
            chat(30, 222);
            break;
        case "case-2-records":
            room222.chatcatch("case-2-records");
            break;
        case "case-3-1":
            nav.killall();
            nav.bg("300_apartment/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "case-3-2",
                "left": 1350,
                "top": 396,
                "width": 78,
                "height": 407,
                "title": "Go to the second floor. ",
                "image": "300_apartment/stairs1.png"
            }, 222);
            break;
        case "case-3-2":
            nav.killall();
            nav.bg("314_thirdFloor/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "case-3-3",
                "left": 581,
                "top": 518,
                "width": 160,
                "height": 307,
                "image": "314_thirdFloor/door.png"
            }, 222);
            break;
        case "case-3-3":
            nav.killall();
            nav.bg("222_errands/case-3-3.jpg");
            chat(34, 222);
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
                "type": "img",
                "name": "case0-1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_75.png"
            }, 222);
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
        case "case0-2-char":
            charisma.init(5, "case0charismaWin", "case0charismaLose", 222)
            break;
        case "case0-end":
            levels.mod("pi", 20, 999); 
            room222.chatcatch("lunch");
            break;
        case "case0-2-bj":
            if (cl.appearance() < 2)
                chat(25, 222);
            else
                chat(26, 222);
            break;
        case "case0-3":
            nav.bg("222_errands/case0-3.jpg");
            nav.button({
                "type": "hand",
                "name": "case0-3",
                "left": 887,
                "top": 306,
                "width": 493,
                "height": 605,
                "image": "222_errands/case0-3.png"
            }, 222);
            break;
        case "displayMissy":
            nav.killall();
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
        case "case-2-0":
            nav.bg("map/map1.jpg");
            var p = g.getRoomMap(911);
            nav.button({
                "type": "img",
                "name": "case0-1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_75.png"
            }, 222);
            nav.button({
                "type": "btn",
                "name": "case-2-1",
                "left": p.left,
                "top": p.top,
                "width": p.width,
                "height": p.height,
                "image": p.img
            }, 222);
            break;
        case "case-2-cop":
            nav.killall();
            nav.bg("222_errands/case-2-cop.jpg");
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
            if (!cl.hasClothing("panties", "missy")) {
                nav.button({
                    "type": "btn",
                    "name": "laudry-panties",
                    "left": 757,
                    "top": 737,
                    "width": 268,
                    "height": 119,
                    "image": "222_errands/panties.png"
                }, 222);
            }
            break;
        case "laundry2":
            nav.killall();
            nav.bg("222_errands/laundry2.jpg");
            break;
        case "steal":
            cl.add("panties", "missy");
            break;
        case "case-2-jail":
            missy.didJob(4, 0, null);
            char.room(376);
            break;
        case "case-2-records":
            nav.killall();
            nav.bg("910_gov/bg.jpg");
            nav.button({
                "type": "img",
                "name": "lady",
                "left": 991,
                "top": 350,
                "width": 158,
                "height": 267,
                "image": "910_gov/lady.png"
            }, 222);
            chat(32, 222);
            break;
        case "case-2-end":
            missy.didJob(4, 1, null);
            char.room(224);
            break;
        case "case-3-build":
            nav.killall();
            nav.bg("map/map2.jpg");
            var p = g.getRoomMap(300);
            nav.button({
                "type": "img",
                "name": "case0-1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_75.png"
            }, 222);
            nav.button({
                "type": "btn",
                "name": "case-3-1",
                "left": p.left,
                "top": p.top,
                "width": p.width,
                "height": p.height,
                "image": p.img
            }, 222);
            break;
        case "case-3-4":
            nav.bg("300_apartment/bg.jpg");
            nav.button({
                "type": "img",
                "name": "pills",
                "left": 564,
                "top": 398,
                "width": 665,
                "height": 682,
                "image": "222_errands/case3-pills.png"
            }, 222);
            break;
        case "case-3-5":
            nav.modbutton("pills", "222_errands/case3-pills-open.png", null, null);
            break;
        case "case-3-6":
            nav.modbutton("pills", "222_errands/case3-pills-take.png", null, null);
            inv.addMulti("hormone", 5);
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
                { chatID: 10, text: "[Give up] ok. ", callback: "displayMissy" },
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
                { chatID: -1, text: "Use charisma " + charisma.getStats(6).txt, callback: "case0-2-char" },
                { chatID: -1, text: "How about you give me those files for a bj?", callback: "case0-2-bj" },
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
                { chatID: 8, text: "..crap. ok [Return to Missy's]", callback: "displayMissy" },
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
            text: "I need you to run these files to the court house.",
            button: [
                { chatID: -1, text: "...", callback: "case-2-0" },
            ]
        },
        {
            chatID: 12,
            speaker: "govlady",
            text: "here's your files",
            button: [
                { chatID: 13, text: "...", callback: "displayMissy" },
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
        {
            chatID: 21,
            speaker: "thinking",
            text: "Oh wow! Missy's panties. They are so soft and delicate, and the smell is so wonderful, " +
                "like a mix of passionate sex and spring flowers. I am in the presence of the most perfect " +
                "dirty panties. ",
            button: [
                { chatID: 22, text: "Steal Missy's dirty panties", callback: "steal" },
                { chatID: 18, text: "Hmmm", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "I'll just take these. Surely Missy won't notice just one pair of missing panties. All her panties look " +
                "the same afterall. I can't wait to try these one!",
            button: [
                { chatID: 19, text: "Mmmm Missy's dirty panties", callback: "laundry2" },
            ]
        },
        {
            chatID: 23,
            speaker: "me",
            text: "You know as a public servernt I have a right to those files. Rather than " +
                "making a bigger deal than it is and getting your supervisor, why don't " +
                "you just hand over the documents. ",
            button: [
                { chatID: 5, text: "...", callback: "case0-2" },
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "You have to give me those files butthead! Missy said so!",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "cop2",
            text: "I can lock you up for trying to bribe a police officer. I'm going to go " +
                "easy on you since you're some dumb kid. Now get out of here. If Missy " +
                "wants those files tell her to show her fine ass to me.  ",
            button: [
                { chatID: 8, text: "ok [Return to Missy's]", callback: "displayMissy" },
            ]
        },
        {
            chatID: 26,
            speaker: "cop2",
            text: "Hmmmm. Yeah. Crawl under the desk whore. ",
            button: [
                { chatID: -1, text: "[Crawl under the desk and suck that officer's cock.]", callback: "case0-3" },
            ]
        },
        {
            chatID: 27,
            speaker: "cop2",
            text: "They called me beer can in college. Short and fat. Slurp it up whore.",
            button: [
                { chatID: 28, text: "...", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "What the fuck am I doing? I'm going to voluntarily blow this cops fat stinky " +
                "dick just to get a file. Maybe I am a whore. ",
            button: [
                { chatID: -1, text: "[Suck that cop's dick]", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "Here's the files cock sucker. ",
            button: [
                { chatID: 6, text: "Thanks. [Return to Missy's] ", callback: "displayMissy" },
            ]
        },
        {
            chatID: 30,
            speaker: "!stoner",
            text: "Hey dude. You want to get some of the best Matanuska leafy sham wows? " +
                "I'm having an excellent deal. Guarantee you'll be floating with the butterflies. ",
            button: [
                { chatID: 31, text: "Sure, how much? ", callback: "case-2-cop" },
                { chatID: 32, text: "Naw. I'm running errands. ", callback: "case-2-records" },
            ]
        },
        {
            chatID: 31,
            speaker: "cop2",
            text: "Ok you two. No dealing at City Hall. I don't know how many times I have to " +
                "arrest you Stoney. You too. Let's go to jail. ",
            button: [
                { chatID: -1, text: "Awww horse shit.", callback: "case-2-jail" },
            ]
        },
        {
            chatID: 32,
            speaker: "govlady",
            text: "Here's your files young " + gender.pronoun("man") + ". You take care, and don't " +
                "forget to drink your milk. ",
            button: [
                { chatID: -1, text: "Thanks lady! ", callback: "case-2-end" },
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "I need you to run and visit the chemist to pick up some pills. He'll be expecting " +
                "you. He's in the old brick apartment building on the third floor. Don't open it, " +
                "don't mess with anything. Just get the pills and get back here. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "case-3-build" },
            ]
        },
        {
            chatID: 34,
            speaker: "!chem",
            text: "Hi. I don't normally answer my door, but Missy said you were coming. Here's " +
                "the pills. Tell her thanks. ",
            button: [
                { chatID: 35, text: "Sure! Later", callback: "case-3-4" },
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "Hmmm. That was weird. I wonder what's in this bottle..",
            button: [
                { chatID: 36, text: "Take a peek. ", callback: "case-3-5" },
                { chatID: 38, text: "Just take them back to Missy.", callback: "displayMissy" },
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "Oh wow. It's Sissy Bimbo Pills! I thought these would come from a doctor. ",
            button: [
                { chatID: 37, text: "Stuff a few in your pocket. ", callback: "case-3-6" },
                { chatID: 38, text: "Too risky. Take them back to Missy.", callback: "displayMissy" },
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "I hope this doesn't bite me in the ass when I get back. Or maybe I do.",
            button: [
                { chatID: 38, text: "Go back to Missy's", callback: "displayMissy" },
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "Good job walking and carrying a little pill bottle without losing it. Now put the pills on my desk. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "lunch" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};