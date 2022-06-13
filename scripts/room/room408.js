//Tattoo name
var room408 = {};
room408.main = function () {
    g.internal = {
        fairy: {
            name: "fairy",
            img: "tattoo_fairy.png",
            inv: false,
            x: 600,
            y: 200
        },
        trampstamp: {
            name: "trampstamp",
            img: "tattoo_trampstamp.png",
            inv: false,
            x: 800,
            y: 200
        },
        bunny: {
            name: "bunny",
            img: "tattoo_bunny.png",
            inv: false,
            x: 600,
            y: 400
        },
        sissy: {
            name: "sissy",
            img: "tattoo_sissy.png",
            inv: false,
            x: 800,
            y: 400
        }
    };

    if (g.sissy[27].ach || g.sissy[30].ach) {
        if (g.hourBetween(10, 20)) {
            nav.bg("408_tattoo/inside.jpg");
            if (!g.sissy[30].ach)
                chat(2, 408);
            else
                chat(3, 408);
        }
        else {
            chat(0, 408);
        }
    }
    else {
        chat(1, 408);
    }
    var navList = [0];
    nav.buildnav(navList);
};

room408.btnclick = function (name) {
    switch (name) {
        case "cancel":
            char.room(408);
            break;
        case "fairy":
        case "trampstamp":
            cl.c.tattoo.push(name);
            nav.killall();
            zcl.displayMain(-100, 300, .27, "nude", true);
            cl.display();
            g.roomTimeout = setTimeout(function () {
                chat(5, 408);
            }, 1500);
            break;
        case "bunny":
        case "sissy":
            cl.c.tattoo.push(name);
            cl.c.tattoo.push(name);
            nav.killall();
            zcl.displayMain(-100, 300, .27, "nude", false);
            cl.display();
            g.roomTimeout = setTimeout(function () {
                chat(5, 408);
            }, 1500);
            break;
        default:
            break;
    }
};

room408.chatcatch = function (callback) {
    var i;
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "reset":
            char.room(408);
            break;
        case "tattoo":
            for (i = 0; i < cl.c.tattoo.length; i++) {
                switch (cl.c.tattoo[i]) {
                    case "fairy":
                        g.internal.fairy.inv = true;
                        break;
                    case "bunny":
                        g.internal.bunny.inv = true;
                        break;
                    case "sissy":
                        g.internal.sissy.inv = true;
                        break;
                    case "trampstamp":
                        g.internal.trampstamp.inv = true;
                        break;
                }
            }
            if (!g.internal.fairy.inv)
                nav.button({
                    "type": "btn",
                    "name": "fairy",
                    "left": g.internal.fairy.x,
                    "top": g.internal.fairy.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.fairy.img
                }, 408);
            if (!g.internal.bunny.inv)
                nav.button({
                    "type": "btn",
                    "name": "bunny",
                    "left": g.internal.bunny.x,
                    "top": g.internal.bunny.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.bunny.img
                }, 408);
            if (!g.internal.sissy.inv)
                nav.button({
                    "type": "btn",
                    "name": "sissy",
                    "left": g.internal.sissy.x,
                    "top": g.internal.sissy.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.sissy.img
                }, 408);
            if (!g.internal.trampstamp.inv)
                nav.button({
                    "type": "btn",
                    "name": "trampstamp",
                    "left": g.internal.trampstamp.x,
                    "top": g.internal.trampstamp.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.trampstamp.img
                }, 408);
            nav.button({
                "type": "btn",
                "name": "cancel",
                "left": 1000,
                "top": 200,
                "width": 150,
                "height": 150,
                "image": "19_layInBed/cancel.png"
            }, 408);
            break;
        case "nipple":
            g.pass = "nipple";
            char.room(401);
            break;
        default:
            break;
    }
};

room408.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "She must be closed down for the night. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "It's says by appointments only. Hmmm I wonder how I can get in? ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "stormy",
            text: "Hay sexy. What can I do for you?",
            button: [
                { chatID: -1, text: "I want a piercing. ", callback: "nipple" },
                { chatID: -1, text: "Nothing. ", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "stormy",
            text: "Hay sexy. What can I do for you?",
            button: [
                { chatID: -1, text: "I want a piercing. ", callback: "nipple" },
                { chatID: -1, text: "I want a tattoo. ", callback: "tattoo" },
                { chatID: -1, text: "Nothing. ", callback: "leave" }
            ]
        },
        {
            chatID: 4,
            speaker: "stormy",
            text: "Which kind?",
            button: [
                { chatID: -1, text: "Nipple piercing. ", callback: "nipple" },
                { chatID: -1, text: "Something else ", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "stormy",
            text: "I did such great work! I love it. Another?",
            button: [
                { chatID: 3, text: "Yea ", callback: "" },
                { chatID: -1, text: "I'm good", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};