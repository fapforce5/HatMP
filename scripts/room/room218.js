//Room name
var room218 = {};
room218.main = function () {
    if (gv.get("arousal") < 50) {
        char.room(missy.jobs[g.pass].page);
    }
    else if (cl.c.chastity !== null) {
        switch (g.pass) {
            case 0:
                nav.bg("201_bathroom/bg0.jpg");
                chat(14, 218);
                break;
            case 1:
                nav.bg("218_masturbate/file.jpg")
                chat(15, 218);
                break;
            case 2:
                nav.bg("219_dataEntry/bg.jpg");
                chat(16, 218);
                break;
            case 3:
                char.room(missy.jobs[g.pass].page);
                //chat(11, 218);
                break;
            case 4:
                char.room(missy.jobs[g.pass].page);
                break;
            default:
                char.room(missy.jobs[g.pass].page);
                break;
        }
    }
    else {
        switch (g.pass) {
            case 0:
                nav.bg("218_masturbate/bathroom0.jpg");
                chat(8, 218);
                break;
            case 1:
                char.room(missy.jobs[g.pass].page);
                break;
            case 2:
                nav.bg("219_dataEntry/bg.jpg");
                chat(0, 218);
                break;
            case 3:
                nav.bg("218_masturbate/recep0.jpg");
                chat(11, 218);
                break;
            case 4:
                char.room(missy.jobs[g.pass].page);
                break;
            default:
                char.room(missy.jobs[g.pass].page);
                break;

        }

        //chat(0, 218);
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
            nav.bg("218_masturbate/desk1.jpg");
            break;
        case "jack3":
            //if g.pass === 2
            nav.bg("218_masturbate/desk2.jpg");
            break;
        case "jack4":
            levels.gotbj("n", "cecilia");
            nav.bg("218_masturbate/desk3.jpg");
            //sc.setstep("cecilia", 1);//verfiy this
            break;
        case "bathroom1":
            nav.bg("218_masturbate/bathroom1.jpg");
            break;
        case "bathroom2":
            nav.bg("218_masturbate/bathroom2.jpg");
            cl.doCum(false);
            break;
        case "recep1":
            nav.bg("218_masturbate/recep1.jpg");
            break;
        case "recep2":
            nav.bg("218_masturbate/recep2.jpg");
            cl.doCum(false);
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
            chatID: 4,
            speaker: "cecilia",
            text: "Are you wasting cum!  ",
            button: [
                { chatID: 5, text: "Wha...", callback: "jack3" },
            ]
        },
        {
            chatID: 5,
            speaker: "cecilia",
            text: "Mmmmmmm Yummy cummies! ",
            button: [
                { chatID: 6, text: "How did you...", callback: "jack4" },
            ]
        },
        {
            chatID: 6,
            speaker: "cecilia",
            text: "Never waste cum like that again! Next time you need to get off, let me know! ",
            button: [
                { chatID: 7, text: "Oh. I will", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Now back to work mister! ",
            button: [
                { chatID: -1, text: "Yeah", callback: "backToWork" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I'm so fucking horny! I need to fuck something so bad! ",
            button: [
                { chatID: 9, text: "Jack off", callback: "bathroom1" },
                { chatID: -1, text: "Too dangerous. Don't jack off. ", callback: "backToWork" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Ffffuuuuuu ",
            button: [
                { chatID: 10, text: "I'm gunna cum!", callback: "bathroom2" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Gross. I guess I'll start my cleaning getting my cum off the floor. ",
            button: [
                { chatID: -1, text: "...", callback: "backToWork" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Fuck I'm horny. Maybe I could rub one out here and get away with it... ",
            button: [
                { chatID: 12, text: "Jack off", callback: "recep1" },
                { chatID: -1, text: "Too dangerous. Don't jack off. ", callback: "backToWork" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "Ffffuuuuuu ",
            button: [
                { chatID: 13, text: "I'm gunna cum!", callback: "recep2" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Gross. I better clean that cum off the monitor. ",
            button: [
                { chatID: -1, text: "...", callback: "backToWork" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "FUCK! I can feel my dick pressing against my cage! I need to get this thing off! ",
            button: [
                { chatID: -1, text: "...", callback: "backToWork" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: sc.n("missy") + " looks like she's hurtin' for a squirtin'. I wonder if she'd take off my chastity and blow " +
                "me if I pulled down my pants? ",
            button: [
                { chatID: -1, text: "...", callback: "backToWork" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "I wish I could get one of those blow jobs from " + sc.n("cecilia") + "! Stupid fucking chastity! ",
            button: [
                { chatID: -1, text: "...", callback: "backToWork" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};