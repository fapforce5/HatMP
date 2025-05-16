//Room name
var room751 = {};
room751.main = function () {
    chat(0, 751);
    nav.buildnav([750, 0]);
};

room751.btnclick = function (name) {
    nav.kill();
    if (name === "mainMenu") {
        sc.select("icon_main", "751_crystal/icon_main.webp", 0);
        sc.select("icon_rel", "751_crystal/icon_rel.webp", 1);
        sc.select("icon_other", "751_crystal/icon_other.webp", 2);
    }
    else if (name === "icon_main") {
        chat(900, 751);
    }
    else if (name === "icon_other") {

    }
    else if (name === "icon_rel") {

    }
};

room751.chatcatch = function (callback) {
    switch (callback) {
        case "bg1":
            nav.bg("751_crystal/" + callback + ".jpg");
            break;
        case "leave":
            char.room(750);
            break;
        case "fortune":
            if (gv.get("money") < 5) {
                chat(1, 751);
                return;
            }
            gv.mod("money", -5);
            chat(2, 751);
            break;
        case "select":
            room751.btnclick("mainMenu");
            break;
        case "fortune1":
            if (gv.get("money") < 5) {
                chat(1, 751);
                return;
            }
            gv.mod("money", -5);
            room751.btnclick("mainMenu");
            break;
        default:
            break;
    }
};

room751.chat = function (chatID) {
    if (chatID === 900) {
        let storyLine = "";
        if (gv.get("jobapplyconst") > 1)
            storyLine += "Complete: ";
        storyLine += "Get a job at the construction site. Use you computer in your room to apply. <br/>";

        if (missy.get("totalDaysWorked") > 0)
            storyLine += "Complete: ";
        storyLine += "Apply at Missy's detective Agency. <br/>";

        if (missy.get("uniform") > 0)
            storyLine += "Complete: ";
        storyLine += "Find and wear panties to work. <br/>";

        if (gv.get("castitycage") !== null)
            storyLine += "Complete: ";
        storyLine += "Work Missy's cases and raise your Intelligence until you prove worthy to join the Sissy School. <br/>";

        if (sissy.st[21].ach)
            storyLine += "Complete: ";
        storyLine += "Attend the sissy school and do Missy's cases.<br/>";

        storyLine += "End of main story line";

        return {
            chatID: 0,
            speaker: "crystal",
            text: storyLine,
            button: [
                { chatID: -1, text: "I do, here's $5", callback: "fortune1" },
                { chatID: -1, text: "Nope", callback: "" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "crystal",
            text: "Would you like to hear your fortune for $5? ",
            button: [
                { chatID: -1, text: "I do, here's $5", callback: "fortune" },
                { chatID: -1, text: "Nope", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "crystal",
            text: "I'm a fortune teller and I can tell you don't have enough money for my services. Come back when you have $5",
            button: [
                { chatID: -1, text: "Oh, ok", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "crystal",
            text: "Now. In order to work I have to free myself. Hhhmmmm mMMmmm hhhMMmmm",
            button: [
                { chatID: 3, text: "yes?", callback: "bg1" }
            ]
        },
        {
            chatID: 3,
            speaker: "crystal",
            text: "What would you like to know?",
            button: [
                { chatID: -1, text: "Make you selection", callback: "select" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};