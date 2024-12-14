//Room name
var room586 = {};
room586.main = function () {
    nav.button({
        "type": "btn",
        "name": "keg",
        "left": 1474,
        "top": 126,
        "width": 175,
        "height": 433,
        "title": "Have a beer",
        "image": "586_kitchen/keg.png"
    }, 586);

    switch (Math.floor(g.gethourdecimal())) {
        case 20:
        case 21:
            nav.button({
                "type": "btn",
                "name": "stacy",
                "left": 106,
                "top": 18,
                "width": 755,
                "height": 1062,
                "image": "586_kitchen/stacy.png"
            }, 586);
            nav.bg("586_kitchen/bg.jpg");
            break;
        case 22:
            
            nav.bg("586_kitchen/bg_22.jpg");
            break;
        case 23:
            nav.bg("586_kitchen/bg_23.jpg");
            break;
        case 0:
            nav.bg("586_kitchen/bg_0.jpg");
            break;
        default:
            nav.bg("586_kitchen/bg_1.jpg");
            break;
    }
    nav.buildnav([585, 587, 588, 589]);
};

room586.btnclick = function (name) {
    switch (name) {
        case "stacy":
            if (sc.getMission("stacy", "cheer").startedOrComplete) {
                chat(4, 586);
            }
            else {
                chat(3, 586);
            }
            break;
        case "keg":
            nav.button({
                "type": "img",
                "name": "beer",
                "left": 623,
                "top": 540,
                "width": 802,
                "height": 540,
                "image": "586_kitchen/beer.png"
            }, 586);
            var thisBeer = levels.beer(1);
            if (thisBeer.passout) {
                chat(0, 586);
            }
            else if (thisBeer.nextOneDrunk)
                chat(1, 586);
            else
                chat(2, 586);
            console.log(thisBeer)
            break;
        default:
            break;
    }
};

room586.chatcatch = function (callback) {
    switch (callback) {
        case "room450":
            g.pass = 450;
            char.room(28);
            break;
        case "reset30":
            char.addtime(30);
            char.room(586);
            break;
        case "reset":
            char.room(586);
            break;
        default:
            break;
    }
};

room586.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I think I've had too many.....",
            button: [
                { chatID: -1, text: "[Pass out]", callback: "room450" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oh wow. I'm really feeling it. I better not drink anymore.",
            button: [
                { chatID: -1, text: "...", callback: "reset30" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Icky. I wish that had a fruitier yummy drink. ",
            button: [
                { chatID: -1, text: "...", callback: "reset30" }
            ]
        },
        {
            chatID: 3,
            speaker: "stacy",
            text: "*ugh* gross. Why are you talking to me loser? You trying to fuck " +
                "my friend? Well you can fuck right off slut. ",
            button: [
                { chatID: -1, text: "I.. uhhh.. no", callback: "reset30" }
            ]
        },
        {
            chatID: 4,
            speaker: "stacy",
            text: "Hey new girl! You shouldn't be drinking. Wouldn't want you hung over " +
                "at practice tomorrow, or we'll kick your balls in! ",
            button: [
                { chatID: -1, text: "*sigh* Yes Stacy", callback: "reset30" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};