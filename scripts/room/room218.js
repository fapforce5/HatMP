//Room name
var room218 = {};
room218.main = function () {
    if (g.get("arousal") < 50) {
        char.room(missy.jobs[g.pass].page);
    }
    else {
        switch (g.pass) {
            case 1:
                nav.bg("219_dataEntry/bg.jpg");
                break;
        }

        chat(0, 218);
    }
};

room218.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room218.chatcatch = function (callback) {
    switch (callback) {
        case "pants":
            nav.bg("218_masturbate/pants.jpg");
            //nav.bg("218_masturbate/pantsbathroom.jpg");
            
            break;
        case "backToWork":
            char.room(missy.jobs[g.pass].page);
            break;
        case "jack1":
            //if g.pass === 2
            chat(2, 218);
            nav.bg("218_masturbate/desk.jpg");
            break;
        case "jack2":
            //if g.pass === 2
            cl.doCum(false);
            nav.bg("218_masturbate/desk1.jpg");
            break;
        case "jack3":
            //if g.pass === 2
            nav.bg("218_masturbate/desk2.jpg");
            break;
        case "jack4":
            //if g.pass === 2
            nav.bg("218_masturbate/desk3.jpg");
            sc.setstep("cecilia", 1);//verfiy this
            break;
        default:
            break;
    }
};

room218.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Fuck! I'm so horny. I don't think I can concentrate on my work with this raging hardon! ",
            button: [
                { chatID: 1, text: "...", callback: "pants" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Maybe I could just jack it really quick. I'm sure no one will notice if I'm careful.  ",
            button: [
                { chatID: -1, text: "Jack off", callback: "jack1" },
                { chatID: -1, text: "Too dangerous. Don't jack off. ", callback: "backToWork" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I'll just do small strokes so " + sc.n("cecilia") + " doesn't notice...",
            button: [
                { chatID: 3, text: "...", callback: "jack2" },
            ]
        },
        {
            chatID: 3,
            speaker: "cecilia",
            text: "What are you doing? ",
            button: [
                { chatID: 4, text: "GULP! oh no", callback: "jack3" },
            ]
        },
        {
            chatID: 3,
            speaker: "cecilia",
            text: "Are you wasting cum!  ",
            button: [
                { chatID: 4, text: "Wha...", callback: "jack3" },
            ]
        },
        {
            chatID: 4,
            speaker: "cecilia",
            text: "Mmmmmmm Yummy cummies! ",
            button: [
                { chatID: 5, text: "How did you...", callback: "jack4" },
            ]
        },
        {
            chatID: 5,
            speaker: "cecilia",
            text: "Never waste cum like that again! Next time you need to get off, let me know! ",
            button: [
                { chatID: 6, text: "Oh. I will", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "cecilia",
            text: "Now back to work mister! ",
            button: [
                { chatID: -1, text: "Yeah", callback: "backToWork" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};