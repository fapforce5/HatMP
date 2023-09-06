//anal
var room175 = {};
room175.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "anal101":
            if (gv.get("sissySchoolClassDays") === 0) {
                nav.bg("175_anal/anal0.jpg")
                chat(0, 175);
            }
            break;
    }
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "175_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 175);
    //});
    //nav.buildnav(navList);
};

room175.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room175.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room175.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "p",
            text: "Ok my little butt sluts! Each one of you is going to bend over and take the pink torpedo all the way " +
                "up to 'Porn Star.' After that warm up, we're going to really start having fun with those butts! When I'm " +
                "done with today your colons are going to be hanging out of your hugh gaping assholes. Are you ready for " +
                "the most intense pain of your worthless sissy lives?",
            button: [
                { chatID: 1, text: "", callback: "anal1" }
            ]
        },
        {
            chatID: 1,
            speaker: "p",
            text: "Oh. That was a joke. Guess I have to wake him. ",
            button: [
                { chatID: 1, text: "", callback: "anal1" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};