//purchase
var room401 = {};
room401.main = function () {
    $('#room-buttons').html('<div id="wardrobe_body">' +
        '<div class="wardrobe-line"></div>' +
        '<div class="wardrobe-line" id="wardrobe-line-buy"></div></div>');
    $('#wardrobe_body').css({ 'width': (1920 * g.ratio) + 'px', 'top': (100 * g.ratio) + 'px' });
    g.internal = 0;
    var switchName = g.pass;

    if (switchName === "bra")
        navList = [402];
    else
        navList = [400];

    inv.createElements();

    g.pass = {
        roomID: switchName === "bra" ? 402 : 400,
        changeClothes: false,
        shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null
    };

    if (switchName === "saucy" || switchName === "shoe" || switchName === "mens" || switchName === "bra") {
        g.pass.shoes = cl.c.shoes;
        g.pass.socks = cl.c.socks;
        g.pass.pants = cl.c.pants;
        g.pass.panties = cl.c.panties;
        g.pass.bra = cl.c.bra;
        g.pass.shirt = cl.c.shirt;
        g.pass.dress = cl.c.dress;
        g.pass.swimsuit = cl.c.swimsuit;
        g.pass.pj = cl.c.pj;
        $("#room_footer").hide();
        $.each(g.rooms, function (j, u) {
            if (u.roomID === 400) {
                nav.button({
                    "type": "zbtn",
                    "name": "roomChange",
                    "left": 350,
                    "top": 980,
                    "width": 200,
                    "height": 75,
                    "image": "navBtn/" + u.btn 
                }, 401);
                return false;
            }
        });
    }

    switch (switchName) {
        case "purse":
            navList = [400];
            nav.bg("401_purchase/purse.jpg", "401_purchase/purse.jpg");
            room401.makeInv(["b"], sc.checkevent("me", 7));
            break;
        case "saucy":
            navList = [];
            g.pass.roomID = 400;
            g.pass.changeClothes = true;
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
            navList = [];
            g.pass.roomID = 400;
            g.pass.changeClothes = true;
            cl.c.shoes = null;
            cl.display();
            var buyGirls = sc.checkevent("me", 7);
            nav.bg("401_purchase/shoe.jpg", "401_purchase/shoe.jpg");
            room401.makeClothing("shoes", "m", true);
            room401.makeClothing("shoes", "f", buyGirls);
            room401.makeClothing("socks", "m", true);
            room401.makeClothing("socks", "f", buyGirls);
            break;
        case "mens":
            navList = [];
            g.pass.roomID = 400;
            g.pass.changeClothes = true;
            nav.bg("401_purchase/mens.jpg", "401_purchase/mens.jpg");
            room401.makeClothing("panties", "m", true);
            room401.makeClothing("pants", "m", true);
            room401.makeClothing("shirt", "m", true);
            room401.makeClothing("swimsuit", "m", true);
            break;
        case "salon":
            navList = [405];
            nav.bg("401_purchase/salon.jpg", "401_purchase/salon.jpg");
            break;
        case "electronic":
            navList = [400];
            room401.makeInv(["p"], true);
            nav.bg("401_purchase/electronic.jpg", "401_purchase/electronic.jpg");
            break;
        case "bra":
            navList = [];
            g.pass.roomID = 400;
            g.pass.changeClothes = true;
            cl.c.shirt = cl.c.pants = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
            cl.display();
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
            room401.makeInv(["d"], sc.checkevent("me", -8));
            navList = [650, 0];
            break;
        case "happyGirl":
            navList = [400];
            room401.makeInv(["r"], true);
            nav.bg("401_purchase/paint.jpg", "401_purchase/paint.jpg");
            break;
        default:
            g.error("g.pass", g.pass);
            break;
    }
    
    nav.buildnav(navList);

    $('.store-inv').click(function () {
        var thisName = $(this).data('name');
        var thisItem = inv.get(thisName);
        var thisID = $(this).closest('.menu-popup').attr('id');
        var thisCanBuy = $(this).data("canbuy").toString() === "true";

        $('#menu_displayIcon').html('<img src="./images/inv/' + thisItem.image + '"/>');
        $("#menu_displayCost").html("$" + thisItem.cost);
        $("#menu_displayName").html(thisItem.display);
        $('#menu_displayType').html(inv.gett(thisItem.type));
        $("#menu_displayDesc").html(thisItem.desc);
        //$("#menu_displayInfo").html("info");
        $("#menu_displayAction").html("BUY - $" + thisItem.cost);
        $("#menu_displayAction").attr("data-itype", "inv");
        $("#menu_displayAction").attr("data-name", thisName);

        $("#menu_displayCount").html("1");
        $("#menu_displayUp").attr("data-price", thisItem.cost);
        $("#menu_displayDown").attr("data-price", thisItem.cost);

        var thisMoney = g.get("money");

        if (thisItem.entry && thisItem.count === null) {
            $('#menu_displayAction').hide();
            $('#menu_displayInfo').html("Already Purchased");
        }
        else if (thisItem.cost > thisMoney) {
            $('#menu_displayAction').hide();
            $('#menu_displayInfo').html("Can't Afford");
        }
        else {
            $('#menu_displayAction').show();
            $('#menu_displayInfo').html("");
            if (thisItem.count === null) {
                $("#menu_displayCountLine").hide();
            }
            else {
                $("#menu_displayAdditional").html("In Inventory: " + thisItem.count)
                $("#menu_displayCountLine").show();
            }
        }
    });

    $('.store-clothing').click(function () {
        var thisName = $(this).data('name');
        var thisType = $(this).data("type");
        var ci = cl.where(thisType, thisName);
        var cli = cl.list[ci];
        var canBuy = $(this).attr('data-canbuy').toString() === "true";

        $('#menu_displayIcon').html('<img src="./images/mainChar/icons/' + cli.img + '"/>');
        $("#menu_displayCost").html("$" + cli.price);
        $("#menu_displayName").html(cli.display);
        $('#menu_displayType').html(cli.type.charAt(0).toUpperCase() + cli.type.slice(1));
        $("#menu_displayDesc").html((cli.sex === "m" ? "Boy" : "Girly") + " - " + cl.set[cli.daring + 1].name);
        //$("#menu_displayInfo").html("info");
        $("#menu_displayAction").html("BUY - $" + cli.price);
        $("#menu_displayAction").attr("data-itype", "clothing");
        $("#menu_displayAction").attr("data-name", thisName);
        $("#menu_displayAction").attr("data-type", thisType);

        if (canBuy) {
            switch (cli.type) {
                case "pants":
                    cl.c.dress = null;
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.pants = cli.name;
                    break;
                case "shirt":
                    cl.c.dress = null;
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.shirt = cli.name;
                    break;
                case "dress":
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.dress = cli.name;
                    break;
                case "swimsuit":
                    cl.c.bra = null;
                    cl.c.panties = null;
                    cl.c.shirt = null;
                    cl.c.pants = null;
                    cl.c.dress = null;
                    cl.c.pj = null;
                    cl.c.swimsuit = cli.name;
                    break;
                case "bra":
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.bra = cli.name;
                    break;
                case "panties":
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.panties = cli.name;
                    break;
                case "socks":
                    cl.c.pj = null;
                    cl.c.socks = cli.name;
                    break;
                case "shoes":
                    cl.c.pj = null;
                    cl.c.shoes = cli.name;
                    break;
                case "pj":
                    cl.c.bra = null;
                    cl.c.panties = null;
                    cl.c.socks = null;
                    cl.c.shirt = null;
                    cl.c.pants = null;
                    cl.c.dress = null;
                    cl.c.swimsuit = null;
                    cl.c.shoes = null;
                    cl.c.pj = cli.name;
                    break;
            }
            cl.display();
        }

        var thisMoney = g.get("money");

        if (cli.inv) {
            $('#menu_displayAction').hide();
            $('#menu_displayInfo').html("Already Own");
        }
        else if (!canBuy) {
            $('#menu_displayAction').hide();
            $('#menu_displayInfo').html("Too Girly");
        }
        else if (cli.price > thisMoney) {
            $('#menu_displayAction').hide();
            $('#menu_displayInfo').html("Can't Afford");
        }
        else {
            $('#menu_displayAction').show();
            $('#menu_displayInfo').html("");
            if (cli.inv) {
                $("#menu_displayAdditional").html("In Inventory: " + thisItem.count)
                $("#menu_displayCountLine").show();
            }
        }
    });
};

room401.makeClothing = function (type, sex, canbuy) {
    var i;
    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === type && cl.list[i].sex === sex && cl.list[i].price > 0) {
            if (!canbuy || cl.list[i].inv)
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" title="' + type + '"/>');
            else
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" data-canbuy="' + canbuy + '" class="store-clothing" title="' + type + '"/>');
            if (cl.list[i].inv)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/owned.png" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" data-canbuy="' + canbuy + '" class="store-clothing" title="' + type + '"/>');
            else if (!canbuy)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/tooGirly.png" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" data-canbuy="' + canbuy + '" class="store-clothing" title="' + type + '"/>');
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
                $('#menu-bg_' + g.internal).html('<img src="./images/mainChar/icons/' + cl.list[i].img + '" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" data-canbuy="' + canbuy + '" class="store-clothing" title="' + type + '"/>');
            if (cl.list[i].inv)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/owned.png" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" data-canbuy="' + canbuy + '" class="store-clothing" title="' + type + '"/>');
            else if (!canbuy)
                $('#menu-bg_' + g.internal).append('<img src="./images/inv/tooGirly.png" data-name="' + cl.list[i].name + '" data-type="' + cl.list[i].type + '" data-canbuy="' + canbuy + '" class="store-clothing" title="' + type + '"/>');
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
        case "roomChange":
            cl.c.shoes = g.pass.shoes;
            cl.c.socks = g.pass.socks;
            cl.c.pants = g.pass.pants;
            cl.c.panties = g.pass.panties;
            cl.c.bra = g.pass.bra;
            cl.c.shirt = g.pass.shirt;
            cl.c.dress = g.pass.dress;
            cl.c.swimsuit = g.pass.swimsuit;
            cl.c.pj = g.pass.pj;
            cl.display();
            $("#room_footer").show();
            char.room(g.pass.roomID);
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