//mistress bathroom
var room201 = {};
room201.main = function () {
    nav.button({
        "type": "btn",
        "name": "shower",
        "left": 722,
        "top": 284,
        "width": 351,
        "height": 602,
        "image": "201_bathroom/shower.png"
    }, 201);
    nav.button({
        "type": "btn",
        "name": "toilet",
        "left": 1168,
        "top": 714,
        "width": 135,
        "height": 164,
        "image": "201_bathroom/toilet.png"
    }, 201);
    nav.button({
        "type": "btn",
        "name": "sink",
        "left": 1326,
        "top": 611,
        "width": 388,
        "height": 469,
        "image": "201_bathroom/sink.png"
    }, 201);
    var navList = [203];
    nav.buildnav(navList);

};

room201.btnclick = function (name) {
    switch (name) {
        case "toilet":
            g.pass = 201;
            char.room(22);
            break;
        case "shower":
            nav.killall();
            cl.c.cumface = false;
            cl.nude();
            zcl.displayMain(0, 400, .22, "shower", false);
            nav.bg("201_bathroom/shower.jpg");
            if (cl.c.bodyhair < -999)
                chat(1, 201);
            else if (inv.get("razor").count > 0)
                chat(0, 201);
            else
                chat(1, 201);

            break;
        case "sink":
            g.pass = 201;
            char.room(27);
            break;
        default:
            break;
    }
};

room201.chatcatch = function (callback) {
    switch (callback) {
        case "shaveBody":
            cl.shave();
            inv.use("razor");
            zcl.displayMain(0, 400, .22, "shower", false);
            cl.display();
            daily.set("shower");
            break;
        case "finishShowering":
            cl.undo();
            daily.set("shower");
            char.room(201);
            break;
        //case "step2FinishCleaning":
        //    char.addtime(8 * 60);
        //    nav.button({
        //        "type": "btn",
        //        "name": "missyStep2",
        //        "left": 400,
        //        "top": 0,
        //        "width": 787,
        //        "height": 1080,
        //        "image": "201_bathroom/201_missyback.png"
        //    }, 201);
        //    break;
        //case "spotless":
        //    nav.button({
        //        "type": "btn",
        //        "name": "missyStep2",
        //        "left": 0,
        //        "top": 0,
        //        "width": 1920,
        //        "height": 1080,
        //        "image": "201_bathroom/201_bathroom_spot_close.jpg"
        //    }, 201);
        //    break;
        //case "step2Change":
        //    sc.setstep("missy", 3);
        //    char.room(200);
        //    break;
        //case "finishClean":
        //    g.pass = "normalFlow";
        //    char.room(202);
        //    break;
        //case "11Clean":
        //    nav.button({
        //        "type": "img",
        //        "name": "missyStep2",
        //        "left": 400,
        //        "top": 0,
        //        "width": 787,
        //        "height": 1080,
        //        "image": "201_bathroom/201_missyback.png"
        //    }, 201);
        //    break;
        //case "11Return":
        //    sc.setstep("missy", 17);
        //    char.room(200);
        //    break;
        //case "repeatLeave":
        //    g.pass = "bathroomRepeateLeave";
        //    char.room(200);
        //    break;
        default:
            break;
    }
};

room201.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: 2, text: "Shave your body", callback: "shaveBody" },
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "You shaved your body",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};