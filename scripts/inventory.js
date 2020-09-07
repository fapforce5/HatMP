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
//d = dildo
//h = hormone
//p = small pp 
//r = room painting
inv.isFooter = true;
inv.leftMenu = true;
inv.roomChange = [10, 12, 201, 451, 452, 503, 552, 553];

inv.t = [
    { t: "b", n: "Backpack" },
    { t: "c", n: "Closet" },
    { t: "d", n: "Dildo" },
    { t: "e", n: "Energy Snack" },
    { t: "g", n: "General Item" },
    { t: "h", n: "Female Hormone" },
    { t: "m", n: "Makeup" },
    { t: "o", n: "Key" },
    { t: "p", n: "Phone Case" },
    { t: "r", n: "Room Decoration" },
    { t: "t", n: "Penis Cream" },
    { t: "z", n: "Gift" },
    
];

inv.master = [
    { type: "h", name: "hormone", display: "Sissy Bimbo Pills", entry: false, count: 0, cost: 5, image: "hormone.png", n: false, desc: "Take 1 pill a day to increase your female hormone level" },
    { type: "g", name: "lube", display: "Stuff My Butt Lube", entry: false, count: 0, cost: 2, image: "lube.png", n: false, desc: "Lube for stuffing your Sissy Pussy" },
    { type: "g", name: "razor", display: "Razor", entry: false, count: 0, cost: 10, image: "razor.png", n: false, desc: "Shave you body" },
    { type: "g", name: "wine", display: "Rotting Grape Wine", entry: false, count: 0, cost: 50, image: "wine.png", n: false, desc: "Time to get drunk!" },
    { type: "g", name: "redbox", display: "Red Box", entry: false, count: null, cost: 0, image: "redbox.png", n: false, desc: "Red box you need to deliver to Missy" },
    { type: "e", name: "acia", display: "Acia Berries", entry: false, count: 0, cost: 10, image: "acia.png", n: false, desc: "Add 15 energy" },
    { type: "e", name: "soda", display: "Super Awesome Soda", entry: false, count: 0, cost: 20, image: "energyCola.png", n: false, desc: "Add 50 energy and lose 15 fitness points" },
    { type: "x", name: "pi_lic", display: "PI License", entry: false, count: null, cost: 0, image: "piLic.png", n: false, desc: "License to work as a detective" },
    { type: "o", name: "gym", display: "Gym Pass", entry: false, count: null, cost: 0, image: "gymPass.png", n: false, desc: "Get entry to the gym" },
    { type: "m", name: "makeup", display: "Makeup", entry: false, count: null, cost: 180, image: "makeup.png", n: false, desc: "Make your face pretty" },
    { type: "m", name: "redl", display: "Red Lipstick", entry: false, count: null, cost: 30, image: "redl.png", n: false, desc: "Red Lipstick" },
    { type: "m", name: "pinkl", display: "Pink Lipstick", entry: false, count: null, cost: 30, image: "pinkl.png", n: false, desc: "Pink Lipstick" },
    { type: "m", name: "purplel", display: "Purple Lipstick", entry: false, count: null, cost: 30, image: "purplel.png", n: false, desc: "Purple Lipstick" },
    { type: "o", name: "landlordKey", display: "Landlord's Key", entry: false, count: null, cost: 0, image: "llKey.png", n: false, desc: "Landlord's Key" },
    { type: "o", name: "flatmateKey", display: "Flatmate's Key", entry: false, count: null, cost: 0, image: "elKey.png", n: false, desc: "Co-Tenant's Key" },
    { type: "o", name: "reddoor", display: "Red Door Key", entry: false, count: null, cost: 0, image: "redroom.png", n: false, desc: "Red Door Key" },
    { type: "o", name: "evaphoto", display: "Eva's Boobie Pictures", entry: false, count: 0, cost: 0, image: "eva_pic.png", n: false, desc: "Eva's Boobie Pictures" },
    { type: "b", name: "backpack", display: "Backpack", entry: false, count: null, cost: 0, image: "backpack.png", n: false, desc: "Default Backpack" },
    { type: "b", name: "briefcase", display: "Briefcase", entry: false, count: null, cost: 60, image: "breifcase.png", n: false, desc: "Boring ol' briefase" },
    { type: "b", name: "slutPurse", display: "Slutty Pink Purse", entry: false, count: null, cost: 100, image: "purse_slut.png", n: false, desc: "Only a true slut can use this" },
    { type: "b", name: "pinkPurse", display: "Pink Purse", entry: false, count: null, cost: 100, image: "purse_pink.png", n: false, desc: "A cute purse" },
    { type: "p", name: "phoneBasic", display: "Basic Phone", entry: true, count: null, cost: -1, image: "phone_basic.png", n: false, desc: "Default phone case" },
    { type: "p", name: "phoneTr", display: "Strong Woman", entry: false, count: null, cost: 100, image: "phone_tr.png", n: false, desc: "" },
    { type: "p", name: "phonePink", display: "Pink", entry: false, count: null, cost: 100, image: "phone_pink.png", n: false, desc: "" },
    { type: "p", name: "phoneLips", display: "Purple Lips", entry: false, count: null, cost: 100, image: "phone_lips.png", n: false, desc: "" },
    { type: "g", name: "screwdriver", display: "Screwdriver", entry: false, count: null, cost: 50, image: "screwdriver.png", n: false, desc: "Go screw yourself" },
    { type: "d", name: "purpleDildo", display: "Purple Dildo", entry: false, count: null, cost: 100, image: "dildoPurple.png", n: false, desc: "Small Dildo" },
    { type: "d", name: "pinkDildo", display: "Pink Dildo", entry: false, count: null, cost: -1, image: "dildoPink.png", n: false, desc: "Small Dildo" },
    //{ type: "d", name: "blackDildo", display: "Black Dildo", entry: false, count: null, cost: 180, image: "butt_blackCock.png", n: false },
    //{ type: "d", name: "whiteDildo", display: "White Dildo", entry: false, count: null, cost: 180, image: "butt_whiteCock.png", n: false },
    //{ type: "d", name: "greenMonster", display: "Green Monster", entry: false, count: null, cost: 180, image: "butt_greenMonster.png", n: false },
    { type: "t", name: "tinypp", display: "Tiny PP", entry: false, count: null, cost: -1, image: "tinypp.png", n: false, desc: "Shrink your pp" },
    { type: "z", name: "tifgift", display: "Gift From Tiffany", entry: false, count: null, cost: -1, image: "tifGift.png", n: false, desc: "Go home and chek it out" },
    { type: "r", name: "paint1", display: "Painting 1", entry: false, count: null, cost: 80, image: "paint1.png", n: false, desc: "" },
    { type: "r", name: "paint2", display: "Painting 2", entry: false, count: null, cost: 50, image: "paint2.png", n: false, desc: "" },
    { type: "r", name: "paint3", display: "Painting 3", entry: false, count: null, cost: 90, image: "paint3.png", n: false, desc: "" },
    { type: "g", name: "sewer", display: "Sewer Lid Opener", entry: false, count: null, cost: -1, image: "sewer.png", n: false, desc: "Use this ot open the sewer lid next to the dance club." },
    { type: "c", name: "closet", display: "Change Clothes", entry: true, count: null, cost: 90, image: "change.png", n: false, desc: "Change your clothes. Can only use in a bathroom." }
];

inv.getall = function () {
    for (var i = 0; i < inv.master.length; i++) {
        inv.master[i].entry = true;
        if (inv.master.count !== null)
            inv.master[i].count = 10;
    }
};

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


inv.gett = function (t) {
    var i;
    for (i = 0; i < inv.t.length; i++) {
        if (inv.t[i].t === t)
            return inv.t[i].n;
    }
    return "NOT FOUND";
};

inv.get = function (name) {
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name)
            return inv.master[i];
    }
    return null;
};

inv.getIndex = function (name) {
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name)
            return i;
    }
    return null;
};

inv.gettype = function (type) {
    var typeList = new Array();
    for (var i = 0; i < inv.master.length; i++) {
        if (inv.master[i].type === type && inv.master[i].entry)
            typeList.push({ name: inv.master[i].name, entry: inv.master[i].entry, count: inv.master[i].count });
    }
    return typeList;
}

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
            $('#menu-bg_' + counter).html('<img src="./images/inv/' + inv.master[i].image + '" class="menu-select" data-inv="' + inv.master[i].name + '" title="' + inv.master[i].display + '">');
            if (inv.master[i].n)
                $('#menu-bg_' + counter).append('<img src="./images/inv/new.png" title="New Inventory" class="display-top3" title="' + inv.master[i].display + '">');
            if (inv.master[i].count !== null)
                $('#menu-bg_' + counter).append('<div class="menu-popup-count" data-name="' + inv.master[i].name + '">' + inv.master[i].count + '</div>');
            counter++;
        }
        inv.master[i].n = false;
    }

    counter++;

    inv.isFooter = $('#room_footer').is(":visible");
    if (inv.isFooter) { $('#room_footer').hide(); }
    $('.kill-invNew').remove();

    $('.menu-select').click(function () {
        var thisName = $(this).attr("data-inv");
        var thisItem = inv.get(thisName);

        $('#menu_displayIcon').html('<img src="./images/inv/' + thisItem.image + '"/>');
        $("#menu_displayCost").html(thisItem.count === null ? "" : "Count: " + thisItem.count);
        $("#menu_displayName").html(thisItem.display);
        $('#menu_displayType').html(inv.gett(thisItem.type));
        $("#menu_displayDesc").html(thisItem.desc);

        $("#menu_displayInfo").html("");
       

        $("#menu_displayCount").html("1");
        $("#menu_displayUp").attr("data-price", thisItem.cost);
        $("#menu_displayDown").attr("data-price", thisItem.cost);

        switch (thisItem.type) {
            case "b"://backpack
                $("#menu_displayAction").attr("data-itype", "bag");
                $("#menu_displayAction").attr("data-type", thisItem.type);
                $("#menu_displayAction").attr("data-name", thisItem.name);
                $("#menu_displayAction").html("Change Bag");
                $("#menu_displayAction").show();
                break;
            case "c": //closet
                $("#menu_displayAction").attr("data-itype", "bag");
                $("#menu_displayAction").attr("data-type", thisItem.type);
                $("#menu_displayAction").attr("data-name", thisItem.name);
                $("#menu_displayAction").html("Change Clothes");
                $("#menu_displayAction").show();
                break;
            case "e"://energy snack
                $("#menu_displayAction").attr("data-itype", "bag");
                $("#menu_displayAction").attr("data-type", thisItem.type);
                $("#menu_displayAction").attr("data-name", thisItem.name);
                $("#menu_displayAction").html("Snack Attack");
                $("#menu_displayDesc").append(" - Max Energy: " + g.get("maxenergy"));
                $("#menu_displayAction").show();
                break;
            case "p"://phone case
                $("#menu_displayAction").attr("data-itype", "bag");
                $("#menu_displayAction").attr("data-type", thisItem.type);
                $("#menu_displayAction").attr("data-name", thisItem.name);
                $("#menu_displayAction").html("Change Phone Case");
                $("#menu_displayAction").show();
                break;
            case "r"://room decoration
                $("#menu_displayAction").attr("data-itype", "bag");
                $("#menu_displayAction").attr("data-type", thisItem.type);
                $("#menu_displayAction").attr("data-name", thisItem.name);
                $("#menu_displayAction").html("Change Room Decoration");
                $("#menu_displayAction").show();
                break;
            default:
                $("#menu_displayAction").hide();
                break;
        };
    });
    $("#menu_displayAction").click(function () {

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
        for (var j = 0; j < 6; j++) {
            $('#room-menuButtons').append('<div id="menu-bg_' + counter + '" class="menu-popup" style="width: ' + w + 'px; height: ' + w + 'px; top: ' + ((s * i) + t) + 'px; left: ' + ((s * j) + l) + 'px; "> </div>');
            counter++;
        }
    }
    //500x840
    $('#room-menuButtons').append('<div id="menu_display" class="menu-display" style="width: ' + 500 * g.ratio + 'px; height: ' + 840 * g.ratio + 'px; top: ' + t + 'px; left: ' + ((6 * s) + l) + 'px; "> </div>');
    $('#menu_display').html('<div id="menu_displayIcon" style="width: ' + 300 * g.ratio + 'px; height: ' + 300 * g.ratio + 'px; margin-top:' + 100 * g.ratio + 'px; margin-left:' + 100 * g.ratio + 'px; "></div>' +
        '<div id="menu_displayCost" class="menu-line" style="' + g.cssText(12) + ' margin-top:' + 30 * g.ratio + 'px;">Cost</div>' +
        '<div id="menu_displayName" class="menu-line" style="' + g.cssText(12) + ' margin-top:' + 10 * g.ratio + 'px;">Name</div>' +
        '<div id="menu_displayType" class="menu-line" style="' + g.cssText(12) + ' margin-top:' + 10 * g.ratio + 'px;">Type</div>' +
        '<div id="menu_displayDesc" class="menu-line-desc" style="' + g.cssText(9) + ' margin-top:' + 10 * g.ratio + 'px;">Description</div>' +
        '<div id="menu_displayAdditional" class="menu-line-desc" style="' + g.cssText(9) + ' margin-top:' + 10 * g.ratio + 'px;"></div>' +
        '<div id="menu_displayCountLine" class="menu-line" style="' + g.cssText(12) + ' margin-top:' + 10 * g.ratio + 'px;">' +
        '<button id="menu_displayUp" class="menu-lineB" data-price="0">▲</button>' +
        '<span id="menu_displayCount">0</span>' +
        '<button id="menu_displayDown" class="menu-lineB" data-price="0">▼</button>' +
        '<div class="menu-line" style="' + g.cssText(8) + ' margin-top:' + 10 * g.ratio + 'px;">How Many</div>' +
        '</div>' +
        '<div id="menu_displayInfo" class="menu-line-desc" style="' + g.cssText(9) + ' margin-top:' + 10 * g.ratio + 'px;"></div>' +
        '<button id="menu_displayAction" class="menu-action" data-itype="" data-type="" data-name="" style="' + g.cssText(12) + ' margin-top:' + 10 * g.ratio + 'px; padding:' + 5 * g.ratio + 'px;">Action</button>');

    $("#menu_displayCountLine").hide();
    $('#menu_displayAction').hide();

    $("#menu_displayUp").click(function () {
        var thisCost = parseInt($('#menu_displayUp').attr("data-price"));
        var thisCount = parseInt($('#menu_displayCount').html()) + 1;
        var thisCash = g.get("money");
        if (thisCount * thisCost < thisCash) {
            $("#menu_displayCount").html(thisCount);
            $("#menu_displayAction").html("BUY - $" + thisCount * thisCost);
        }
    });
    $("#menu_displayDown").click(function () {
        var thisCost = parseInt($(this).attr("data-price"));
        var thisCount = parseInt($('#menu_displayCount').html()) - 1;
        if (thisCount > 0) {
            $("#menu_displayCount").html(thisCount);
            $("#menu_displayAction").html("BUY - $" + thisCount * thisCost);
        }
    });

    $("#menu_displayAction").click(function () {
        var thisIType = $(this).attr("data-itype");
        var thisType = $(this).attr("data-type");
        var thisName = $(this).attr("data-name");

        if (thisIType === "inv") {
            
            var ti = inv.getIndex(thisName);
            if (ti !== null) {
                var thisInv = inv.master[ti];
                if (thisInv.count === null) {
                    inv.add(thisName);
                    g.mod("money", (-1 * thisInv.cost));
                    $("#menu_displayAction").hide();
                    $('#menu_displayInfo').html("PURCHASED");
                }
                else {
                    var thisCount = parseInt($("#menu_displayCount").html());
                    if (isNaN(thisCount))
                        thisCount = 1;
                    var totalMoney = -1 * thisCount * thisInv.cost;
                    inv.master[ti].count += thisCount;
                    inv.master[ti].entry = true;
                    g.mod("money", totalMoney);
                    $("#menu_displayAction").hide();
                    $("#menu_displayCountLine").hide();
                    $('#menu_displayInfo').html("PURCHASED");
                    $("#menu_displayAdditional").html("In Inventory: " + inv.master[ti].count); 
                }
            }
            else
                console.log("Can't find " + ti);
        }
        else if (thisIType === "clothing") {
            var tic = cl.where(thisType, thisName);
            
            if (tic !== null) {
                if (cl.list[tic].inv) {
                    $('#menu_displayInfo').html("Already Purchased");
                    $("#menu_displayAction").hide();
                    $("#menu_displayCountLine").hide();
                }
                else {
                    var thisMoney = g.get("money");
                    if (cl.list[i].price > thisMoney) {
                        $('#menu_displayInfo').html("Can't Afford");
                        $("#menu_displayAction").hide();
                        $("#menu_displayCountLine").hide();
                    }
                    else {
                        cl.list[tic].inv = true;
                        g.mod("money", -1 * cl.list[i].price);
                        $("#menu_displayAction").hide();
                        $("#menu_displayCountLine").hide();
                        $('#menu_displayInfo').html("PURCHASED");
                    }
                }
            }
        }
        else if (thisIType === "bag") {
            switch (thisType) {
                case "b"://backpack
                    inv.backpack = thisName;
                    inv.backpackIcon();
                    $("#menu_displayInfo").html("UPDATED");
                    $("#menu_displayAction").hide();
                    inv.close();
                    break;
                case "c": //closet
                    if (inv.roomChange.includes(g.roomID)) {
                        g.pass = g.roomID;
                        inv.close();
                        char.room(8);
                    }
                    else{
                        $("#menu_displayInfo").html("You can only change in your room or a bathroom. ");
                        $("#menu_displayAction").hide();
                    }
                    break;
                case "e"://energy snack
                    var eindex = inv.getIndex(thisName);
                    if (inv.master[eindex].count > 0) {
                        inv.master[eindex].count--;
                        switch (thisName) {
                            case "acia":
                                g.mod("energy", 15);
                                break;
                            case "soda":
                                g.mod("energy", 50);
                                g.mod("fitness", -15);
                                break;
                            default:
                                console.log("UNK energy: " + thisName);
                        }

                        $("#menu_displayInfo").html("Energy: " + g.get("energy"));
                        if (inv.master[eindex].count === 0)
                            $("#menu_displayAction").hide();
                        $("#menu_displayCost").html("Count: " + inv.master[eindex].count);

                        if (inv.master[eindex].count < 1) {
                            inv.master[eindex].count = 0;
                            inv.master[eindex].entry = false;
                        }
                    }
                    break;
                case "p"://phone case
                    inv.phone = thisName;
                    inv.phoneIcon();
                    inv.close();
                    break;
                case "r"://room decoration
                    g.set("painting", thisName);
                    if (g.roomID === 52) {
                        if ($('.room-img[data-name="painting"').length > 0)
                            nav.modbutton("painting", "52_myroom/" + thisName + ".png", null, null);
                        else
                            nav.button({
                                "type": "img",
                                "name": "painting",
                                "left": 280,
                                "top": 220,
                                "width": 457,
                                "height": 253,
                                "image": "52_myroom/" + thisName + ".png",
                            }, 52);
                    }
                    $("#menu_displayInfo").html("UPDATED");
                    $("#menu_displayAction").hide();
                    inv.close();
                    break;
            }
        }
        else if (thisIType === "tEnemy") {
            tEnemy.invClickCatch(thisName);
        }
        else {
            console.log("wrong button i type" + thisIType);
            console.log(thisType, thisName, thisIType)
        }
    });
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
    for (i = 0; i < inv.master.length; i++) {
        if (inv.master[i].count !== null)
            inv.master[i].count = 0;
        inv.master[i].entry = false;
    }
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
    inv.add("closet");
    inv.backpack = ia.backpack;
    if (typeof ia.phone != "undefined")
        inv.phone = ia.phone;
    else
        inv.phone = "phoneBasic";
    inv.backpackIcon();
    inv.phoneIcon();
};