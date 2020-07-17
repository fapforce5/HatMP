//Room name
var room208 = {};
room208.main = function () {
    g.pass = { "first": false, "second": false, "third": false };
    g.internal = null;
    var btnList = [
        {
            "type": "btn",
            "name": "missy",
            "left": 863,
            "top": 45,
            "width": 688,
            "height": 1035,
            "image": "208_red/missy.png"
        }
    ];
    var navList = [207];
    $.each(btnList, function (i, v) {
        nav.button(v, 208);
    });
    nav.buildnav(navList);
    $('.room-left').hide();
};

room208.btnclick = function (name) {
    if (!isNaN(name))
        name = name.toString();
    switch (name) {
        case "th":
            var m = Math.floor(Math.random() * 4) + 1;
            if (m > 3)
                m = 3;
            nav.modbutton(m + "t", "208_red/t" + m + "_1.png", null, null);
            g.internal.step = m;
            g.roomTimeout = setTimeout(function () { room208.btnclick("tj") }, g.internal.timex);
            console.log(g.roomTimeout2);
            break;
        case "tj":
            nav.modbutton(g.internal.step + "t", "208_red/t0.png", null, null);
            g.roomTimeout = setTimeout(function () { room208.btnclick("tk") }, 200);
            break;
        case "tk":
            g.roomTimeout = setTimeout(function () { room208.btnclick("th") }, (Math.random() * 900) + 300);
            room208.btnclick("thit");
            break;
        case "tpause":
            g.roomTimeout = setTimeout(function () { room208.btnclick("th") }, (Math.random() * 900) + 300);
            break;
        case "1t":
        case "2t":
        case "3t":
            //g.internal = { step: 0, maxEnergy: g.get("maxenergy"), hot: false };
            var thisName = parseInt(name.replace("t"));
            if (thisName === g.internal.step) {
                var currentpos = parseInt($(".room-img[data-name='tc']").css("left").replace("px"));
                if (currentpos < 1700 * g.ratio) {
                    $(".room-img[data-name='tc']").css({ "left": (currentpos + (50 * g.ratio)) + "px" });

                    nav.modbutton(g.internal.step + "t", "208_red/t0.png", null, null);
                    g.internal.step = 0;
                    g.internal.bh;
                    clearTimeout(g.roomTimeout);
                    g.roomTimeout = setTimeout(function () { room208.btnclick("tpause") }, 500);
                }
                else {
                    clearTimeout(g.roomTimeout);
                    clearTimeout(g.roomTimeout2);
                    g.pass.second = true;
                    room208.chatcatch("reset");
                    chat(21, 208);
                }
            }
            else if (g.internal.bh) {
                room208.btnclick("thit");
            }
            break;
        case "thit":
            g.internal.bh = false;
            g.mod("energy", g.internal.energy);
            var energyx = g.get("energy");
            if (energyx < 2) {
                clearTimeout(g.roomTimeout);
                clearTimeout(g.roomTimeout2);
                room208.chatcatch("reset");
                chat(22, 208);
            }
            else {
                var maxEnergyx = g.internal.maxEnergy;
                var heightx = (energyx / maxEnergyx) * 673;
                var topx = 1017 - heightx;
                $(".room-img[data-name='tb']").css({ "top": (topx * g.ratio) + "px", "height": (heightx * g.ratio) + "px" });
                nav.modbutton("tballs", "208_red/ts1.png", null, null);
                g.roomTimeout2 = setTimeout(function () { room208.btnclick("tResetbutton") }, 500);
            }
            break;
        case "tResetbutton":
            nav.modbutton("tballs", "208_red/ts0.png", null, null);
            g.internal.bh = true;
            break;
        case "missy":
            if (sc.checkevent("missy", -1)) 
                chat(0, 208);
            else 
                chat(1, 208);
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
            var tempInt = parseInt(name);
            if (tempInt === g.internal) {
                nav.modbutton(name, "208_red/" + name + "kill.png", "x", "img");
                g.internal++;
                if (g.internal === 11) {
                    $('.room_footer').show();
                    g.pass.first = true;
                    chat(15, 208);
                }
            }
            else {
                $('.room_footer').show();
                chat(14, 208);
            }
            break;
        default:
            break;
    }
};

room208.chatcatch = function (callback) {
    switch (callback) {
        case "feet1":
            nav.killall();
            nav.bg("208_red/feeta.jpg");
            break;
        case "feet2":
            nav.killall();
            
            nav.bg("208_red/feet.jpg");
            var btnListf = [
                {
                    "type": "btn",
                    "name": "1",
                    "left": 1192,
                    "top": 787,
                    "width": 180,
                    "height": 227,
                    "image": "208_red/1.png"
                },
                {
                    "type": "btn",
                    "name": "2",
                    "left": 415,
                    "top": 786,
                    "width": 117,
                    "height": 170,
                    "image": "208_red/2.png"
                },
                {
                    "type": "btn",
                    "name": "3",
                    "left": 1623,
                    "top": 752,
                    "width": 122,
                    "height": 120,
                    "image": "208_red/3.png"
                },
                {
                    "type": "btn",
                    "name": "4",
                    "left": 1501,
                    "top": 792,
                    "width": 117,
                    "height": 130,
                    "image": "208_red/4.png"
                },
                {
                    "type": "btn",
                    "name": "5",
                    "left": 534,
                    "top": 851,
                    "width": 120,
                    "height": 163,
                    "image": "208_red/5.png"
                },
                {
                    "type": "btn",
                    "name": "6",
                    "left": 1733,
                    "top": 622,
                    "width": 119,
                    "height": 120,
                    "image": "208_red/6.png"
                },
                {
                    "type": "btn",
                    "name": "7",
                    "left": 179,
                    "top": 620,
                    "width": 127,
                    "height": 122,
                    "image": "208_red/7.png"
                },
                {
                    "type": "btn",
                    "name": "8",
                    "left": 663,
                    "top": 843,
                    "width": 175,
                    "height": 208,
                    "image": "208_red/8.png"
                },
                {
                    "type": "btn",
                    "name": "9",
                    "left": 298,
                    "top": 745,
                    "width": 116,
                    "height": 140,
                    "image": "208_red/9.png"
                },
                {
                    "type": "btn",
                    "name": "10",
                    "left": 1375,
                    "top": 813,
                    "width": 119,
                    "height": 163,
                    "image": "208_red/10.png"
                },
            ];
            $.each(btnListf, function (i, v) {
                nav.button(v, 208);
            });
            g.internal = 1;
            $('.room-left').hide();
            $('.room_footer').hide();
            break;
        case "t1":
            nav.killall();
            nav.bg("208_red/t1.jpg");
            break;
        case "t2":
            nav.bg("208_red/t2.jpg");
            if (cl.c.chastity === "metal")
                chat(18, 208);
            else {
                cl.add("chastity", "metal");
                chat(19, 208);
                cl.c.chastity = "metal";
            }
            break;
        case "t3":
            nav.bg("208_red/t3.jpg");
            break;
        case "t4":
            nav.bg("208_red/t4.jpg");
            //cl.displayMain(-100, 600, .22, "behind");
            $('.room-left').hide();
            $('.room_footer').hide();

            nav.button({
                "type": "btn",
                "name": "1t",
                "left": 240,
                "top": 840,
                "width": 120,
                "height": 111,
                "image": "208_red/t0.png"
            }, 208);
            nav.button({
                "type": "btn",
                "name": "2t",
                "left": 380,
                "top": 840,
                "width": 120,
                "height": 111,
                "image": "208_red/t0.png"
            }, 208);
            nav.button({
                "type": "btn",
                "name": "3t",
                "left": 520,
                "top": 840,
                "width": 120,
                "height": 111,
                "image": "208_red/t0.png"
            }, 208);
            nav.button({
                "type": "img",
                "name": "tc",
                "left": 44,
                "top": 0,
                "width": 149,
                "height": 281,
                "image": "208_red/tc.png"
            }, 208);
            nav.button({
                "type": "img",
                "name": "tballs",
                "left": 954,
                "top": 286,
                "width": 874,
                "height": 794,
                "image": "208_red/ts0.png"
            }, 208);
            
            //bar 100 = 344 t, 674 h
            //bar 0 = 1017 t 1h
            var td = g.get("difficulty");
            g.internal = { step: 0, maxEnergy: g.get("maxenergy"), hot: false, bh: true, energy: (td === 0 ? -10 : td === 1 ? -20 : -50), timex: (td === 0 ? 800 : td === 1 ? 600 : 450) };
            var energy = g.get("energy");
            var maxEnergy = g.get("maxenergy");
            var height = (energy / maxEnergy) * 673;
            var top = 1017 - height;
            nav.button({
                "type": "img",
                "name": "tb",
                "left": 745,
                "top": top,
                "width": 53,
                "height": height,
                "image": "208_red/tb.jpg"
            }, 208);
            //$('#room-buttons').append('<img src="./images/room/' + thisImage + '" class="' + classes + '" data-name="' + btn.name + '" data-room="' + roomNum + '" title="' + (("title" in btn) ? btn.title : "") + charAttr + '" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');
            g.roomTimeout = setTimeout(function () { room208.btnclick("th") }, (Math.random() * 500) + 500);
            break;
        case "tri1":
            $('.room-left').hide();
            nav.killbutton("missy");
            nav.button({
                "type": "btn",
                "name": "missy",
                "left": 538,
                "top": 0,
                "width": 1093,
                "height": 1080,
                "image": "208_red/tri1.png"
            }, 208);
            break;
        case "tri2":
            nav.killbutton("missy");
            nav.bg("208_red/tri2.jpg");
            break;
        case "reset":
            nav.killall();
            nav.bg("208_red/red.jpg");
            nav.button({
                "type": "btn",
                "name": "missy",
                "left": 863,
                "top": 45,
                "width": 688,
                "height": 1035,
                "image": "208_red/missy.png"
            }, 208);
            break;
        case "leave":
            char.addtime(180);
            char.room(0);
            break;
        default:
            break;
    }
};

room208.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "All Challenges complete.. more to come later...",
            button: [
                { chatID: -1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Welcom to the Red Room of Disipline. Do you require an explanation of your duties for this room?",
            button: [
                { chatID: 2, text: "Yes mistress, please guide me", callback: "" },
                { chatID: 9, text: "No mistress, I'm ready to begin", callback: "" },
                { chatID: 10, text: "I don't know why I'm here. I would like to go.", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "I will present to you three challenges.<br/>" +
                "The first is the challenge of servatude. To properly serve your mistress you must know your mistress. I have " +
                "painted my toes in order and you must know me to guess that order. Kiss my toes correctly and your shall pass.",
            button: [
                { chatID: 4, text: "[Keep silent]", callback: "" },
                { chatID: 3, text: "Ask for a hint", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "I demand order in all that you do. To pass the first test you must first kiss my <span style='color:#ff0000'>Red</span>" +
                "toe nail then proceed to my <span style='color:#ff6000'>Orange</span> toenail. You must find the order yourself after that.",
            button: [
                { chatID: 4, text: "[Keep silent]", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "The next is the challenge of hardship. To prove your devotion to me you must give your body completely to me. " +
                "I will tie your arms behind your back and have you walk down an electrified pole. If you misstep or lower your balls onto " +
                "my pole be prepared for a shocking time. If you get shocked too many times you fail!",
            button: [
                { chatID: 6, text: "[Keep silent]", callback: "" },
                { chatID: 5, text: "Ask for a hint", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "Your initial energy is you actual energy. So if you start the game with high energy you'll have more chances to fail. " +
                "On the right you'll see your feet and balls light up. When they light up click them to move forward. If you just can't do it " +
                "you can raise your energy by working out and gaining more energy. Be sure to max it out!",
            button: [
                { chatID: 6, text: "[Keep silent]", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "The last is the challenge of capacity. You must sit on a giant dildo and stuff.. working on this.",
            button: [
                { chatID: 8, text: "[Keep silent]", callback: "" },
                { chatID: 7, text: "Ask for a hint", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "Hint for butt strectching game",
            button: [
                { chatID: 8, text: "[Keep silent]", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "These are the challenges you must pass to prove you are worthy of another case. Complete these and I'll allow " +
                "you to continue. ",
            button: [
                { chatID: 2, text: "Tell it to me again.", callback: "" },
                { chatID: 9, text: "I'm ready to begin mistress.", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "Which challenge shall we do?",
            button: [
                { chatID: g.pass.first ? 11 : 12, text: g.pass.first ? "COMPLETE" : "The challenge of servatude", callback: "" },
                { chatID: g.pass.second ? 11 : 16, text: g.pass.second ? "COMPLETE" : "the challenge of hardship", callback: "" },
                { chatID: g.pass.third ? 11 : 23, text: g.pass.third ? "COMPLETE" : "The challenge of capacity", callback: "" },
                { chatID: 10, text: "I give up", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "You disgust me. You must work harder to be worthy to serve me. Go!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" },
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "You have already completed that task. To properly serve me you cannot dwell in the past, but look to my future. ",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "The challenge of servatude. ",
            button: [
                { chatID: 13, text: "...", callback: "feet1" },
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "This challenge will test your ability to serve me in an orderly manner.Kiss each of my toes " +
                "in an order that is pleasing to me. Don't displease me.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "feet2" },
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "You have selected incorrectly and have failed the challenge of servatude. Go!",
            button: [
                { chatID: -1, text: "Sorry mistress", callback: "leave" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "What a good sissy you are! You know how much I like order and you're learning your colors! ",
            button: [
                { chatID: 9, text: "Thank you mistress", callback: "reset" },
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "The challenge of hardship!",
            button: [
                { chatID: 17, text: "...", callback: "t1" },
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "Let me tie these arms up...",
            button: [
                { chatID: -1, text: "...", callback: "t2" },
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Nice and tight, now to put on the metal chastity device...",
            button: [
                { chatID: 20, text: "...", callback: "t3" },
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "Nice and tight. Oh good are you wearing your metal chastity device?",
            button: [
                { chatID: 20, text: "...", callback: "t3" },
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "Now to put you on the pole, careful with that metal chastity device, the current will shock you right up your little " +
                "pee pee.. hehehehe",
            button: [
                { chatID: -1, text: "...", callback: "t4" },
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "Good job slut. You can really work a pole. ",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "Awww did you shock your little pee pee? I hope it hurts as much as my dissapointment in you. Get going. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "The challenge of capacity. ",
            button: [
                { chatID: 24, text: "...", callback: "tri1" },
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "To pass the challenge of capacity you must be able to sit flat on my tower of power. ",
            button: [
                { chatID: 25, text: "Wha....", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "Being a sissy is about the effort you put into being the biggest slut you can be. You don't just wake up and be a little " +
                "slut, it takes time and effort in all things. If you're going to be my sissy you're going to have to take this tower of power deep " +
                "into your gurl pussy.",
            button: [
                { chatID: 26, text: "...", callback: "tri2" },
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "Art in progress.... ",
            button: [
                { chatID: 1, text: "oh fudge", callback: "rest" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};