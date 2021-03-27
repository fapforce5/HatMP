//Boys lockerroom
var room903 = {};
room903.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "903_folder/hole.png"
    //    }
    //];
    
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 903);
    //});
    var haso = cl.hasoutfit("public");
    if (haso === null) {
        var navList = [0, 901];
        nav.buildnav(navList);
    }
    else {
        g.internal = haso;
        chat(999, 903);
    }
};

room903.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room903.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(901);
            break;
        default:
            break;
    }
};

room903.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "thinking",
            text: "I can't go out like this. " + g.internal,
            button: [{ chatID: -1, text: "Get Dressed", callback: "" }]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: "AAAAAAAAAaaaaaaaaaaaaaaaaa WHAT ARE YOU DOING IN HERE! GET OUT!!!!",
                button: [{ chatID: -1, text: "Oh crap! I'm not a dirty pervert! Sorry", callback: "leave" }]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};