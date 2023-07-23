//Room name
var room217 = {};
room217.main = function () {
    if (g.pass === "late") {
        //missy.mod(1, 1);
        
        if (missy.tracker[1].c === 0)
            chat(0, 217);
        if (missy.tracker[1].c === 1)
            chat(2, 217)
    }
};

room217.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room217.chatcatch = function (callback) {
    switch (callback) {
        case "endFirst":
            char.addtime(30);
            missy.tracker[1].c++;
            char.room(0);
            break;
        case "squeeze":
            nav.bg("217_punish/squeeze.jpg");
            missy.mod(0, -10);
            break;
        case "disrobe":
            nav.bg("217_punish/punishStart.jpg");
            cl.nude();
            zcl.displayMain(0, 400, .35, "", true);
            break;
        case "punish0":
            nav.killall();
            g.internal = 0;
            nav.bg("217_punish/punish0.jpg");
            zcl.displayMain(445, 1380, .05, "armsup", false);
            nav.button({
                "type": "img",
                "name": "tiedown",
                "left": 1372,
                "top": 440,
                "width": 221,
                "height": 80,
                "image": "200_frontOffice/tieddownsmall.png"
            }, 200);
            break;
        case "punishRand":
            var img = Math.floor(Math.random() * 11);
            nav.bg("217_punish/punish" + img + ".jpg");
            g.mod("energy", -40);
            break;
        case "punishNext":
            nav.bg("217_punish/punish0.jpg");
            break;
        case "punishNext1":
            nav.killall();
            nav.bg("217_punish/punishNext1.jpg");
            break;
        case "punishmentEnd":
            sissy.statsUpdate(28);
            g.set("energy", 0);
            char.settime(17, 35);
            cl.undo();
            char.room(0);
            break;
        default:
            break;
    }
};

room217.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Lateness is something I don't tolerate. I can sit here and complain to you about it, " +
                "or we will try and change your behavior with my behavior adjuster. The first hour " +
                "your arms and legs will get tired and sore. By the end of the day you'll be in misery, " +
                "drooling and wet with sweat. This is your first and only warning. If you come in late again " +
                "You will have the opportunity to experiance this amazing attitude adjuster. Got it? ",
            button: [
                { chatID: 1, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Good, Now get out of my sight and come in on time next time! ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "endFirst" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "I told you what happens when you come in late, but you don't seem to understand how " +
                "much I hate tardiness. Strip off your clothing. ",
            button: [
                { chatID: 4, text: "Yes ma'am", callback: "disrobe" },
                { chatID: 3, text: "What? No! ", callback: "squeeze" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "You know I have enough power in my legs to pop your head clean off. But then I would have " +
                "to get " + sc.n("cecilia") + " to clean up, and she doesn't deserve that. Now you were saying " +
                "how you were going to strip down. ",
            button: [
                { chatID: 4, text: "*GASP* yes ma'am", callback: "disrobe" },
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "You won't be going anywhere for a while. It will give you plenty of time to think about what " +
                "you've done.",
            button: [
                { chatID: 5, text: "HHhmMmmHMhmHMhmHMHmmm", callback: "punish0" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "It's a little uncomfortable, but I can probably do this all day. ",
            button: [
                { chatID: 6, text: "...", callback: "punishRand" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "My wrists are starting to burn...",
            button: [
                { chatID: 7, text: "...", callback: "punishRand" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I'm so exhausted and my shoulders are killing me. What the hell! I'll never be late again! " +  
                "fuck this is terrible.",
            button: [
                { chatID: 8, text: "HHmmmmHMmmMhmhMHhm", callback: "punishRand" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Fuck! I need to get down! Now! I hurt so bad! ",
            button: [
                { chatID: 9, text: "HmmMEMmemmemm", callback: "punishRand" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I'm just going to die here in her office. She doesn't care. ",
            button: [
                { chatID: 10, text: "...", callback: "punishNext" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "I think you've been up there enough to have learned your lesson. I'll take you down now " +
                "before you die of asphyxiation. ",
            button: [
                { chatID: 11, text: "", callback: "punishNext1" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Oh thank you, thank you, thank you! I thought I was going to die! I'm so sorry. I will never " +
                "cross you again. Please never put me up there again. ",
            button: [
                { chatID: 12, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "I don't decide if you go up there, you behavior does. Make sure you correct yourself. Now " +
                "get out of my office. Your sweat is getting in my carpet and making my office stink. ",
            button: [
                { chatID: -1, text: "Groan", callback: "punishmentEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};