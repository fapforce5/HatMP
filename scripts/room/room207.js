//Room name
var room207 = {};
room207.main = function () {
    nav.button({
            "type": "btn",
            "name": "door_pink",
            "left": 33,
            "top": 216,
            "width": 157,
            "height": 751,
            "title": "Pink Pleasure Club",
            "image": "207_door/door_pink.png"
    }, 207);
    nav.button({
        "type": "btn",
        "name": "door_school",
        "left": 1650,
        "top": 288,
        "width": 91,
        "height": 633,
        "title": "Missy's Fishing School for Sissies",
        "image": "207_door/door_school.png"
    }, 207);
    
    nav.button({
        "type": "btn",
        "name": "door_outside",
        "left": 740,
        "top": 439,
        "width": 342,
        "height": 311,
        "title": "Exterior Doors",
        "image": "207_door/door_outside.png",
        "night": "207_door/door_outside_night.png"
    }, 207);
    nav.buildnav([203, 0]);
};

room207.btnclick = function (name) {
    switch (name) {
        case "door_pink":
            if (gv.get("pinkroomopen")) {
                char.room(213);
                return;
            }
            chat(1, 207);
            break;
        case "door_school":
            chat(2, 207);
            break;
        case "door_outside":
            char.room(0);
            break;
        default:
            break;
    }
};

room207.chatcatch = function (callback) {
    switch (callback) {
        case "enterRed":
            break;
        default:
            break;
    }
};

room207.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Welcome to the Pink Level of Pleasure. To enter you you must be your most beautiful self. [In progress]",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: "Only the finest people and dirtiest whores are allowed in here; you are neither.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: sissy.st[17].ach ? "Schools only open on Tuesdays and Thursdays after you've worked for Missy." : "You have to be a student to enter the class. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};