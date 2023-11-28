//Hospital waiting room
var room700 = {};
room700.main = function () {
    if (gv.get("jobapplynurse") === 1) {
        nav.button({
            "type": "btn",
            "name": "bimboapply",
            "left": 1029,
            "top": 407,
            "width": 185,
            "height": 256,
            "image": "700_waitingroom/bimbo.png"
        }, 700);
    }
    else {
        //g.internal = "";
        //if (sc.bimbo().thisRoom) {
            nav.button({
                "type": "btn",
                "name": "bimbo",
                "left": 1029,
                "top": 407,
                "width": 185,
                "height": 256,
                "image": "700_waitingroom/bimbo.png"
            }, 700);
        //}
    }
    var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 700);
    //});
    nav.buildnav(navList);
};

room700.btnclick = function (name) {
    switch (name) {
        case "bimbo":
            chat(0, 700);
            //var sissyTrans = gv.get("oncase");
            //if (sissyTrans === "bigboobs" || sissyTrans === "bigass" || sissyTrans === "dslLips" || sissyTrans === "smolpp")
            //    chat(2, 700);
            //else if (cl.c.chest > 1 || cl.c.leg > 0)
            //    chat(0, 700);
            ////else if (cl.c.cock > 0)
            ////    chat(1, 700);
            //else
            //    chat(2, 700);
            break;
        case "bimboapply":
            chat(3, 700);
            break;
        default:
            break;
    }
};

room700.chatcatch = function (callback) {
    switch (callback) {
        case "boob":
        case "butt":
            if (gv.get("money") < 100)
                chat(4, 700);
            else {
                g.internal = callback;
                gv.mod("money", -100);
                chat(6, 700);
            }
            break;
        case "follow":
            char.changeMenu("body", false, true);
            nav.killall();
            nav.bg("701_hospitalroom/rooms.jpg");
            if (g.internal === "boob")
                chat(7, 700);
            else
                chat(8, 700);
            break;
        case "smalltits":
            char.changeMenu("body", false, true);
            cl.c.chest -= 1;
            if (cl.c.chest < 1)
                cl.c.chest = 1;
            cl.display();
            break;
        case "smallass":
            char.changeMenu("body", false, true);
            cl.c.leg -= 1;
            if (cl.c.leg < 0)
                cl.c.leg = 0;
            cl.display();
            break;
        case "nurseApply":
            levels.mod("xdress", 5, 1);
            gv.set("jobapplynurse", 2);
            char.room(700);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room700.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bimbo",
            text: "Hi. What can I help you with.  ",
            button: [
                { chatID: -1, text: "Nothing, just looking around. ", callback: "" },
                { chatID: 8, text: "Ummm, I don't feel well. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "You have a great body, really manly, but... I feel like you could use a bigger cock. Come to the back room with me " +
                "and we'll make that cock of your big and meaty!",
            button: [
                { chatID: -1, text: "In development", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "Baby you're perfect. If you come to the back room I'll show you how to use that perfect body and cock on this " +
                "perfect little pussy.",
            button: [
                { chatID: -1, text: "In development", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "I applied online to be a nurse. ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "Hmmmm. Funny you don't look like a girl. Are you one of those butch type girls, 'cause we " +
                "don't hire those butch type girls. ",
            button: [
                { chatID: 5, text: "Oh no. I'm just a boy. ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "bimbo",
            text: "Oh. I thought you said nurse. I'm so silly. We're not hiring any doctors now. ",
            button: [
                { chatID: 6, text: "Oh no. I'm a boy and I applied to be a nurse. ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "bimbo",
            text: "Why would a boy be a nurse? You should be a doctor. It pays much better. Do you have your " +
                "MD?",
            button: [
                { chatID: 7, text: "No. I don't have an MD. I want to be a nurse. ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "bimbo",
            text: "You can't be a nurse silly. You're a boy. ",
            button: [
                { chatID: -1, text: "ARG! Never mind!", callback: "nurseApply" }
            ]
        },
        {
            chatID: 8,
            speaker: "bimbo",
            text: "Oh you poor thing. What seems to be the problem? ",
            button: [
                { chatID: 9, text: "My tummy hurts", callback: "" },
                { chatID: -1, text: "I have a general pain all over. ", callback: "" },
                { chatID: -1, text: "Oh anus hurts. ", callback: "" },
                { chatID: -1, text: "My balls are too full", callback: "" },
                
            ]
        },
        {
            chatID: 9,
            speaker: "bimbo",
            text: "Here's some pills to help with your tummy. ",
            button: [
                { chatID: 9, text: "My tummy hurts", callback: "" },
                { chatID: -1, text: "I have a general pain all over. ", callback: "" },
                { chatID: -1, text: "Oh anus hurts. ", callback: "" },
                { chatID: -1, text: "My balls are too full", callback: "" },

            ]
        },




        {
            chatID: 3,
            speaker: "bimbo",
            text: "Yippie!!!! What do you want to change, only $100.",
            button: [
                { chatID: -1, text: "I want a breast reduction.", callback: "boob" },
                { chatID: -1, text: "I want a butt reduction.", callback: "butt" },
                { chatID: 5, text: "I want a bigger cock!", callback: "" },
                { chatID: -1, text: "Wait.... I'm a stupid slut, I don't need your poison!", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "Sorry honey. Nothing is free. Come back when you can pay. ",
            button: [
                { chatID: -1, text: "I'm a stupid slut. Bye.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "bimbo",
            text: "Nope! A slut like you needs to go smaller!",
            button: [
                { chatID: -1, text: "I am a stupid slut. ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "bimbo",
            text: "Follow me to your new body. ",
            button: [
                { chatID: 7, text: "Yes!", callback: "follow" }
            ]
        },
        {
            chatID: 7,
            speaker: "bimbo",
            text: "This is a placeholder event, but here's smaller tits. ",
            button: [
                { chatID: 9, text: "Yea!", callback: "smalltits" }
            ]
        },
        {
            chatID: 8,
            speaker: "bimbo",
            text: "This is a placeholder event, but here's smaller ass. ",
            button: [
                { chatID: 9, text: "Yea!", callback: "smallass" }
            ]
        },
        {
            chatID: 9,
            speaker: "bimbo",
            text: "Tits, pussy, boi pussy, fuck shit piss.... I'll make this sexy in a future release. Pussy. Now get the fuck out. ",
            button: [
                { chatID: -1, text: "I'm a cock sucker!", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};