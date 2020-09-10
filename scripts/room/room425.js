//Room name
var room425 = {};
room425.main = function () {
    $('.display-top').hide();
    var btnList = [
        {
            "type": "img",
            "name": "cell",
            "left": 897,
            "top": 36,
            "width": 600,
            "height": 938,
            "image": "425_Jail/cell.png"
        }
    ];
    cl.c.swimsuit = null;
    cl.c.dress = null;
    cl.c.pants = "p";
    cl.c.shirt = "j";
    cl.display();
    zcl.displayMain(180, 980, .09, "panties shirt pants socks shoes bra", false);
    $.each(btnList, function (i, v) {
        nav.button(v, 425);
    });

    chat(0, 425);
    char.addtime(4320);
    char.settime(22, 21);
    g.set("energy", 0);
    g.set("arousal", 0);
    g.mod("hormone", -20);
};

room425.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room425.chatcatch = function (callback) {
    switch (callback) {
        case "callcop":
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 250,
                "top": 39,
                "width": 784,
                "height": 1041,
                "image": "452_parkWomansRoom/cop.png"
            }, 425);
            break;
        case "leave":
            $('.display-top').show();
            char.room(0);
            break;
        default:
            break;
    }
};

room425.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I can't beleive I've been in this cell for 3 days...",
            button: [
                { chatID: 1, text: "...", callback: "callcop" }
            ]
        },
        {
            chatID: 0,
            speaker: "cop2",
            text: "You're lucky you get your own cell... this time (for this release). You better behave yourself or you may get a cell mate. You're free to go." +
            "You don't get to change, you gotta wear the uniform out, cause fuck you, that's why.",
            button: [
                { chatID: -1, text: "ok, I guess I'll go", callback: "leave" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};