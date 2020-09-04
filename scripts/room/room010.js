//bedroom
var room10 = {};
room10.pass = "";
room10.main = function () {

    if (sc.checkevent("me", 3)) {
        //sc.setstep("tiffany", 10);
        chat(8, 10);
    }
    else if (g.internal === "room10pass" || g.internal === "room10Underwear") {
        if (g.internal === "room10Underwear") {
            if (cl.c.shirt === null && cl.c.pants === null && cl.c.panties === null && cl.c.pj === null) {
                nav.bg("10_mainchar/bedroomStand.jpg");
                nav.button({
                    "type": "btn",
                    "name": "wardrobe",
                    "left": 1684,
                    "top": 230,
                    "width": 236,
                    "height": 602,
                    "title": "Wardrobe",
                    "image": "10_mainchar/10_wardrobe.png"
                }, 10);
                chat(34, 10);
            }
            else if (cl.c.panties !== "w") {
                nav.bg("10_mainchar/bedroomStand.jpg");
                nav.button({
                    "type": "btn",
                    "name": "wardrobe",
                    "left": 1684,
                    "top": 230,
                    "width": 236,
                    "height": 602,
                    "title": "Wardrobe",
                    "image": "10_mainchar/10_wardrobe.png"
                }, 10);
                chat(28, 10);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "yell",
                    "left": 408,
                    "top": 0,
                    "width": 1468,
                    "height": 1080,
                    "image": "10_mainchar/panties.png"
                }, 10);
                chat(29, 10);
            }
        }
        else {
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/lolaYell.png"
            }, 10);
            chat(18, 10);
        }
    }
    else {
        $('.room-topper').show();
        var btnList = [
            {
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "10_mainchar/10_wardrobe.png",
                "night": "10_mainchar/10_wardrobeNight.png"
            },
            {
                "type": "btn",
                "name": "Bed",
                "left": 514,
                "top": 531,
                "width": 547,
                "height": 401,
                "title": "Sleep",
                "image": "10_mainchar/10_bed.png",
                "night": "10_mainchar/10_bedNight.png"
            },
            {
                "type": "btn",
                "name": "nightStand",
                "left": 373,
                "top": 604,
                "width": 137,
                "height": 197,
                "title": "Toybox",
                "image": "10_mainchar/10_nightstand.png",
                "night": "10_mainchar/10_nightstandNight.png"
            },
            {
                "type": "btn",
                "name": "computer",
                "left": 1233,
                "top": 469,
                "width": 202,
                "height": 115,
                "image": "10_mainchar/10_computer.png",
                "night": "10_mainchar/10_computerNight.png"
            }
        ];

        var navList = [];
        var missingClothing = cl.hasoutfit("public");

        if (missingClothing === null) {
            navList.push(11);
            navList.push(16);
            var hour = g.dt.getHours();
            if (hour.between(6, 21))
                navList.push(0);
        }
        else {
            room10.pass = missingClothing;
            chat(6, 10);
        }
        $.each(btnList, function (i, v) {
            nav.button(v, 10);
        });

        nav.buildnav(navList);
    }
};

room10.btnclick = function (name) {
    switch (name) {
        case "computer":
            g.pass = 10;
            char.room(9);
            break;
        case "Bed":
            if (g.hourBetween(5, 22)) //if before 6pm can only nap
                chat(0, 10);
            else
                chat(5, 10);
            break;
        case "wardrobe":
            g.pass = 10;
            char.room(8);
            break;
        case "nightStand":
            g.pass = 10;
            char.room(19);
            break;
        default:
            break;
    }
};

room10.chatcatch = function (callback) {

    switch (callback) {
        case "nap_1hour":
            char.addtime(60);
            char.room(10);
            break;
        case "nap_3hour":
            char.addtime(180);
            char.room(10);
            break;
        case "nap_5hour":
            char.addtime(300);
            char.room(10);
            break;
        case "nap_5pm":
            char.settime(17, 0);
            char.room(10);
            break;
        case "nap_10pm":
            char.settime(22, 0);
            char.room(10);
            break;
        case "nap_sleep":
            g.pass = 7;
            char.room(28);
            break;
        case "kickOut1":
            cl.c.shoes = "w",
                cl.c.socks = "w",
                cl.c.pants = "j",
                cl.c.panties = "w",
                cl.c.shirt = "g",
                cl.display();
            break;
        case "kickOut2":
            $.each(g.roomMap, function (i, v) {
                if (v.roomID === 16) {
                    v.darkAccess = false;
                    v.access = false;
                }
                else if (v.roomID === 450) {
                    v.darkAccess = true;
                }
                else if (v.roomID === 500) {
                    v.darkAccess = true;
                    v.access = true;
                }
            });
            char.room(0);
            break;
        case "newday":
            char.room(7);
            break;
        case "evaYell":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/evaYell.png"
            }, 10);
            break;
        case "lolaYell":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/lolaYell.png"
            }, 10);
            break;
        case "bothSmile":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/bothSmile.png"
            }, 10);
            break;
        case "holdPanties":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/panties.png"
            }, 10);
            break;
        case "getPanties":
            nav.killall();
            nav.bg("10_mainchar/bedroomStand.jpg");
            g.internal = "room10Underwear";
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "10_mainchar/10_wardrobe.png"
            }, 10);
            break;
        case "shirtTakeOff":
            nav.killall();
            cl.c.shoes = cl.c.socks = cl.c.bra = cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = cl.c.pants = null;
            cl.c.panties = "w";
            cl.display();
            nav.bg("10_mainchar/writing.jpg");
            break;
        case "shirtTakeOff1":
            nav.bg("10_mainchar/writing1.jpg");
            break;
        case "showerOff":
            cl.remove("panties", "u");
            cl.remove("panties", "n");
            pic.add("pantyThief");
            sc.setstep("lola", -1);
            char.addtime(60);
            g.internal = "";
            g.pass = "";
            $.each(cl.saveOutfit, function (i, v) {
                if (i !== 4)
                    cl.saveOutfit[i].panties = "w";
            });
            nav.room(10);
            break;
        default:
            break;
    }
};

room10.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "How Long do you want to sleep?",
            button: [
                { chatID: -1, text: "Sleep till morning", callback: "nap_sleep" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Finished Napping for 1 Hour",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Finished Napping for 3 Hours",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "How Long do you want to sleep?",
            button: [
                { chatID: 1, text: "Nap for 1 hour.", callback: "nap_1hour" },
                { chatID: -1, text: "Sleep till morning", callback: "nap_sleep" },
                { chatID: -1, text: "Don't Sleep", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "A new day!",
            button: []
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Sleep for the night?",
            button: [
                { chatID: -1, text: "Sleep till morning", callback: "nap_sleep" },
                { chatID: -1, text: "Don't Sleep", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Before I leave I need to get dressed. <span class='hl'>I'm missing my " + room10.pass + ".</span>",
            button: []
        },
        {
            chatID: 7,
            speaker: "me",
            text: "N/A",
            button: []
        },
        {
            chatID: 8,
            speaker: "me",
            text: "AAAAhhh man, I've never seen her that angry before, I'm totally done. Crap Crap Crap",
            button: [ { chatID: 9, text: "[Get Dressed]", callback: "kickOut1" } ]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "I better get all my things, I don't know if she'll let me back in after this.",
            button: [{ chatID: 10, text: "[Pack things]", callback: "" }]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Where can I stay... I may be able to stay with " + sc.n("zoey") + ", or I'll have to crash at the park tonight. " +
                "It'll be rough, but it's just for tonight. ",
            button: [{ chatID: -1, text: "[Leave]", callback: "kickOut2" }]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "How long to Nap?",
            button: [
                { chatID: 1, text: "1 Hour", callback: "nap_1hour" },
                { chatID: 2, text: "3 Hours", callback: "nap_3hour" },
                { chatID: 2, text: "5 Hours", callback: "nap_5hour" },
                { chatID: -1, text: "Till 5:00PM", callback: "nap_5pm" },
                { chatID: -1, text: "Till 10:00PM", callback: "nap_10pm" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "How long to Nap?",
            button: [
                { chatID: 1, text: "1 Hour", callback: "nap_1hour" },
                { chatID: 2, text: "3 Hours", callback: "nap_3hour" },
                { chatID: -1, text: "Till 10:00PM", callback: "nap_10pm" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "Oh wow, all that working out has really paid off! I feel so much sexier with this new bod!",
            button: [
                { chatID: -1, text: "....", callback: "newday" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Are those itty bitty tits? I think these pills are chaning my body.",
            button: [
                { chatID: -1, text: "....", callback: "newday" }
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "Oh no... is my penis shrinking!?!?",
            button: [
                { chatID: -1, text: "....", callback: "newday" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "Hahah nice, bigger titties!",
            button: [
                { chatID: -1, text: "....", callback: "newday" }
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "Check that ass out! So much to grab",
            button: [
                { chatID: -1, text: "....", callback: "newday" }
            ]
        },
        {
            chatID: 18,
            speaker: "lola",
            text: "Hay I know you have them!",
            button: [
                { chatID: 19, text: "What?, have what?", callback: "evaYell" }
            ]
        },
        {
            chatID: 19,
            speaker: "eva",
            text: "Don't do that you panty theif! You probably took them to masturbate on you disgusting pervert! ",
            button: [
                { chatID: 20, text: "No, nonono. " + sc.n("missy") + "'s making me wear panties to work.", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "What? why would she do that? ",
            button: [
                {
                    chatID: 21, text: "I got in trouble on my last job, got caught peeking at a girl so " + sc.n("missy") +
                    "'s making me wear girls panties to work.", callback: "lolaYell"
                }
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "Really " + sc.n("me") + "? That's weird. I can't wait to tell me friend Molly about this. ",
            button: [
                { chatID: 22, text: "OOoohhhh wait. Please, you can't tell anyone!", callback: "evaYell" }
            ]
        },
        {
            chatID: 22,
            speaker: "eva",
            text: "Yes we can. What are you going to do, steal more panties? ",
            button: [
                { chatID: 23, text: "I promise not to steal any more panties! I'll do what ever you want if your don't tell anyone.", callback: "lolaYell" }
            ]
        },
        {
            chatID: 23,
            speaker: "lola",
            text: "Anything? ",
            button: [
                { chatID: 24, text: "Anyting.", callback: "bothSmile" }
            ]
        },
        {
            chatID: 24,
            speaker: "eva",
            text: "Welllll since you like to steal " + sc.n("lola") + "'s panties, we're going to <span style='color:#55ffff'> take your panties, all your boy " +
                "panties </span>to teach you a lesson!",
            button: [
                { chatID: 25, text: "Wha....", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "YES!!! and we'll write panty their on your belly!!! Ooooo and take a picture!! ",
            button: [
                { chatID: 26, text: "No, you're not doing any of that.", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "Yes we are! You know if we tell " + sc.n("landlord") + ", she'll kick you out on the spot. You won't even " +
                "have time to pack your stuff. Now get all your boy panties! ",
            button: [
                { chatID: 27, text: "ooohh fuck.. ok", callback: "getPanties" }
            ]
        },
        {
            chatID: 27,
            speaker: "eva",
            text: "Now go into that closet and get us all you boy panties. ",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "eva",
            text: "Nope, that's not all of them, go into the closet put on " + sc.n("lola") +
                "'s panties and bring us all your boy panties!",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "eva",
            text: "Hahahah, are you wearing the panties right now? I bet you are, you  weird-o. Well panties, for panties " +
                "I guess we're even now.",
            button: [
                { chatID: 30, text: "Yep, totally even", callback: "lolaYell" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "No, you stole my panties! You need to be punished mister! Now take off your shirt! ",
            button: [
                { chatID: 31, text: "Oh ok.", callback: "shirtTakeOff" }
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "Haha! I hope this teaches you a lesson never to steal my panties again! ",
            button: [
                { chatID: 32, text: "It does, I promise neve to steal your panties again. ", callback: "shirtTakeOff1" }
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "Now for the picture! Smile pretty so you can see what kind of panty theif you are.",
            button: [
                { chatID: 33, text: "Awww man ", callback: "shirtTakeOff" }
            ]
        },
        {
            chatID: 33,
            speaker: "lola",
            text: "Ok, we've go to run. You can go wash up now. Don't take any more of my panties! ",
            button: [
                { chatID: -1, text: "ok ", callback: "showerOff" }
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "UGH You pervert! We asked for your underwear, not your penis! ",
            button: [
                { chatID: 35, text: "[Smile]", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "Oh my, there's subtler ways to get us to see you naked.",
            button: [
                { chatID: -1, text: "Yes, but this is funny", callback: "" }
            ]
        }
    ];

    return cArray[chatID];
}