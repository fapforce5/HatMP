//Girls Lockerroom
var room902 = {};
room902.main = function () {
    if (cl.appearance() < 2) {
        nav.button({
            "type": "img",
            "name": "woman",
            "left": 1273,
            "top": 48,
            "width": 410,
            "height": 1057,
            "image": "452_parkWomansRoom/woman.png"
        }, 902);
        chat(0, 902);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "lolalocker",
                "left": 1176,
                "top": 197,
                "width": 166,
                "height": 476,
                "image": "902_girl/lolalocker.png"
            }
        ];
        if (!inv.has("studentid")) {
            btnList.push({
                "type": "btn",
                "name": "sudentid",
                "left": 552,
                "top": 666,
                "width": 84,
                "height": 18,
                "image": "902_girl/studentid.png"
            });
        }
        var navList = [0, 901];
        $.each(btnList, function (i, v) {
            nav.button(v, 902);
        });
        nav.buildnav(navList);
    }
};

room902.btnclick = function (name) {
    switch (name) {
        case "lolalocker":
            nav.killbutton("lolalocker");
            nav.bg("902_girl/locker.jpg");
            nav.button({
                "type": "btn",
                "name": "lock",
                "left": 1078,
                "top": 850,
                "width": 136,
                "height": 198,
                "image": "902_girl/lock.png"
            }, 902);
            
            break;
        case "sudentid":
            nav.killall();
            inv.add("studentid");
            nav.button({
                "type": "img",
                "name": "sudentid1",
                "left": 618,
                "top": 207,
                "width": 684,
                "height": 507,
                "image": "902_girl/studentid1.png"
            }, 902);
            chat(2, 902);
            break;
        case "lock":
            if (inv.has("lolalocker")) {
                //locker
            }
            else
                chat(1, 902);
            break;
        default:
            break;
    }
};

room902.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(901);
            break;
        case "resest":
            
            char.room(902);
            break;
        default:
            break;
    }
};

room902.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "AAAAAAAAAaaaaaaaaaaaaaaaaa WHAT ARE YOU DOING IN HERE! GET OUT!!!!",
            button: [{ chatID: -1, text: "Oh crap! I'm not a dirty pervert! Sorry", callback: "leave" }]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Oh nice, it's " + sc.n("lola") + "'s locker. Hmmm I wonder what the combination is...[In development]",
            button: [{ chatID: -1, text: "...", callback: "" }]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Oh, Cindy left her student ID here. Maybe I'll just hold onto this for now. ",
            button: [{ chatID: -1, text: "...", callback: "resest" }]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};