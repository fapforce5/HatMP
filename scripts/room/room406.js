//Room name
var room406 = {};
room406.main = function () {
    var btnList;
    if (cl.isLewd()) {
        btnList = [
            {
                "type": "img",
                "name": "doc",
                "left": 881,
                "top": 166,
                "width": 673,
                "height": 806,
                "image": "406_eyes/docx.png"
            }
        ];
        chat(7, 406);
    }
    else {
        btnList = [
            {
                "type": "btn",
                "name": "doc",
                "left": 881,
                "top": 166,
                "width": 673,
                "height": 806,
                "image": "406_eyes/doc.png"
            }
        ];
    }
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 406);
    });
   
    nav.buildnav(navList);
};

room406.btnclick = function (name) {
    switch (name) {
        case "doc":
            if (gv.get("money") < 180)
                chat(0, 406);
            else {
                sc.selectBg("406bg");
                sc.select("blue", "406_eyes/icon_blue.png", 0);
                sc.select("brown", "406_eyes/icon_brown.png", 1);
                sc.select("gray", "406_eyes/icon_gray.png", 2);
                sc.select("green", "406_eyes/icon_green.png", 3);
                sc.select("hazel", "406_eyes/icon_hazel.png", 4);
                sc.select("lightblue", "406_eyes/icon_lightblue.png", 5);
                sc.select("purple", "406_eyes/icon_purple.png", 6);
                sc.selectCancel("cancel", 7);
            }
            break;
            case "blue":
        case "brown":
        case "gray":
        case "green":
        case "hazel":
        case "lightblue":
        case "purple":
            room406.btnclick("cancel");
            gv.mod("money", -40);
            cl.c.eyes = name;
            cl.display();
            chat(5, 406);
            break;
        case "cancel":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "doc",
                "left": 881,
                "top": 166,
                "width": 673,
                "height": 806,
                "image": "406_eyes/doc.png"
            }, 406);
            nav.buildnav([0]);
            break;
        default:
            break;
    }
};

room406.chatcatch = function (callback) {
    switch (callback) {
        case "brown":
        case "blue":
        case "green":
        case "gray":
        case "lightblue":
        case "hazel":
            cl.c.eyes = callback;
            gv.mod("money", -180);
            cl.display();
            break;
        case "look":
            zcl.displayMain(-60, -200, .65, "panties shirt pants socks shoes bra", false);
            break;
        case "kill":
            nav.killbutton("zzz-clothing-kill");
            nav.buildnav([0]);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room406.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Hi young one. Do you want some new contacts?",
            button: [
                { chatID: 1, text: "I do", callback: "" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "Sorry honey, you need $180 for a pair of new contacts.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "Hi young one. Do you want some new contacts?",
            button: [
                { chatID: 3, text: "I do", callback: "" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "What color do you want?",
            button: [
                { chatID: 5, text: '<img src="./images/room/406_eyes/brown.jpg"/> Brown', callback: "brown" },
                { chatID: 5, text: '<img src="./images/room/406_eyes/blue.jpg"/> Blue', callback: "blue" },
                { chatID: 5, text: '<img src="./images/room/406_eyes/green.jpg"/> Green', callback: "green" },
                { chatID: 4, text: "See other choices", callback: "" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "random",
            text: "What color do you want?",
            button: [
                { chatID: 5, text: '<img src="./images/room/406_eyes/gray.jpg"/> Gray', callback: "gray" },
                { chatID: 5, text: '<img src="./images/room/406_eyes/lblue.jpg"/> Light Blue', callback: "lightblue" },
                { chatID: 5, text: '<img src="./images/room/406_eyes/hazel.jpg"/> Hazel', callback: "hazel" },
                { chatID: 3, text: "See other choices", callback: "" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Why don't we look at your pretty new eyes!",
            button: [
                { chatID: 6, text: '[Check out your new eyes]', callback: "look" }
            ]
        },
        {
            chatID: 6,
            speaker: "random",
            text: "They're so pretty.",
            button: [
                { chatID: -1, text: '...', callback: "kill" }
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "You filthy slut! Get out of my store RIGHT NOW!!!!",
            button: [
                { chatID: -1, text: 'Run away', callback: "leave" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};