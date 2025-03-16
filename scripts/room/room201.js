//mistress bathroom
var room201 = {};
room201.main = function () {

    //if (g.internal === "201 change") {
    //    var canGoOut = cl.hasoutfit("public");
    //    if (canGoOut === null)
    //        nav.buildnav([203]);
    //    else {
    //        nav.bg("201_bathroom/change.jpg");
    //        g.pass = canGoOut;
    //        chat(11, 201);
    //    }
    //}
    //else if (g.pass === "cleanbathroom") {
    //    g.pass = "";
    //    nav.button({
    //        "type": "btn",
    //        "name": "clothes",
    //        "left": 1019,
    //        "top": 746,
    //        "width": 184,
    //        "height": 334,
    //        "image": "201_bathroom/201_panties.png"
    //    }, 201);
    //    chat(0, 201);
    //}
    //else if (g.pass === "repeatBathroom") {
    //    nav.button({
    //        "type": "btn",
    //        "name": "clothes",
    //        "left": 1019,
    //        "top": 746,
    //        "width": 184,
    //        "height": 334,
    //        "image": "201_bathroom/201_panties.png"
    //    }, 201);
    //    chat(9, 201);
    //}
    //else {
    //nav.button({
    //    "type": "btn",
    //    "name": "toilet",
    //    "left": 1167,
    //    "top": 714,
    //    "width": 135,
    //    "height": 164,
    //    "image": "201_bathroom/toilet.png"
    //}, 201);
   
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
        case "shower":
            nav.killall();
            cl.c.cumface = false;
            cl.nude();
            zcl.displayMain(0, 400, .22, "shower", false);
            nav.bg("201_bathroom/shower.jpg");
            if (inv.get("razor").count > 0)
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
        },
        //{
        //    chatID: 0,
        //    speaker: "me",
        //    text: "I can't believe I'm cleaning her bathroom, the pay is so not worth it, and I'm doing it in a suit. " +
        //        "I wonder what the reward will be. I hope it's good. It better be good.   ",
        //    button: [
        //        { chatID: 1, text: "Finish cleaning bathroom", callback: "step2FinishCleaning" }
        //    ]
        //},
        //{
        //    chatID: 1,
        //    speaker: "missy",
        //    text: "So, you think you're done cleaning? ",
        //    button: [
        //        { chatID: 2, text: "Yes ma'am", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 2,
        //    speaker: "missy",
        //    text: "Sigh...  You spent the better part of a day cleaning this one small bathroom and you can't even do that right." +
        //        "",
        //    button: [
        //        { chatID: 3, text: "What? I spent all day cleaning this bathroom; it's spotless!", callback: "changeBG" }
        //    ]
        //},
        //{
        //    chatID: 3,
        //    speaker: "missy",
        //    text: "There's a spot right there. ",
        //    button: [
        //        { chatID: 4, text: "Where??", callback: "spotless" }
        //    ]
        //},
        //{
        //    chatID: 4,
        //    speaker: "missy",
        //    text: "See it. That's disgusting. You can't even do a simple task like cleaning the bathroom. It looks like I'm going " +
        //        "to have to train you harder. Meet me in my office.",
        //    button: [
        //        { chatID: -1, text: "Yes ma'am", callback: "step2Change" }
        //    ]
        //},
        //{
        //    chatID: 5,
        //    speaker: "me",
        //    text: "Hi ho, Hi ho, it's off to scrubbing toilets I go, with a scrubby sponge and a toilet plunger hi ho, hi ho hi ho...",
        //    button: [
        //        { chatID: 6, text: "[Continue Cleaning]", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 6,
        //    speaker: "missy",
        //    text: "That's a nice little song you have. I suppose you deserve a reward for your a job well done. ",
        //    button: [
        //        { chatID: 6, text: "[Get your reward]", callback: "finishClean" }
        //    ]
        //},
        //{
        //    chatID: 7,
        //    speaker: "me",
        //    text: "Hi ho, Hi ho, it's off to scrubbing toilets I go, with a scrubby sponge and a toilet plunger hi ho, hi ho hi ho...",
        //    button: [
        //        { chatID: 8, text: "[Continue Cleaning]", callback: "11Clean" }
        //    ]
        //},
        //{
        //    chatID: 8,
        //    speaker: "missy",
        //    text: "I hate that song. Come to my office " + sc.n("jeffery") + " and I have worked out the details.",
        //    button: [
        //        { chatID: -1, text: "[Finish Cleaning]", callback: "11Return" }
        //    ]
        //},
        //{
        //    chatID: 9,
        //    speaker: "me",
        //    text: "Hi ho, Hi ho, it's off to scrubbing toilets I go, with a scrubby sponge and a toilet plunger hi ho, hi ho hi ho...",
        //    button: [
        //        { chatID: 10, text: "[Continue Cleaning]", callback: "11Clean" }
        //    ]
        //},
        //{
        //    chatID: 10,
        //    speaker: "missy",
        //    text: "I still hate that song " + gv.get("girlname") + ". Time to get paid.",
        //    button: [
        //        { chatID: -1, text: "[Continue Cleaning]", callback: "repeatLeave" }
        //    ]
        //},
        //{
        //    chatID: 11,
        //    speaker: "me",
        //    text: "I can't go out like this. I need my " + g.pass + ". ",
        //    button: []
        //},
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};