//Room name
var room180 = {};
room180.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "shave101":
            chat(0, 180);
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
    //        "image": "180_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 180);
    //});
    //nav.buildnav(navList);
};

room180.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room180.chatcatch = function (callback) {
    switch (callback) {
        case "shave0":
        case "shave1":
        case "shave1point5":
        case "shave2":
        case "shave3":
        case "shave4":
        case "shave5":
        case "bg":
            nav.bg("180_ballroom/" + callback + ".jpg");
            break;
        case "charisma":
            levels.mod("charisma", 40, 999);
            break;
        case "shaveEnd":
            gv.mod("sissySchoolClassDays", 1);
            cl.c.bodyhair = 0;
            cl.display();
            sissy.passclass("shave101");
            char.settime(17, 15);
            char.room(0);
            break;
        default:
            break;
    }
};

room180.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "martha",
            text: "Welcome, everyone, to your first class. I am pleased to see so many of you here today. What you " +
                " see before you is the public ballroom. For your first class, we are going to visit the showers. Please follow me.",
            button: [
                { chatID: 1, text: "...", callback: "shave0" }
            ]
        },
        {
            chatID: 1,
            speaker: "martha",
            text: "Welcome to the shower room. Please note that this is a communal space, and privacy is not guaranteed. " +
                "It is customary for all students to shave their bodies before beginning their training, as this " +
                "promotes hygiene and prevents the spread of disease.",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "martha",
            text: "I will now distribute shaving cream and disposable razors to each of you. Please conduct yourselves " +
                "with decorum and propriety while shaving in my presence. Ladies should always maintain their composure. " +
                "Please proceed with dispatch. There is no need for delay.",
            button: [
                { chatID: 3, text: "...", callback: "shave1" }
            ]
        },
        {
            chatID: 3,
            speaker: "!thomas",
            text: "So, uhhh. Do you want to take turns showering? ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!philbert",
            text: "No you idiot. That will take forever. Didn't you take showers at school? Just grab a razor and start " +
                "shaving. Just don't drop the soap.. or do hahahaha!",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!kareem",
            text: "Alright, let's just get in there and shave. Like Philbert said, we don't want to catch any heat for taking too long.",
            button: [
                { chatID: 6, text: "Yeah, we should all go in and shave. ", callback: "charisma" },
                { chatID: 7, text: "No way. I don't want to be naked in front of you all. ", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "!kareem",
            text: "Word",
            button: [
                { chatID: 10, text: "[Strip and shave]", callback: "shave2" },
            ]
        },
        {
            chatID: 7,
            speaker: "!chris",
            text: "I agree with " + sc.n("me") + ". We should do it one at a time. ",
            button: [
                { chatID: 8, text: "...", callback: "shave1point5" },
            ]
        },
        {
            chatID: 8,
            speaker: "martha",
            text: "I have instructed you to take a shower. Please comply with my request. Forthwith.",
            button: [
                { chatID: 9, text: "oh", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "!philbert",
            text: "See. I told you nerds. Lets go shower together!",
            button: [
                { chatID: 10, text: "[Strip and shave]", callback: "shave2" },
            ]
        },
        {
            chatID: 10,
            speaker: "!sporty",
            text: "Damn Thomas. You really are hairy! ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!thomas",
            text: "I know. Martin over that has it easy. I'm going to be here forever. ",
            button: [
                { chatID: 12, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "!timothy",
            text: "Ouch! Fuck. I cut my balls with this razor!  ",
            button: [
                { chatID: 13, text: "...", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "!martin",
            text: "You have to pull the skin tight. You can't just run the razor over them. ",
            button: [
                { chatID: 14, text: "...", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "!jeremy",
            text: "There's so much shaving. Do girls really do this everyday? ",
            button: [
                { chatID: 15, text: "...", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "!sporty",
            text: "You don't have to shave everyday. I shave for swimming. Usually I shave once a week, or right before a swim meet. ",
            button: [
                { chatID: 16, text: "...", callback: "shave3" },
            ]
        },
        {
            chatID: 16,
            speaker: "!philbert",
            text: "You know Chris. You ass is so smooth and fat. It's totally like a girls! ",
            button: [
                { chatID: 17, text: "...", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "!chris",
            text: "...",
            button: [
                { chatID: 18, text: "...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!philbert",
            text: "If I saw you from behind I would totally try to pound it. With my dick! ",
            button: [
                { chatID: 19, text: "Philbert, leave Chris alone. ", callback: "charisma" },
                { chatID: 20, text: "...", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!philbert",
            text: "You have a girl's ass too! I bet it's begging for my cock! ",
            button: [
                { chatID: 20, text: "wa...", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "!kareem",
            text: "Don't be salty, bro. Just chill and get that shave done.",
            button: [
                { chatID: 21, text: "...", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "!sporty",
            text: "That should do it. All squeeky smooth. ",
            button: [
                { chatID: 22, text: "...", callback: "shave4" },
            ]
        },
        {
            chatID: 22,
            speaker: "martha",
            text: "Ladies and gentlemen, I believe we are ready to proceed. Please dry yourselves off and dress yourselves. " +
                "Afterwards, please join me in the ballroom.",
            button: [
                { chatID: 23, text: "...", callback: "bg" },
            ]
        },
        {
            chatID: 23,
            speaker: "martha",
            text: "I would like to thank you all for your participation today. It is expected that all students be properly " +
                "showered and shaved before attending class in the future. Those who fail to meet the grooming standards " +
                "will be disciplined and sent home. Please remember to conduct yourselves with grace and decorum in my presence, " +
                "or a formal reprimand will be necessary. Finally, Philbert, please see me after class. Your behavior was simply " +
                "unbecoming of a lady. Dismissed! ",
            button: [
                { chatID: -1, text: "...", callback: "shaveEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};