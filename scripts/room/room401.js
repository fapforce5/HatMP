//purchase
var room401 = {};
room401.main = function () {
    $('#room-buttons').html('<div id="wardrobe_body">' +
        '<div class="wardrobe-line"></div>' +
        '<div class="wardrobe-line" id="wardrobe-line-buy"></div></div>');
    $('#wardrobe_body').css({ 'width': (1920 * g.ratio) + 'px', 'top': (100 * g.ratio) + 'px' });
    g.internal = 0;
    var navList = [400];
    if (g.pass === "bra")
        navList = [402];
    inv.createElements();
    switch (g.pass) {
        case "purse":
            nav.bg("401_purchase/purse.jpg", "401_purchase/purse.jpg");
            room401.makeInv(["b"], sc.checkevent("me", 7));
            break;
        case "saucy":
            nav.bg("401_purchase/saucy.jpg", "401_purchase/saucy.jpg");
            room401.makeClothingDaring("pants", [1, 2, 3], true);
            room401.makeClothingDaring("pants", [4], false);
            room401.makeClothingDaring("shirt", [1, 2, 3], true);
            room401.makeClothingDaring("shirt", [4], false);
            room401.makeClothingDaring("dress", [1, 2, 3], true);
            room401.makeClothingDaring("dress", [4], false);
            room401.makeClothingDaring("swimsuit", [1, 2, 3], true);
            room401.makeClothingDaring("swimsuit", [4], false);
            break;
        case "shoe":
            var buyGirls = sc.checkevent("me", 7);
            nav.bg("401_purchase/shoe.jpg", "401_purchase/shoe.jpg");
            room401.makeClothing("shoes", "m", true);
            room401.makeClothing("shoes", "f", buyGirls);
            room401.makeClothing("socks", "m", true);
            room401.makeClothing("socks", "f", buyGirls);
            break;
        case "mens":
            nav.bg("401_purchase/mens.jpg", "401_purchase/mens.jpg");
            room401.makeClothing("panties", "m", true);
            room401.makeClothing("pants", "m", true);
            room401.makeClothing("shirt", "m", true);
            room401.makeClothing("swimsuit", "m", true);
            break;
        case "salon":
            nav.bg("401_purchase/salon.jpg", "401_purchase/salon.jpg");
            break;
        case "electronic":
            room401.makeInv(["p"], true);
            nav.bg("401_purchase/electronic.jpg", "401_purchase/electronic.jpg");
            break;
        case "bra":
            nav.bg("401_purchase/bra.jpg", "401_purchase/bra.jpg");
            room401.makeClothing("bra", "f", true);
            room401.makeClothing("panties", "f", true);
            room401.makeClothing("pj", "f", true);
            break;
        case "general":
            nav.bg("404_spankys/404_bodega.jpg", "404_spankys/404_bodega.jpg");
            if (sc.checkevent("spanky", 3))
                room401.makeInv(["h", "e", "g"], true);
            else
                room401.makeInv(["e", "g"], true);
            navList = [404, 0];
            break;
        case "fuckMyDirtyAssholeHard":
            nav.bg("650_toyStore/650_front.jpg", "650_toyStore/650_front.jpg");
            room401.makeClothing("chastity", "f", sc.checkevent("me", -7));
            room401.makeClothing("buttplug", "f", sc.checkevent("me", -8));
            navList = [650, 0];
            break;
        case "happyGirl":
            room401.makeInv(["r"], true);
            nav.bg("401_purchase/paint.jpg", "401_purchase/paint.jpg");
            break;
        default:
            g.error("g.pass", g.pass);
            break;
    }
    
    nav.buildnav(navList);

    $('.store-inv').click(function () {
        var thisItem = inv.get($(this).data('name'));
        var thisID = $(this).closest('.menu-popup').attr('id');
        var thisCanBuy = $(this).data("canbuy").toString() === "true";
        if (g.get("money") < thisItem.cost) {
            $('#' + thisID).append('<img src="./images/inv/afford.png"/>');
        }
        else if (!thisCanBuy) {
            $('#' + thisID).append('<img src="./images/inv/tooGirly.png"/>');
        }
        else {
            g.mod("money", -1 * thisItem.cost);
            g.popUpNotice("Purchased " + thisItem.display);
            if (thisItem.count === null) {
                inv.update(thisItem.name, true, null);
                $('#' + thisID).append('<img src="./images/inv/sold.png"/>');
                $(this).removeClass('store-inv');
            }
            else {
                inv.update(thisItem.name, true, 1);
            }
        }
    });

    $('.store-clothing').click(function () {
        var thisName = $(this).data('name');
        var thisType = $(this).data("type");
        var cli = cl.where(thisType, thisName);
        var thisID = $(this).closest('.menu-popup').attr('id');

        if (g.get("money") < cl.list[cli].price) {
            $('#' + thisID).append('<img src="./images/inv/afford.png"/>');
        }
        else {
            g.mod("money", -1 * cl.list[cli].price);
            g.popUpNotice("Purchased " + cl.list[cli].display);
            cl.list[cli].inv = true;
            $('#' + thisID).append('<img src="./images/inv/sold.png"/>');
            $(this).removeAttr("data-name").removeAttr("data-type").removeClass("store-clothing");
        }
        if (g.pass === "bra")
            g.internal = "purchased"
        
    });
};

room401.makeClothing = function (type, sex, canbuy) {
    var i;
    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === type && cl.list[i].sex === sex && cl.list[i].price > 0) {
            if (!canbuy || cl.list[i].inv)
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" title="' + type + '"/>');
            else
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" class="store-clothing" title="' + type + '"/>');
            if (cl.list[i].inv)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/owned.png"/>');
            else if (!canbuy)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/tooGirly.png"/>');
            if (!cl.list[i].inv)
                $('#menu-bg_' + g.internal).append('<div>$' + cl.list[i].price + '</div>');
            
            g.internal++;
        }
    }
};

room401.makeClothingDaring = function (type, daring, canbuy) {
    var i;
    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === type && daring.includes(cl.list[i].daring) && cl.list[i].price > 0) {
            if (!canbuy || cl.list[i].inv)
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" title="' + type + '"/>');
            else
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" class="store-clothing" title="' + type + '"/>');
            if (cl.list[i].inv)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/owned.png"/>');
            else if (!canbuy)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/tooGirly.png"/>');
            if (!cl.list[i].inv)
                $('#menu-bg_' + g.internal).append('<div>$' + cl.list[i].price + '</div>');

            g.internal++;
        }
    }
};

room401.makeInv = function (typeArray, canbuy) {
    var i, j;
    
    for (j = 0; j < typeArray.length; j++) {
        var type = typeArray[j];
        for (i = 0; i < inv.master.length; i++) {
            if ((inv.master[i].type === type && !(inv.master[i].entry && inv.master[i].count === null)) && inv.master[i].cost > 0) {
                if (inv.master[i].name === "razor") {
                    if (sc.checkevent("me", -1)) {
                        $('#menu-bg_' + g.internal).html('<img src="./images/inv/' + inv.master[i].image + '" data-name="' + inv.master[i].name + '" data-canbuy="' + canbuy + '" class="store-inv" title="' + inv.master[i].display + '"/>');
                        $('#menu-bg_' + g.internal).append('<div>$' + inv.master[i].cost + '</div>');
                    }
                    else {
                        $('#menu-bg_' + g.internal).html('<img src="./images/inv/' + inv.master[i].image + '"  title="' + inv.master[i].display + '"/>');
                        $('#menu-bg_' + g.internal).append('<img src="./images/inv/tooGirly.png"/>');
                        $('#menu-bg_' + g.internal).append('<div>$' + inv.master[i].cost + '</div>');
                    }
                }
                else if (inv.master[i].name === "lube") {
                    if (sc.getstep("missy") > 14) {
                        $('#menu-bg_' + g.internal).html('<img src="./images/inv/' + inv.master[i].image + '" data-name="' + inv.master[i].name + '" data-canbuy="' + canbuy + '" class="store-inv"  title="' + inv.master[i].display + '"/>');
                        $('#menu-bg_' + g.internal).append('<div>$' + inv.master[i].cost + '</div>');
                    }
                    else {
                        $('#menu-bg_' + g.internal).html('<img src="./images/inv/' + inv.master[i].image + '"  title="' + inv.master[i].display + '"/>');
                        $('#menu-bg_' + g.internal).append('<img src="./images/inv/tooGirly.png"/>');
                        $('#menu-bg_' + g.internal).append('<div>$' + inv.master[i].cost + '</div>');
                    }
                }
                else {
                    $('#menu-bg_' + g.internal).html('<img src="./images/inv/' + inv.master[i].image + '" data-canbuy="' + canbuy + '" data-name="' + inv.master[i].name + '" class="store-inv"  title="' + inv.master[i].display + '"/>');
                    $('#menu-bg_' + g.internal).append('<div>$' + inv.master[i].cost + '</div>');
                }
                g.internal++;
            }
        }
    }

};

room401.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room401.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room401.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I'm not getting that. That's too feminine [Not daring enough]",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I don't have enough money for that. ",
            button: []
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};