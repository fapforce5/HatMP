//Room name
var room485 = {};
room485.main = function () {
    g.internal = {
        count: 0,
        i: 0
    };
    chat(0, 485);
};

room485.btnclick = function (name) {

    if (name === "leave") {
        char.room(485);
    }
    else if (name === "e_up") {
        if (g.internal.count < inv.master[g.internal.i].count) {
            g.internal.count++;
            nav.tmod("d_img_count", g.internal.count);
            nav.killbutton("d_img_price");
            nav.tcenter({
                type: "clickthrough",
                name: "d_img_price",
                left: 1520,
                top: 760,
                width: 400,
                font: 30,
                hex: "#ffffff",
                text: "Sell $" + g.internal.count * inv.master[g.internal.i].buy
            }, 485);
        }
    }
    else if (name === "e_down") {
        if (g.internal.count > 0) {
            g.internal.count--;
            nav.tmod("d_img_count", g.internal.count);
            nav.killbutton("d_img_price");
            nav.tcenter({
                type: "clickthrough",
                name: "d_img_price",
                left: 1520,
                top: 760,
                width: 400,
                font: 30,
                hex: "#ffffff",
                text: "Sell $" + g.internal.count * inv.master[g.internal.i].buy
            }, 485);
        }
    }
    else if (name === "e_sell") {
        if (g.internal.count === 0)
            return;
        inv.master[g.internal.i].count -= g.internal.count;
        gv.mod("money", inv.master[g.internal.i].buy * g.internal.count);
        room485.chatcatch("sell");
        room485.btnclick("c_" + g.internal.i);
    }
    else if (name.startsWith("c_")) {
        let c = parseInt(name.replace("c_", ""));
        nav.killbuttonStartsWith("d_");
        g.internal.count = 0;
        g.internal.i = c;
        nav.button({
            "type": "img",
            "name": "d_img",
            "left": 1620,
            "top": 300,
            "width": 200,
            "height": 200,
            "image": "485_seller/square.webp"
        }, 475);
        nav.button({
            "type": "img",
            "name": "d_img",
            "left": 1620,
            "top": 300,
            "width": 200,
            "height": 200,
            "image": "../inv/" + inv.master[c].image
        }, 475);
        nav.tcenter({
            type: "img",
            name: "d_img",
            left: 1520,
            top: 550,
            width: 400,
            font: 20,
            hex: "#ffffff",
            text: "Buy for $" + inv.master[c].buy
        }, 485);
        nav.tcenter({
            type: "img",
            name: "d_img",
            left: 1520,
            top: 580,
            width: 400,
            font: 20,
            hex: "#ffffff",
            text: inv.master[c].display
        }, 485);

        nav.tcenter({
            type: "img",
            name: "d_img",
            left: 1520,
            top: 610,
            width: 400,
            font: 20,
            hex: "#ffffff",
            text: inv.gett(inv.master[c].type)
        }, 485);

        nav.tcenter({
            type: "img",
            name: "d_img",
            left: 1520,
            top: 640,
            width: 400,
            font: 20,
            hex: "#ffffff",
            text: inv.master[c].desc
        }, 485);
        nav.tcenter({
            type: "img",
            name: "d_img",
            left: 1520,
            top: 670,
            width: 400,
            font: 20,
            hex: "#ffffff",
            text: "In Inventory: " + inv.master[c].count
        }, 485);

        nav.button({
            "type": "btn",
            "name": "e_up",
            "left": 1620,
            "top": 700,
            "width": 30,
            "height": 30,
            "image": "485_seller/up.webp"
        }, 485);
        nav.button({
            "type": "btn",
            "name": "e_down",
            "left": 1820,
            "top": 700,
            "width": 30,
            "height": 30,
            "image": "485_seller/down.webp"
        }, 485);
        nav.tcenter({
            type: "img",
            name: "d_img_count",
            left: 1520,
            top: 700,
            width: 400,
            font: 20,
            hex: "#ffffff",
            text: "0"
        }, 485);
        nav.button({
            "type": "btn",
            "name": "e_sell",
            "left": 1530,
            "top": 740,
            "width": 380,
            "height": 80,
            "image": "485_seller/sell.webp"
        }, 485);
        nav.tcenter({
            type: "clickthrough",
            name: "d_img_price",
            left: 1520,
            top: 760,
            width: 400,
            font: 30,
            hex: "#ffffff",
            text: "Sell: $0"
        }, 485);
    }
    //switch (name) {
    //    case "":
    //        break;
    //    default:
    //        break;
    //}
};

room485.chatcatch = function (callback) {
    let c;
    switch (callback) {
        case "leave":
            char.room(475);
            break;
        case "sell":
            nav.kill();
            c = 0;
            nav.button({
                "type": "img",
                "name": "c_" + i,
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "485_seller/sellbg.webp"
            }, 485);
            
            for (let i = 0; i < inv.master.length; i++) {
                if (inv.master[i].buy !== null) {
                    nav.button({
                        "type": "btn",
                        "name": "c_" + i,
                        "left": ((c % 8) * 140) + 350,
                        "top": 200 + (Math.floor(c / 8) * 140),
                        "width": 120,
                        "height": 120,
                        "image": "485_seller/square.webp"
                    }, 485);
                    nav.button({
                        "type": "btn",
                        "name": "c_" + i,
                        "left": ((c % 8) * 140) + 350,
                        "top": 200 + (Math.floor(c / 8) * 140),
                        "width": 120,
                        "height": 120,
                        "image": "../inv/" + inv.master[i].image
                    }, 485);

                    nav.t({
                        type: "clickthrough",
                        name: "t",
                        left: ((c % 8) * 140) + 355,
                        top: 200 + (Math.floor(c / 8) * 145),
                        font: 20,
                        hex: "#ffffff",
                        text: inv.master[i].count
                    }, 485);
                    c++;
                }
            }
            nav.back("leave");
            break;
        default:
            break;
    }
};

room485.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!seller",
            text: "Got anything to sell?",
            button: [
                { chatID: -1, text: "I do", callback: "sell" },
                { chatID: 1, text: "What is this place?", callback: "" },
                { chatID: -1, text: "No thanks, I'm going to go. ", callback: "leave" },
            ]
        },
        {
            chatID: 1,
            speaker: "!seller",
            text: "This, my friend, is the safe zone of these caves. The cult has agreed to " +
                "leave my people alone, and we keep the others away. ",
            button: [
                { chatID: 2, text: "Why are you all here?", callback: "" },
                { chatID: 3, text: "What are the others?", callback: "" },
                { chatID: 4, text: "How do you keep the cult away?", callback: "" },
                { chatID: 0, text: "ok", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "!seller",
            text: "My friend, this where where the people that don't want to be part of the grind " +
                "of the outside world. We have everything we need, soft ground, food, and the " +
                "company of some cool people. We did't alway have food, but I set up this stand to " +
                "get food from the cult that passes though. We've agreed to a trade of food for safe " +
                "passage of their followers. ",
            button: [
                { chatID: 1, text: "ok", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "!seller",
            text: "As they say, not all who wander are lost. There are things in this cave that lay " +
                "in wait for a traveler, such as yourself, to pouce on and do terrible things to in the " +
                "solitude of these walls. You should turn back and never go deeper than here. ",
            button: [
                { chatID: 1, text: "ok", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "!seller",
            text: "The leader of the C.U.M. cult is my cousin. While I don't agree with the church he " +
                "has created and he doesn't agree with the cave lifestyle we have agreed to help each other. " +
                "He really was great when we were younger, but I think he's taken it too far. ",
            button: [
                { chatID: 1, text: "ok", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};