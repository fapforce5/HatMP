//Room name
var room150 = {};
room150.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "door",
            "left": 931,
            "top": 452,
            "width": 252,
            "height": 221,
            "image": "150_jones/door.png",
            "night": "150_jones/doorNight.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 150);
    });
    nav.buildnav(navList);
};

room150.btnclick = function (name) {
    switch (name) {
        case "door":
            nav.button({
                "type": "img",
                "name": "jones",
                "left": 974,
                "top": 107,
                "width": 515,
                "height": 973,
                "image": "150_jones/jones.png"
            }, 150);
            var onc = gv.get("oncase");
            if (onc === "clothes0") {
                chat(3, 150);
            }
            else if (onc === "clothes1") {
                chat(4, 150);
            }
            else if (onc === "clothes2" || onc === "clothes3") {
                if (cl.c.panties === null && cl.c.bra === null)
                    chat(4, 150);
                else
                    chat(5, 150);
            }
            else if (g.sissy[34].ach) {
                char.room(152);
            }
            else {
                chat(0, 150);
            }
            break;
        default:
            break;
    }
};

room150.chatcatch = function (callback) {
    switch (callback) {
        case "enter":
            g.pass = "";
            char.room(151);
            break;
        default:
            break;
    }
};

room150.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jones",
            text: "Did you come to serve me?",
            button: [
                { chatID: 1, text: "Yes sir", callback: "" },
                { chatID: -1, text: "oh no", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jones",
            text: "If you serve me know I will not give a fuck about you your boundaries, or your dignity. I will slap your ass when you walk by and laugh " +
                "when you tell me to stop. Put you in whatever clothes I want. I'll jerk off into your food as you eat it. I'll pull your sissy clit out when you try talk. Casually spit in your " +
                "face everytime we go out. Piss on you while you sleep and take you whenever I want. You aren't my equal, I will never respect you. I will treat " +
                "you like my inferior play thing to use and discard as I see fit. Are you ready my toy?",
            button: [
                { chatID: 2, text: "Yes sir", callback: "" },
                { chatID: -1, text: "oh wow... uhhh no way", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "jones",
            text: "Good slut. You're not ready to serve me until  you've proven yourself worthy to wear my piss infront of " +
                "a croud of people. Now tell me what a dirty slut you are and fuck off",
            button: [
                { chatID: -1, text: "I'm such a dirty dirty slut!", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "jones",
            text: sc.n("p") + " told me you were participating. Come in. ",
            button: [
                { chatID: -1, text: "Yes sir. ", callback: "enter" },
            ]
        },
        {
            chatID: 4,
            speaker: "jones",
            text: "I knew you would return, whore. Report downstairs for your next assignment. ",
            button: [
                { chatID: -1, text: "Yes sir. ", callback: "enter" }
            ]
        },
        {
            chatID: 5,
            speaker: "jones",
            text: "I can see your panty line. Remove those awful panties and bra and come back. ",
            button: [
                { chatID: -1, text: "Oh, sorry, yes sir. ", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
