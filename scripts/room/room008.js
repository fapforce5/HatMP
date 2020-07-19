//wardrobe
//Don't use g.internal
var room8 = {};

room8.main = function () {

    var navList = [g.pass];
    if (g.pass === 52) 
        nav.bg("8_wardrobe/52_wardrobe.jpg");
    else if (g.pass === 502)
        nav.bg("8_wardrobe/502_wardrobe.jpg");
    else if (g.pass === 201)
        nav.bg("8_wardrobe/201.jpg");
    else if (g.pass === 451)
        nav.bg("8_wardrobe/451.jpg");
    else if (g.pass === 452)
        nav.bg("8_wardrobe/452.jpg");
    else if (g.pass === 552)
        nav.bg("8_wardrobe/552.jpg");

    nav.buildnav(navList);

    var quickList = "";
    $.each(cl.saveOutfit, function (i, v) {
        quickList = quickList.concat('<div class="wardrobe-quick-update" data-e="' + i + '">' +
            '<input type="text" class="wardrobe-quick-name" data-e="' + i + '" placeholder="Rename Outfit" value="' + v.name + '" data-awake="' + v.isReg + '"/>' +
            '<button type="button" class="wardrobe-quick wardrobe-quick-select" data-e="' + i + '" data-type="change">' +
            '<img src="./images/general/shirt.png" />' +
            '<span class="wardrobe-quick-namechange" data-e="' + i + '"> Wear</span>' +
            '</button>' +
            '<button type="button" class="wardrobe-quick" data-e="' + i + '" data-type="savt" data-awake="' + v.isReg + '">' +
            '<img src="./images/general/save.png" /> Save' +
            '</button>' +
            '</div>');
    });

    $('#room-buttons').html('<div id="wardrobe_body">' +
        '<div class="wardrobe-quickSelect">' +
        quickList +
        '</div>' +
        '<div class="wardrobe-line">' +
        '<button class="wardrobe-icon wardrobe-type" type="button" data-ctype="nude">' +
        '<img src="./images/wardrobe/nude.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="panties">' +
        '<img src="./images/wardrobe/underwear.png" />' +
         '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="bra">' +
        '<img src="./images/wardrobe/bra.png" />' +
         '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="socks">' +
        '<img src="./images/wardrobe/socks.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="pants">' +
        '<img src="./images/wardrobe/pants.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="shirt">' +
        '<img src="./images/wardrobe/shirt.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="dress">' +
        '<img src="./images/wardrobe/dress.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="shoes">' +
        '<img src="./images/wardrobe/shoes.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="swimsuit">' +
        '<img src="./images/wardrobe/swimsuit.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="pj">' +
        '<img src="./images/wardrobe/pj.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="accessories">' +
        '<img src="./images/wardrobe/accessories.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="chastity">' +
        '<img src="./images/wardrobe/chastity.png" />' +
        '</button><button class="wardrobe-icon wardrobe-type" type="button" data-ctype="buttplug">' +
        '<img src="./images/wardrobe/buttplug.png" />' +
        '</button></div>' +
        '<div class="wardrobe-line" id="wardrobe-line-selection"></div>' +
        '</div>');
    room8.chatcatch("c");
    $('#wardrobe_body').css({ 'width': (1920 * g.ratio) + 'px', 'top': (100 * g.ratio) + 'px' });
    $('.wardrobe-type').click(function () {
        var ctype = $(this).data('ctype');
        switch (ctype) {
            case 'nude':
                cl.c.shoes = null;
                cl.c.socks = null;
                cl.c.pants = null;
                cl.c.panties = null;
                cl.c.bra = null;
                cl.c.shirt = null;
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.accessories = null;
                cl.c.accessories = new Array();
                cl.display();
                room8.chatcatch("c");
                break;
            default:
                mb_makeButtons(ctype);
                break;
        }
        
        function mb_makeButtons(mb_ctype) {
            $('#wardrobe-line-selection').html('<button class="wardrobe-icon wardrobe-change" type="button" data-layer="' + mb_ctype + '" data-ttype="null"><img src="./images/mainChar/remove.png" /></button>');
            $.each(cl.list, function (i, v) {
                if (v.inv && v.type === mb_ctype) {
                    $('#wardrobe-line-selection').append('<button class="wardrobe-icon wardrobe-change" type="button" data-layer="' + mb_ctype + '" data-ttype="' + v.name + '"><img src="./images/mainChar/icons/' + v.img + '" /></button>');
                }
            });
        }

        $('.wardrobe-change').click(function () {
            var layer = $(this).data('layer');
            var ttype = $(this).data('ttype');
            if (ttype === "null")
                ttype = null;
            switch (layer) {
                case "pants":
                    cl.c.dress = null;
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.pants = ttype;
                    break;
                case "shirt":
                    cl.c.dress = null;
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.shirt = ttype;
                    break;
                case "dress":
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.dress = ttype;
                    break;
                case "swimsuit":
                    cl.c.bra = null;
                    cl.c.panties = null;
                    cl.c.shirt = null;
                    cl.c.pants = null;
                    cl.c.dress = null;
                    cl.c.pj = null;
                    cl.c.swimsuit = ttype;
                    break;
                case "bra":
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.bra = ttype;
                    break;
                case "panties":
                    cl.c.swimsuit = null;
                    cl.c.pj = null;
                    cl.c.panties = ttype;
                    break;
                case "socks":
                    cl.c.pj = null;
                    cl.c.socks = ttype;
                    break;
                case "shoes":
                    cl.c.pj = null;
                    cl.c.shoes = ttype;
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
                    cl.c.pj = ttype;
                    break;
                case "chastity":
                    if (ttype === null)
                        cl.c.chastity = null;
                    else {
                        var thisSize = cl.list[cl.where("chastity", ttype)].daring;
                        if (thisSize > cl.c.cock)
                            chat(11, 8);
                        else
                            cl.c.chastity = ttype;
                    }
                    break;
                case "buttplug":
                    if (ttype === null)
                        cl.c.buttplug = null;
                    else {
                        var thisButthole = cl.list[cl.where("buttplug", ttype)].daring;
                        if (thisButthole > cl.c.butthole)
                            chat(12, 8);
                        else
                            cl.c.buttplug = ttype;
                    }
                    break;
                case "accessories":
                    if (ttype === null)
                        cl.c.accessories = new Array();
                    else {
                        var inArray = cl.c.accessories.indexOf(ttype);
                        if (inArray > -1)
                            cl.c.accessories.splice(inArray, 1);
                        else
                            cl.c.accessories.push(ttype);
                    }
                    break;
                default:
                    g.error("room8 - wardrobe Change", layer);
                    break;
            }
            cl.display();
            room8.chatcatch("c");
        });

    });
    $('.wardrobe-quick').click(function () {
        var entry = $(this).data('e');
        var type = $(this).data('type');
        if (type === "change") {
            cl.c.shoes = cl.saveOutfit[entry].shoes;
            cl.c.socks = cl.saveOutfit[entry].socks;
            cl.c.pants = cl.saveOutfit[entry].pants;
            cl.c.panties = cl.saveOutfit[entry].panties;
            cl.c.bra = cl.saveOutfit[entry].bra;
            cl.c.shirt = cl.saveOutfit[entry].shirt;
            cl.c.dress = cl.saveOutfit[entry].dress;
            cl.c.swimsuit = cl.saveOutfit[entry].swimsuit;
            cl.c.accessories = cl.saveOutfit[entry].accessories;
            cl.c.pj = cl.saveOutfit[entry].pj;
            cl.display();
            room8.chatcatch("c");
        }
        else {
            cl.saveOutfit[entry].shoes = cl.c.shoes;
            cl.saveOutfit[entry].socks = cl.c.socks;
            cl.saveOutfit[entry].pants = cl.c.pants;
            cl.saveOutfit[entry].panties = cl.c.panties;
            cl.saveOutfit[entry].bra = cl.c.bra;
            cl.saveOutfit[entry].shirt = cl.c.shirt;
            cl.saveOutfit[entry].dress = cl.c.dress;
            cl.saveOutfit[entry].swimsuit = cl.c.swimsuit;
            cl.saveOutfit[entry].pj = cl.c.pj;
            cl.saveOutfit[entry].accessories = cl.c.accessories;
            var newName = $('.wardrobe-quick-name[data-e=' + entry + ']').val().trim();
            if (newName.length > 20)
                newName = newName.substring(0, 20);
            cl.saveOutfit[entry].name = g.cleanText(newName);
            chat(0, 8);
        }
        g.pass = "";
    });
    if (!sc.checkevent("me", -4)) {
        sc.setstep("me", -4);
        chat(1, 8);
    }
};

room8.btnclick = function(name){

};

room8.chatcatch = function (callback) {
    if (callback === "c") {
        if (cl.c.pj === null) {
            $('.wardrobe-quick-name[data-awake="true"]').prop("disabled", false);
            $('.wardrobe-quick-name[data-awake="false"]').prop("disabled", true);
            $('.wardrobe-quick[data-awake="true"').show();
            $('.wardrobe-quick[data-awake="false"').hide();
        }
        else {
            $('.wardrobe-quick-name[data-awake="true"]').prop("disabled", true);
            $('.wardrobe-quick-name[data-awake="false"]').prop("disabled", false);
            $('.wardrobe-quick[data-awake="true"').hide();
            $('.wardrobe-quick[data-awake="false"').show();
        }
    }
};

room8.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Saved",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "This is your wardrobe, it's where you get dressed for the day. ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "To remove all your clothes click the beige icon on the far left of the icons. Your profile will update to " +
                "the naked man.",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "<span class='hl'>To put on your underwear click the underwear icon</span> next to the nude icon. Click the boxers to wear the boxers. " +
                " <span class='hl'> to remove your boxers click the red 'X'.</span>",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Currently you don't have that many choices for clothing, but in time your collection will grow. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Before you can go anywhere you must first be decent with the typical clothes for a young man: <span class='hl'>underwear, pants, shirt, and shoes.</span>",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "You can save your outfits. The line at the top is the name of your outfit that you can update. " +
                "Below that line is the <span class='hl'><img src='./images/general/shirt.png'> Wear button</span>. If you click that you can wear " +
                "that outfit. To update the outfit click the <span class='hl'><img src='./images/general/edit.png'> Save button</span>. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "<span class='hl'>The first 4 outfits are for daily wear.</span> The <span class='hl'>last outfit is only for pajamas</span>. " +
                "When you go to sleep you will automatically wear the sleep outfit, so only pajamas can be " +
                "placed in that outfit. The first four can be selected to wear when you wake up.",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "You can't save pajamas as regular clothes. Use the 'Sleep' entry to save.",
            button: [
                { chatID: -1, text: "Close", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "You have to wear pajamas to bed. Only Pajamas can be saved.",
            button: [
                { chatID: -1, text: "Close", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Good luck, dress sharp, and remember clothes make the man.",
            button: [
                { chatID: -1, text: "Close", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "OMG It's so tight. My dick is way too big for this chastity device.",
            button: [
                { chatID: -1, text: "Close", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "My butthole is way too tight for that! I'm going to have to work on it so I can fit this in!",
            button: [
                { chatID: -1, text: "Close", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};