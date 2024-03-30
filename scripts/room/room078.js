//Room name
var room78 = {};
room78.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "laundry",
            "left": 744,
            "top": 450,
            "width": 1176,
            "height": 630,
            "image": "78_bimbolaundry/laundry.png"
        }
    ];
    var navList = [0, 76, 77];
    $.each(btnList, function (i, v) {
        nav.button(v, 78);
    });
    nav.buildnav(navList);
};

room78.btnclick = function (name) {
    switch (name) {
        case "laundry":
            if (missy.activecase().name === "case_bimbopanties" || missy.cases[12].complete) {
                if (cl.hasClothing("panties", "bi")) {
                    chat(0, 78);
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "panties",
                        "left": 396,
                        "top": 164,
                        "width": 1440,
                        "height": 755,
                        "image": "78_bimbolaundry/panties.png"
                    }, 78);
                    chat(1, 78);
                }
            }
            else {
                chat(2, 78);
            }
            break;
        default:
            break;
    }
};

room78.chatcatch = function (callback) {
    switch (callback) {
        case "steal":
            if (missy.activecase().name === "case_bimbopanties") {
                missy.set("activeCaseComplete", 1);
            }
            cl.add("panties", "bi");
            char.room(78);
            break;
        case "reset":
            char.room(78);
            break;
        default:
            break;
    }
};

room78.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I've already stolen her dirty musky panties.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Should I steal her dirty panties. They do have a strong smell of pussy and " +
                "ass. ",
            button: [
                { chatID: -1, text: "Steal her dirty panties. ", callback: "steal" },
                { chatID: -1, text: "Put them back.", callback: "reset" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Just a pile of dirty clothes. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};