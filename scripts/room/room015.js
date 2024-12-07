//Kitchen
var room15 = {};
room15.main = function () {
    var btnList = [];
    var hour = g.gethourdecimal();

    if (sc.getTimeline("landlord").roomID === 15) {
        nav.bg("15_kitchen/butt.jpg");
        btnList.push({
            "type": "btn",
            "name": "slap",
            "left": 1164,
            "top": 643,
            "width": 263,
            "height": 231,
            "image": "15_kitchen/slap.png"
        });
        //btnList.push({
        //    "type": "btn",
        //    "name": "landlord",
        //    "left": 498,
        //    "top": 0,
        //    "width": 1196,
        //    "height": 1080,
        //    "image": "15_kitchen/landlord.png"
        //});
    }
    else {
        if (sc.getTimeline("landlord").roomID === 14 && hour.between(7, 22)) {
            btnList.push({
                "type": "btn",
                "name": "door",
                "left": 591,
                "top": 128,
                "width": 263,
                "height": 354,
                "image": "15_kitchen/doorOpen.png",
                "night": "15_kitchen/doorOpenN.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "door",
                "left": 591,
                "top": 128,
                "width": 263,
                "height": 354,
                "image": "15_kitchen/doorClosed.png",
                "night": "15_kitchen/doorClosedN.png",
            });
        }

        if (!daily.get("momChoreDishes") && sc.getMission("landlord", "sissy").notStarted) {
            btnList.push({
                "type": "btn",
                "name": "dishes",
                "left": 651,
                "top": 352,
                "width": 498,
                "height": 221,
                "image": "15_kitchen/dishes.png",
                "night": "15_kitchen/dishesNight.png"
            });
        }
        if (!daily.get("water")) {
            btnList.push({
                "type": "btn",
                "name": "water",
                "left": 1468,
                "top": 420,
                "width": 118,
                "height": 192,
                "image": "15_kitchen/water.png"
            });
        }
    }

    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 15);
    });
    nav.buildnav(navList);
};

room15.btnclick = function (name) {
    switch (name) {
        case "dishes":
            char.room(20);
            break;
        case "landlord":
            if (sc.getstep("landlord") > 6) 
                chat(6, 15);
            else 
                chat(0, 15);
            break;
        case "door":
            var hour = g.gethourdecimal();
            if (inv.has("landlordKey"))
                char.room(14);
            else if (hour.between(22, 24) || hour.between(0, 6))
                chat(1, 15);
            else if (sc.getTimeline("landlord").roomID === 14)
                char.room(14);
            else
                chat(2, 15);
            break;
        case "water":
            daily.set("water");
            var thisBladder = gv.get("bladder");
            if (thisBladder > .98)
                chat(3, 15);
            else {
                nav.killbutton("water");
                nav.button({
                    "type": "img",
                    "name": "drink",
                    "left": 632,
                    "top": 233,
                    "width": 635,
                    "height": 614,
                    "image": "15_kitchen/drink.png"
                }, 15);
                gv.mod("bladder", .3);
                cl.display();
                if (thisBladder > .68)
                    chat(4, 15);
                else
                    chat(5, 15);
            }
            break;
        case "asslick":
            chat(8, 15);
            break;
        case "pussylick":
            nav.kill();
            nav.bg("15_kitchen/landlord4.jpg");
            nav.button({
                "type": "btn",
                "name": "llick",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 15);
            chat(9, 15);
            g.internal = 5;
            break;
        case "llick":
            if (g.internal < 7)
                nav.bg("15_kitchen/landlord" + g.internal + ".jpg");
            else {
                nav.killall();
                nav.bg("15_kitchen/day.jpg", "526_bar/night.jpg");
                nav.button({
                    "type": "img",
                    "name": "landlord",
                    "left": 498,
                    "top": 0,
                    "width": 1196,
                    "height": 1080,
                    "image": "15_kitchen/landlord7.png"
                }, 15);
                chat(10, 15);
            }
            g.internal++;
            break;
        case "slap":
            nav.killall();
            nav.bg("15_kitchen/butt1.jpg");
            g.roomTimeout = setTimeout(function () {
                if (sc.getLevel("landlord") < 3) {
                    nav.bg("15_kitchen/butt_angry.jpg");
                    chat(11, 15);
                }
                else {
                    sc.modLevel("landlord", 20, 5);
                    chat(12, 15)
                }
            }, 1500);
            break;
        default:
            break;
    }
};

room15.chatcatch = function (callback) {
    switch (callback) {
        case "passtime1":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 1);
            break;
        case "passtime2":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 2);
            break;
        case "passtime3":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 3);
            break;
        case "passtime4":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 4);
            break;
        case "passtime5":
            char.settime(9, 0);
            nav.killbutton("ll");
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        case "drinkDown":
            nav.killbutton("drink");
            break;
        case "ll2":
            nav.killbutton("landlord");
            nav.button({
                "type": "img",
                "name": "landlord",
                "left": 498,
                "top": 0,
                "width": 1128,
                "height": 1080,
                "image": "15_kitchen/landlord2.png"
            }, 15);
            break;
        case "ll3":
            nav.kill();
            nav.bg("15_kitchen/landlord3.jpg");
            nav.button({
                "type": "tongue",
                "name": "pussylick",
                "left": 849,
                "top": 407,
                "width": 216,
                "height": 302,
                "image": "15_kitchen/landlord3_pussy.png"
            }, 15);
            nav.button({
                "type": "tongue",
                "name": "asslick",
                "left": 879,
                "top": 257,
                "width": 151,
                "height": 150,
                "image": "15_kitchen/landlord3_asshole.png"
            }, 15);
            break;
        case "ll8":
            char.addtime(72);
            gv.mod("giveOralFemale", 1);
            char.room(15);
            break;
        case "slap1":
            g.pass = "kitchen";
            char.room(21);
            break;
        case "slap2":
            nav.killall();
            nav.bg("15_kitchen/slap2.jpg");
            break;
        case "slap2End":
            char.addtime(58);
            char.room(15);
            break;
        default:
            break;
    }
};

room15.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Hey honey, why don't you run along.. " + sc.n("landlord") + " is enjoying her special drinks.",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: sc.n("landlord") + "'s probably asleep, shouldn't wake her.",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: sc.n("landlord") + " locked the door.. Must figure out a way to get the key!",
            button: []
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "My bladder is already so full! There's no way I can drink anymore. I should go pee.",
            button: []
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Oh no! I better go pee before wet my pants!",
            button: [
                { chatID: -1, text: ".... ", callback: "drinkDown" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Refreshing!",
            button: [
                { chatID: -1, text: ".... ", callback: "drinkDown" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "So are you just going to stare at it, or are you going to eat it? ",
            button: [
                { chatID: 7, text: "Oh please! ", callback: "ll2" },
                { chatID: -1, text: "Just staring. ", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "*hiccup* Get in there and make " + sc.n("landlord") + " a happy girl! ",
            button: [
                { chatID: -1, text: "MMMmmmMMMMmm ", callback: "ll3" },
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "Hey! *hiccup* I poop from there! Get your tongue out of my asshole! ",
            button: [
                { chatID: -1, text: "oh whoops ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Oh yeah! Get in there deep. Stretch that tongue. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "Wow! You sure know how to eat a pussy. Thanks honey. Now run along. ",
            button: [
                { chatID: -1, text: "You're welcome " + sc.n("landlord") + "! ", callback: "ll8" },
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "So you like to slap your " + sc.n("landlord") + " on her ass? Well I like to smack asses too! " +
                "Come with me to my room. Now! ",
            button: [
                { chatID: -1, text: "Yes! ", callback: "slap1" },
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Ooooo. I am a naughty girl! ",
            button: [
                { chatID: 13, text: "...", callback: "slap2" },
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "Gross " + sc.n("landlord") + "! ",
            button: [
                { chatID: 14, text: "Oh hi " + sc.n("lola") + ". " , callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "Sit down and eat. I'm almost done here. ",
            button: [
                { chatID: -1, text: "ok", callback: "slap2End" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};