//Room name
var room151 = {};
room151.main = function () {
    if (g.get("oncase") === "clothes0") {
        if (g.pass === 151) {
            nav.bg("151_jones/changeRoomx.jpg");
            if (cl.c.lipstick === null || cl.c.makeup === null || cl.c.makeup === "n")
                chat(4, 151);
            else
                chat(5, 151);
        }
        else {
            nav.bg("151_jones/mainx.jpg");
            chat(0, 151);
        }
    }
};

room151.btnclick = function (name) {
    switch (name) {
        case "clothes0_2":
            g.pass = 151;
            char.room(27);
            break;
        default:
            break;
    }
};

room151.chatcatch = function (callback) {
    switch (callback) {
        case "clothes0_1":
            nav.killall();
            nav.bg("151_jones/changeRoomx.jpg");
            break;
        case "clothes0_2":
            nav.killall();
            nav.bg("151_jones/changeRoom.jpg");
            nav.button({
                "type": "btn",
                "name": "clothes0_2",
                "left": 1101,
                "top": 0,
                "width": 769,
                "height": 350,
                "image": "151_jones/mirror.png"
            }, 151);
            break;
        case "changeRoomxd":
            nav.bg("151_jones/changeRoomxd.jpg");
            break;
        case "changeRoomxd1":
            cl.c.shirt = cl.c.pants = cl.c.swimsuit = cl.c.pj = null;
            cl.c.dress = "rose";
            cl.display();
            nav.bg("151_jones/changeRoomx.jpg");
            break;
        default:
            break;
    }
};

room151.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jones",
            text: "Hi slut, are you ready to do the fashion show?",
            button: [
                { chatID: 1, text: "oh, yeah", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jones",
            text: "Good. Head downstairs and wait. The girls will get you when it's time. ",
            button: [
                { chatID: 2, text: "Sure", callback: "clothes0_1" }
            ]
        },
        {
            chatID: 2,
            speaker: "govlady",
            text: "So we have ourselves a catwalk virgin. Go sit at the mirror and get your makup done. I'm looking for sexy slutty. " +
                "Chop chop. ",
            button: [
                { chatID: 3, text: "Don't I know you from somewhere?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "govlady",
            text: "I don't have time for idle chatter. Hurry up dear. ",
            button: [
                { chatID: -1, text: "ok", callback: "clothes0_2" }
            ]
        },
        {
            chatID: 4,
            speaker: "govlady",
            text: "I don't have time to micromanage you. Put on some lipstick and makeup. ",
            button: [
                { chatID: -1, text: "oh, ok.", callback: "clothes0_2" }
            ]
        },
        {
            chatID: 5,
            speaker: "govlady",
            text: "I suppose that will work.  ",
            button: [
                { chatID: 6, text: "ok", callback: "changeRoomxd" }
            ]
        },
        {
            chatID: 6,
            speaker: "govlady",
            text: "Now put this on. ",
            button: [
                { chatID: 7, text: "[Put on dress]", callback: "changeRoomxd1" }
            ]
        },
        {
            chatID: 7,
            speaker: "govlady",
            text: "Ok. Follow me to your place. " + sc.n("p") + " told me you already had training on how to walk like a lady. " +
                "remember that training and make this dress sexy. ",
            button: [
                { chatID: 6, text: "Oh.. but...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "govlady",
            text: "I told you I don't have time for your jibber-jabber. Follow me and stay sexy. ",
            button: [
                { chatID: 8, text: "[Follow her]", callback: "changeRoomxd2" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};