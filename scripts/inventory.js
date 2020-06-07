var inv = {};
var pic = {};

//backpack = b
//general = g
//x = gov
//lube = l
//othe = o
//electronic
//phone = p
//a = ass toys
//z = other
//a = ass toys
//c = chastity
//h = hormone
//p = small pp 
inv.isFooter = true;
inv.leftMenu = true;
inv.roomChange = [10, 12, 201, 451, 452, 503, 552, 553];
inv.master = [
    { type: "h", name: "hormone", display: "Female Hormone", entry: false, count: 0, cost: 5, image: "hormone.png", n: false },
    { type: "g", name: "lube", display: "Sex Lube", entry: false, count: 0, cost: 10, image: "lube.png", n: false },
    { type: "g", name: "razor", display: "Razor", entry: false, count: 0, cost: 10, image: "razor.png", n: false },
    { type: "g", name: "screwdriver", display: "Screwdriver", entry: false, count: null, cost: 50, image: "screwdriver.png", n: false },
    { type: "g", name: "wine", display: "Wine", entry: false, count: 0, cost: 50, image: "wine.png", n: false },
    { type: "e", name: "acia", display: "Acia Berries", entry: false, count: 0, cost: 30, image: "acia.png", n: false },
    { type: "e", name: "soda", display: "Energy Soda", entry: false, count: 0, cost: 60, image: "energyCola.png", n: false },
    { type: "x", name: "pi_lic", display: "PI License", entry: false, count: null, cost: 0, image: "piLic.png", n: false },
    { type: "o", name: "gym", display: "Gym Pass", entry: false, count: null, cost: 0, image: "gymPass.png", n: false },
    { type: "o", name: "landlordKey", display: "Landlord's Key", entry: false, count: null, cost: 0, image: "llKey.png", n: false },
    { type: "o", name: "flatmateKey", display: "Flatmate's Key", entry: false, count: null, cost: 0, image: "elKey.png", n: false },
    { type: "o", name: "evaphoto", display: "Eva's Boobie Pictures", entry: false, count: 0, cost: 0, image: "eva_pic.png", n: false },
    { type: "b", name: "backpack", display: "Backpack", entry: false, count: null, cost: 0, image: "backpack.png", n: false },
    { type: "b", name: "briefcase", display: "Briefcase", entry: false, count: null, cost: 0, image: "breifcase.png", n: false },
    { type: "b", name: "slutPurse", display: "Slutty Pink Purse", entry: false, count: null, cost: 100, image: "purse_slut.png", n: false },
    { type: "b", name: "pinkPurse", display: "Pink Purse", entry: false, count: null, cost: 100, image: "purse_pink.png", n: false },
    { type: "p", name: "phoneBasic", display: "Basic Phone", entry: true, count: null, cost: -1, image: "phone_basic.png", n: false },
    { type: "p", name: "phoneTr", display: "Phone Sexy", entry: false, count: null, cost: 100, image: "phone_tr.png", n: false },
    { type: "p", name: "phonePink", display: "Pink Phone", entry: false, count: null, cost: 100, image: "phone_pink.png", n: false },
    { type: "p", name: "phoneLips", display: "Pink Purse", entry: false, count: null, cost: 100, image: "phone_lips.png", n: false },
    //{ type: "a", name: "plugDGreen", display: "Butt Plug", entry: false, count: null, cost: 120, image: "butt_plugGreenDiamond.png", n: false },
    //{ type: "a", name: "plugDBlue", display: "Butt Plug", entry: false, count: null, cost: 120, image: "butt_plugBlueDiamond.png", n: false },
    //{ type: "a", name: "plugDRed", display: "Butt Plug", entry: false, count: null, cost: 120, image: "butt_plugRedDiamond.png", n: false },
    //{ type: "a", name: "plugHPink", display: "Butt Plug", entry: false, count: null, cost: 150, image: "butt_plugHeart.png", n: false },
    //{ type: "a", name: "plugSPink", display: "Small Butt Plug", entry: false, count: null, cost: 80, image: "butt_pinkSoft.png", n: false },
    //{ type: "a", name: "plugMBlack", display: "Medium Butt Plug", entry: false, count: null, cost: 150, image: "butt_blackMed.png", n: false },
    //{ type: "a", name: "plugLBlack", display: "Large Butt Plug", entry: false, count: null, cost: 210, image: "butt_blackLarge.png", n: false },
    //{ type: "a", name: "blackDildo", display: "Black Dildo", entry: false, count: null, cost: 180, image: "butt_blackCock.png", n: false },
    //{ type: "a", name: "whiteDildo", display: "White Dildo", entry: false, count: null, cost: 180, image: "butt_whiteCock.png", n: false },
    //{ type: "a", name: "greenMonster", display: "Green Monster", entry: false, count: null, cost: 180, image: "butt_greenMonster.png", n: false },
    //{ type: "c", name: "chastCage", display: "Metal Cage", entry: false, count: null, cost: 120, image: "chast_cage.png", n: false },
    //{ type: "c", name: "chastPink", display: "Pink Lock", entry: false, count: null, cost: 90, image: "chast_pink.png", n: false },
    { type: "p", name: "tinypp", display: "Tiny PP", entry: false, count: null, cost: -1, image: "tinypp.png", n: false },
    { type: "z", name: "tifgift", display: "Gift From Tiffany", entry: false, count: null, cost: -1, image: "tifGift.png", n: false }
];

inv.getall = function () {
    for (var i = 0; i < inv.master.length; i++) {
        inv.master[i].entry = true;
        if (inv.master.count !== null)
            inv.master[i].count = 10;
    }
}

pic.master = [
    { name: "lolaTopless", display: "Lola Topless", entry: false, image: "lolaTopless.jpg", thumb: "lolaTopless.png" },
    { name: "landlordSleep", display: "Landlord Sleep", entry: false, image: "landloardSleep.jpg", thumb: "landloardSleep.png" },
    { name: "pantyThief", display: "Panty Theif", entry: false, image: "pantyThief.jpg", thumb: "pantyThief.png" },
    { name: "jada_b", display: "Group Photo", entry: false, image: "jada_b.jpg", thumb: "jada_b.png" },
    { name: "jada_f", display: "Group Photo", entry: false, image: "jada_f.jpg", thumb: "jada_f.png" },
    { name: "jada_p", display: "Group Photo", entry: false, image: "jada_p.jpg", thumb: "jada_p.png" }
];

pic.add = function (name) {
    var i;
    for (i = 0; i < pic.master.length; i++) {
        if (pic.master[i].name === name) {
            pic.master[i].entry = true;
            i = pic.master.length;
        }
    }
};

pic.has = function (name) {
    var i;
    for (i = 0; i < pic.master.length; i++) {
        if (pic.master[i].name === name) {
            return pic.master[i].entry;
        }
    }
    return false;
};

pic.save = function () {
    var i;
    var retArray = new Array();
    for (i = 0; i < pic.master.length; i++) {
        if (pic.master[i].entry) {
            retArray.push({ name: pic.master[i].name });
        }
    }
    return retArray;
};

pic.load = function (picList) {
    var i, j;
    for (j = 0; j < picList.length; j++) {
        for (i = 0; i < pic.master.length; i++) {
            if (pic.master[i].name === picList[j].name) {
                pic.master[i].entry = true;
                i = 1000;
            }
        }
    }
};

inv.backpack = "backpack";
inv.phone = "phoneBasic";

$(document).ready(function () {
    $('#room-inv').click(function () { inv.display(); });
});

inv.get = function (name) {
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name)
            return inv.master[i];
    }
    return null;
};

inv.has = function (name) {
    return inv.get(name).entry;
};

inv.add = function (name) {
    var i;
    for (i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name) {
            inv.master[i].entry = true;
            if (inv.master[i].count !== null)
                inv.master[i].count = inv.master[i].count + 1;
            i = 9999999;
        }
    }
};

inv.update = function (name, entry, count) {

    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name) {
            if (entry === true && inv.master[i].entry === false) {
                inv.master[i].n = true;
                updateNew = true;
            }
            else if (entry === false && inv.master[i].entry === true && inv.master[i].count === null) {
                inv.master[i].n = false;
            }
            if (count !== null) {
                if (count > 0 && !inv.master[i].entry) {
                    inv.master[i].entry = true;
                    inv.master[i].n = true;
                }
                inv.master[i].count += count;
                if (inv.master[i].count < 0)
                    inv.master[i].count = 0;
            }
            if (entry !== null)
                inv.master[i].entry = entry;
        }
    }
    inv.backpackIcon();
};

inv.use = function (name) {
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name) {
            inv.master[i].count--;
            if (inv.master[i].count < 1) {
                inv.master[i].count = 0;
                inv.master[i].entry = false;
            }
            i = 999999;
        }
    }
};

inv.backpackIcon = function () {
    var hasNew = false;
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === inv.backpack) {
            $('#room-inv').html('<img src="./images/inv/' + inv.master[i].image + '" title="Inventory" class="display-top">');
        }
        if (inv.master[i].n)
            hasNew = true;
    }
    if (hasNew)
        $('#room-inv').append('<img src="./images/inv/new.png" title="New Inventory" class="kill-invNew" class="display-top3">');
};

inv.phoneIcon = function () {
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === inv.phone) {
            $('#room-menu').html('<img src="./images/inv/' + inv.master[i].image + '" title="menu" class="display-top">');
        }
        if (inv.master[i].n)
            hasNew = true;
    }
};

inv.display = function () {
    inv.createElements();
    var counter = 0;
    var i, prevI;
    for (i = 0; i < inv.master.length; i++) {
        if (inv.master[i].entry) {
            $('#menu-bg_' + counter).html('<img src="./images/inv/' + inv.master[i].image + '" title="' + inv.master[i].display + '">');
            if (inv.master[i].n)
                $('#menu-bg_' + counter).append('<img src="./images/inv/new.png" title="New Inventory" class="display-top3" title="' + inv.master[i].display + '">');
            if (inv.master[i].count !== null)
                $('#menu-bg_' + counter).append('<div class="menu-popup-count" data-name="' + inv.master[i].name + '">' + inv.master[i].count + '</div>');
            if (inv.master[i].type === "b")
                $('#menu-bg_' + counter).attr('data-name', inv.master[i].name).addClass('inv-backpackChange');
            if (inv.master[i].type === "p")
                $('#menu-bg_' + counter).attr('data-name', inv.master[i].name).addClass('inv-phoneChange');
            if (inv.master[i].type === "e")
                $('#menu-bg_' + counter).attr('data-name', inv.master[i].name).addClass('inv-energyChange');
            if (inv.master[i].type === "h")
                $('#menu-bg_' + counter).attr('data-name', inv.master[i].name).addClass('inv-hormoneChange');
            counter++;
        }
        inv.master[i].n = false;
    }
    
    for (i = 0; i < 4; i++) {
        $('#menu-bg_' + counter).html(inv.displayClothes(i));
        $('#menu-bg_' + counter).append('<div class="menu-popup-count" data-name="clothing_' + i + '">' + cl.saveOutfit[i].name + '</div>');
        counter++;
    }
    $('#menu-bg_' + counter).html(inv.displayClothes(-1));
    $('#menu-bg_' + counter).append('<div class="menu-popup-count" data-name="clothing_-1">Current</div>');
    counter++;

    inv.isFooter = $('#room_footer').is(":visible");
    if (inv.isFooter) { $('#room_footer').hide(); }
    $('.kill-invNew').remove();
    $('.inv-backpackChange').click(function () {
        inv.backpack = $(this).data('name');
        inv.backpackIcon();
        inv.close();
    });
    $('.inv-phoneChange').click(function () {
        inv.phone = $(this).data("name");
        inv.phoneIcon();
        inv.close();
    });
    $('.inv-hormoneChange').click(function () {
        if (!g.checkflag("tookHormonePill"))
            g.mod("hormone", 30);
        g.setflag("tookHormonePill");
        inv.use("hormone");
        inv.close();
    });
    $('.inv-energyChange').click(function () {
        var thisItem = $(this).data("name");
        var j;
        for (j = 0; j < inv.master.length; j++) {
            if (inv.master[j].name === thisItem) {
                if (inv.master[j].count > 0) {
                    inv.master[j].count--;
                    switch (thisItem) {
                        case "acia":
                            g.mod("energy", 15);
                            break;
                        case "soda":
                            g.mod("energy", 50);
                            g.mod("fitness", -15);
                            break;
                        default:
                            console.log("UNK energy: " + thisItem);
                    }
                    $('.menu-popup-count[data-name="' + thisItem + '"]').text(inv.master[j].count);
                    if (inv.master[j].count < 1) {
                        inv.master[j].count = 0;
                        inv.master[j].entry = false;
                    }
                }
                j = 1000;
            }
        }
    });

    $('.inv-clothingChange').click(function () {
        var entry = parseInt($(this).data('num'));
        if (inv.roomChange.includes(g.roomID)) {

            if (entry < 0) {
                cl.c.shoes = cl.cTemp.shoes;
                cl.c.socks = cl.cTemp.socks;
                cl.c.pants = cl.cTemp.pants;
                cl.c.panties = cl.cTemp.panties;
                cl.c.bra = cl.cTemp.bra;
                cl.c.shirt = cl.cTemp.shirt;
                cl.c.dress = cl.cTemp.dress;
                cl.c.swimsuit = cl.cTemp.swimsuit;
                cl.c.accessories = cl.cTemp.accessories;
                cl.c.pj = cl.cTemp.pj;
            }
            else {
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
            }
            cl.display();
            char.room(g.roomID);
        }
        else {
            g.popUpNotice("You can only change in your room or a bathroom. ");
        }
    });

    w = 1800 * g.ratio;
    h = 50 * g.ratio;
    t = 980 * g.ratio;
    l = 60 * g.ratio;
    $('#room-menuButtons').append('<button id="inv_close" class="btn btn-danger pos-abs" style="width: ' + w + 'px; top: ' + t + 'px; left: ' + l + 'px;" >Close</button>');
    $('#inv_close').click(function () {
        inv.close();
    });
};

inv.displayClothes = function (e) {
    var t;
    var displayString = "";
    if (e < 0)
        t = cl.cTemp;
    else
        t = cl.saveOutfit[e];
    
    if (t.shoes !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("shoes", t.shoes)].img, e);
    if (t.socks !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("socks", t.socks)].img, e);
    if (t.pants !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("pants", t.pants)].img, e);
    if (t.panties !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("panties", t.panties)].img, e);
    if (t.bra !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("bra", t.bra)].img, e);
    if (t.shirt !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("shirt", t.shirt)].img, e);
    if (t.dress !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("dress", t.dress)].img, e);
    if (t.swimsuit !== null)
        displayString += inv.displayClothesSub(cl.list[cl.where("swimsuit", t.swimsuit)].img, e);
    //if (t.accessories !== null)
    //    displayString += inv.displayClothesSub(cl.where("swimsuit", t.accessories).img);

    return displayString;
};

inv.displayClothesSub = function (img, e) {
    return '<img src="./images/mainChar/icons/inv/' + img + '" class="inv-clothingChange" data-num="' + e + '"/>';
};

inv.close = function () {
    $('#room-menuButtons').html('').hide();
    if (inv.isFooter)
        $('#room_footer').show();
};

inv.createElements = function () {
    var w, t, l, s, rw, rl, rt, counter;
    w = 160 * g.ratio;
    s = 170 * g.ratio;
    t = 100 * g.ratio;
    l = 360 * g.ratio;
    rw = 50 * g.ratio;
    rl = 1350 * g.ratio;
    rt = 20 * g.ratio;
    counter = 0;
    $('#room-menuButtons').css({ 'background': 'none' }).show().html('');
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 9; j++) {
            $('#room-menuButtons').append('<div id="menu-bg_' + counter + '" class="menu-popup" style="width: ' + w + 'px; height: ' + w + 'px; top: ' + ((s * i) + t) + 'px; left: ' + ((s * j) + l) + 'px; "> </div>');
            counter++;
        }
    }

};

//{ type: "l", name: "lube", entry: false, count: 0, cost: 0, image: "lube.png", n: false },

inv.save = function () {
    var retArray = {
        master: new Array(),
        backpack: inv.backpack,
        phone: inv.phone
    };
    var i;
    for (i = 0; i < inv.master.length; i++)
        retArray.master.push({
            name: inv.master[i].name,
            entry: inv.master[i].entry,
            count: inv.master[i].count,
            n: inv.master[i].n
        });
    return retArray;
};

//need to set values to false and 0 on new load
inv.load = function (ia) {
    var i, j;
    for (i = 0; i < ia.master.length; i++) {
        for (j = 0; j < inv.master.length; j++) {
            if (ia.master[i].name === inv.master[j].name) {
                inv.master[j].entry = ia.master[i].entry;
                inv.master[j].count = ia.master[i].count;
                inv.master[j].n = ia.master[i].n;
                j = 100000;
            }
        }
    }
    inv.backpack = ia.backpack;
    if (typeof ia.phone != "undefined")
        inv.phone = ia.phone;
    else
        inv.phone = "phoneBasic";
    inv.backpackIcon();
    inv.phoneIcon();
};