//Room name
var room322 = {};
room322.main = function () {
    let currentHour = Math.floor(g.gethourdecimal());

    switch (Math.floor(g.gethourdecimal())) {

        default:
            room322.btnclick("livingroom");
            break;
    }


};

room322.btnclick = function (name) {
    switch (name) {
        case "livingroom":
            nav.kill();
            nav.bg("322_dog/livingroom.webp");
            sc.select("dogbed", "322_dog/icon_dogbed.webp", 0);
            sc.select("backyard", "322_dog/icon_backyard.webp", 1);
            sc.select("kitchen", "322_dog/icon_kitchen.webp", 2);
            sc.select("feet", "322_dog/icon_feet.webp", 3);
            sc.select("nuzzle", "322_dog/icon_nuzzle.webp", 4);
            break;
        case "dogbed":
            break;
        case "backyard":
            break;
        case "kitchen":
            char.addtime(30);
            nav.kill();
            nav.bg("317_janiceKitchen/kitchen.jpg");
            sc.select("livingroom", "322_dog/icon_living.webp", 0);
            sc.select("backyard", "322_dog/icon_backyard.webp", 1);
            nav.button({
                "type": "btn",
                "name": "feed",
                "left": 679,
                "top": 609,
                "width": 451,
                "height": 295,
                "image": "317_janiceKitchen/feed.png"
            }, 322);
            break;
        case "feet":
            break;
        case "nuzzle":
            break;

        case "feed":
            if (daily.get("room322Eat")) {
                chat(0, 322);
            }
            else if (daily.get("room322EatBad")) {
                chat(3, 322);
            }
            else {
                nav.kill();
                nav.bg("322_dog/kitchen.webp");
                chat(1, 322);
            }
            break;
        case "feed2":
            daily.set("room322Eat");
            nav.killbutton("feed2");
            gv.mod("energy", 75);
            gv.mod("bladder", .8);
            chat(4, 322);
            break;
        default:
            break;
    }
};

room322.chatcatch = function (callback) {
    switch (callback) {
        case "kitchengood":
            nav.bg("322_dog/" + callback + ".webp");
            break;
        case "kitchenbad":
            nav.bg("322_dog/" + callback + ".webp");
            daily.set("room322EatBad")
            break;
        case "kitchen":
            room322.btnclick(callback);
            break;
        case "kitchenEat":
            nav.bg("322_dog/kitchen_bowl.webp");
            nav.button({
                "type": "tongue",
                "name": "feed2",
                "left": 379,
                "top": 652,
                "width": 1107,
                "height": 318,
                "image": "322_dog/kitchen_bowlicon.webp"
            }, 322);
            break;
        default:
            break;
    }
};

room322.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I'm pretty full. I already ate dog food today. blech!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "janice",
            text: "Awww, is my poor doggy trying to eat. Let me get that gag out of your mouth. " +
                "But one word and it's going back in, and no meal!",
            button: [
                { chatID: -1, text: "[Just eat the dog food]", callback: "kitchenEat" },
                { chatID: 2, text: "Ooooo, that makes my jaw so sore, can I just...", callback: "kitchenbad" },
            ]
        },
        {
            chatID: 2,
            speaker: "janice",
            text: "Bad doggy! I guess no meal for you! Let me put this gag back in your mouth!!!",
            button: [
                { chatID: -1, text: "*whine*", callback: "kitchen" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "This gag sucks so hard! My jaw hurts and I can drink or eat anything!",
            button: [
                { chatID: -1, text: "*whine*", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "So crunchy and gross! She could at leaste feed me people food!",
            button: [
                { chatID: 5, text: "...", callback: "kitchengood" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "That's a good doggy. You must love this doggy food, you ate it all up!",
            button: [
                { chatID: -1, text: "*whine*", callback: "kitchen" },
            ]
        },
        
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};