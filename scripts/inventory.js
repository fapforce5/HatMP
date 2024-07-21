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
inv.page = 0;

inv.t = [
    { t: "b", n: "Backpack" },
    { t: "c", n: "Restraints" },
    { t: "d", n: "Dildo" },
    { t: "e", n: "Energy Snack" },
    { t: "g", n: "General Item" },
    { t: "h", n: "Female Hormone" },
    { t: "i", n: "Dale's Fighting" },
    { t: "l", n: "Lock Pick" },
    { t: "m", n: "Makeup" },
    { t: "o", n: "Key" },
    { t: "p", n: "Phone Case" },
    { t: "q", n: "Milk Pump" },
    { t: "r", n: "Room Decoration" },
    { t: "t", n: "Penis Cream" },
    { t: "x", n: "ID Card" },
    { t: "y", n: "Hypno" },
    { t: "z", n: "Gift" }
    
];

inv.master = [
    { type: "g", name: "envelope", display: "Forest Queen's List", entry: false, count: null, cost: -1, image: "envelope.png", n: false, desc: "Take this to Princess at the Detective Agency" },
    { type: "g", name: "usb", display: "USB Cult List", entry: false, count: null, cost: -1, image: "usb.png", n: false, desc: "Use this in your home computer" },
    { type: "g", name: "missyusb", display: "USB for Missy`", entry: false, count: null, cost: -1, image: "usb.png", n: false, desc: "Give this to Missy, or take a peek in your home PC" },
    { type: "g", name: "locket", display: "Locket for Missy's Case", entry: false, count: null, cost: -1, image: "locket.png", n: false, desc: "Give this to Missy. " },
    { type: "h", name: "hormone", display: "Sissy Bimbo Pills", entry: false, count: 0, cost: 5, image: "hormone.png", n: false, desc: "Take 1 pill a day to increase your female hormone level" },
    { type: "g", name: "lube", display: "Stuff My Butt Lube", entry: false, count: 0, cost: 2, image: "lube.png", n: false, desc: "Lube for stuffing your Sissy Pussy" },
    { type: "g", name: "razor", display: "Razor", entry: false, count: 0, cost: 10, image: "razor.png", n: false, desc: "Shave your body" },
    { type: "g", name: "wine", display: "Rotting Grape Wine", entry: false, count: 0, cost: 50, image: "wine.png", n: false, desc: "Time to get drunk!" },
    { type: "g", name: "redbox", display: "Red Box", entry: false, count: null, cost: 0, image: "redbox.png", n: false, desc: "Red box you need to deliver to Missy" },

    { type: "e", name: "acia", display: "Acia Berries", entry: false, count: 0, cost: 25, image: "acia.png", n: false, desc: "Gain 15 energy" },
    { type: "e", name: "soda", display: "Super Awesome Soda", entry: false, count: 0, cost: 30, image: "energyCola.png", n: false, desc: "Gain 50 energy" },
    { type: "e", name: "emptyjar", display: "An empty jar", entry: false, count: 0, cost: -1, image: "emptyjar.png", n: false, desc: "Just an empty jar" },
    { type: "e", name: "pissjar", display: "A Jar full of piss", entry: false, count: 0, cost: -1, image: "cumjar.png", n: false, desc: "Gain 50 energy" },
    { type: "e", name: "cumjar", display: "A Jar full of cum", entry: false, count: 0, cost: -1, image: "cumjar.png", n: false, desc: "Gain 100 energy" },
    { type: "e", name: "dogcumjar", display: "A Jar full of dog cum", entry: false, count: 0, cost: -1, image: "cumjar.png", n: false, desc: "Gain 150 energy" },
    { type: "e", name: "horsecumjar", display: "A Jar full of horse cum", entry: false, count: 0, cost: -1, image: "cumjar.png", n: false, desc: "Gain 200 energy" },
    { type: "e", name: "pigcumjar", display: "A Jar full of pig cum", entry: false, count: 0, cost: -1, image: "cumjar.png", n: false, desc: "Gain 300 energy" },

    { type: "x", name: "pi_lic", display: "PI License", entry: false, count: null, cost: 0, image: "piLic.png", n: false, desc: "License to work as a detective" },
    { type: "x", name: "studentid", display: "Student ID", entry: false, count: null, cost: 0, image: "sudentid.png", n: false, desc: "Stolen Student ID" },
    { type: "o", name: "gym", display: "Gym Pass", entry: false, count: null, cost: 0, image: "gymPass.png", n: false, desc: "Get entry to the gym" },
    { type: "l", name: "lockpick", display: "Lock Pick Set", entry: false, count: null, cost: 0, image: "lockpick.png", n: false, desc: "Lock Pick Set for use on cases" },
    { type: "m", name: "makeup", display: "Makeup", entry: false, count: 0, cost: 1, image: "makeup.png", n: false, desc: "Make your face pretty" },
    { type: "m", name: "redl", display: "Red Lipstick", entry: false, count: 0, cost: 1, image: "redl.png", n: false, desc: "Red Lipstick" },
    { type: "m", name: "pinkl", display: "Pink Lipstick", entry: false, count: 0, cost: 1, image: "pinkl.png", n: false, desc: "Pink Lipstick" },
    { type: "m", name: "purplel", display: "Purple Lipstick", entry: false, count: 0, cost: 1, image: "purplel.png", n: false, desc: "Purple Lipstick" },
    { type: "o", name: "landlordKey", display: "Landlord's Key", entry: false, count: null, cost: 0, image: "llKey.png", n: false, desc: "Landlord's Key" },
    { type: "o", name: "flatmateKey", display: "Flatmate's Key", entry: false, count: null, cost: 0, image: "elKey.png", n: false, desc: "Co-Tenant's Key" },
    { type: "o", name: "keyJanice", display: "Girl Friend's Key", entry: false, count: null, cost: 0, image: "keyJanice.png", n: false, desc: "Key to Girl Friend's house. " },
    { type: "o", name: "kkey", display: "Jeffery's Desk Key", entry: false, count: null, cost: 0, image: "kkey.png", n: false, desc: "Desk key for Jeffery's side drawer" },
    { type: "o", name: "reddoor", display: "Red Door Key", entry: false, count: null, cost: 0, image: "redroom.png", n: false, desc: "Red Door Key" },
    { type: "o", name: "key202", display: "Apartment 202 Key", entry: false, count: null, cost: 0, image: "key202.png", n: false, desc: "Key for Holly, Dolly, and Molly's Apartment" },
    { type: "o", name: "lolalocker", display: "Lola's Locker combo", entry: false, count: null, cost: 0, image: "lolalocker.png", n: false, desc: "Lola's Swim Locker Combo" },
    { type: "o", name: "evaphoto", display: "Eva's Boobie Pictures", entry: false, count: 0, cost: 0, image: "eva_pic.png", n: false, desc: "Eva's Boobie Pictures" },

    { type: "i", name: "pocketsand", display: "Pocket Sand", entry: false, count: 0, cost: 50, image: "pocketsand.png", n: false, desc: "Decrease Enemy's fight total by 30 points." },
    { type: "i", name: "smellingsalts", display: "Smelling Salts", entry: false, count: 0, cost: 200, image: "smellingsalts.png", n: false, desc: "Reroll your fight. " },

    { type: "b", name: "backpack", display: "Backpack", entry: false, count: null, cost: 0, image: "backpack.png", n: false, desc: "Default Backpack" },
    { type: "b", name: "briefcase", display: "Briefcase", entry: false, count: null, cost: 60, image: "breifcase.png", n: false, desc: "Boring ol' briefase" },
    { type: "b", name: "slutPurse", display: "Slutty Pink Purse", entry: false, count: null, cost: 100, image: "purse_slut.png", n: false, desc: "Only a true slut can use this" },
    { type: "b", name: "pinkPurse", display: "Pink Purse", entry: false, count: null, cost: 100, image: "purse_pink.png", n: false, desc: "A cute purse" },
    { type: "b", name: "purseblack", display: "Black Purse", entry: false, count: null, cost: 80, image: "purse_black.png", n: false, desc: "Black Purse" },
    { type: "b", name: "pinkcase", display: "Pink Briefcase", entry: false, count: null, cost: 80, image: "purse_briefcase.png", n: false, desc: "A cute Breifcase" },
    { type: "b", name: "pursebag", display: "Bag", entry: false, count: null, cost: 30, image: "purse_bag.png", n: false, desc: "Bag" },
    { type: "b", name: "purseyellow", display: "Yellow Purse", entry: false, count: null, cost: 30, image: "purse_yellow.png", n: false, desc: "A Yellow Purse" },
    
    { type: "p", name: "phoneBasic", display: "Basic Phone", entry: true, count: null, cost: -1, image: "phone_basic.png", n: false, desc: "Default phone case" },
    { type: "p", name: "phoneTr", display: "Strong Woman", entry: false, count: null, cost: 35, image: "phone_tr.png", n: false, desc: "" },
    { type: "p", name: "phonePink", display: "Pink", entry: false, count: null, cost: 35, image: "phone_pink.png", n: false, desc: "" },
    { type: "p", name: "phoneLips", display: "Purple Lips", entry: false, count: null, cost: 35, image: "phone_lips.png", n: false, desc: "" },
    { type: "p", name: "phoneShopping", display: "Shopping!", entry: false, count: null, cost: 50, image: "phone_shopping.png", n: false, desc: "" },
    { type: "p", name: "phoneBlack", display: "Dancing", entry: false, count: null, cost: 50, image: "phone_black.png", n: false, desc: "" },
    { type: "p", name: "phoneMan", display: "Sexy Man", entry: false, count: null, cost: 50, image: "phone_man.png", n: false, desc: "" },
    { type: "p", name: "phoneFist", display: "Fisted Fem Dom", entry: false, count: null, cost: 85, image: "phone_fist.png", n: false, desc: "" },

    { type: "z", name: "vib", display: "Li'l Remote Vibrator", entry: false, count: null, cost: -1, image: "vib.png", n: false, desc: "Remote vibrator to stimulate the clit and G-spot." },
    { type: "g", name: "screwdriver", display: "Screwdriver", entry: false, count: null, cost: 50, image: "screwdriver.png", n: false, desc: "Go screw yourself" },
    { type: "d", name: "purpleDildo", display: "Purple Dildo", entry: false, count: null, cost: 40, image: "dildoPurple.png", n: false, desc: "Small Dildo" },
    { type: "d", name: "pinkDildo", display: "Pink Dildo", entry: false, count: null, cost: -1, image: "dildoPink.png", n: false, desc: "Small Dildo" },
    { type: "d", name: "whiteDildo", display: "White Dildo", entry: false, count: null, cost: 60, image: "butt_whiteCock.png", n: false, desc: "Averge Dildo" },
    { type: "d", name: "blackDildo", display: "Black Dildo", entry: false, count: null, cost: -1, image: "butt_blackCock.png", n: false, desc: "Slightly Larger than average dildo" },
    { type: "d", name: "pinkFatDildo", display: "Fat Pink Dildo", entry: false, count: null, cost: 120, image: "butt_fat.png", n: false, desc: "Fat Man" },
    { type: "d", name: "blackBallsDildo", display: "Anal Beads", entry: false, count: null, cost: 40, image: "butt_balls.png", n: false, desc: "Balls you put in your ass" },
    { type: "d", name: "towerDildo", display: "Tower of Power", entry: false, count: null, cost: 90, image: "butt_tower.png", n: false, desc: "Stretch that sissy hole" },
    { type: "d", name: "horseDildo", display: "Horse Dildo", entry: false, count: null, cost: 180, image: "butt_horse.png", n: false, desc: "You'll blow your ass out" },

    { type: "q", name: "pump", display: "Breast Pump", entry: false, count: null, cost: 120, image: "pump.png", n: false, desc: "BP-900 for sucking that milk from your titties!" },

    { type: "c", name: "handcuff", display: "Handcuffs", entry: false, count: null, cost: 36, image: "handcuffs.png", n: false, desc: "Handcuffs, you know, for your hands" },

    { type: "t", name: "tinypp", display: "Tiny PP", entry: false, count: null, cost: -1, image: "tinypp.png", n: false, desc: "Shrink your pp" },
    { type: "z", name: "tifgift", display: "Gift From Tiffany", entry: false, count: null, cost: -1, image: "tifGift.png", n: false, desc: "Go home and chek it out" },
    { type: "r", name: "paint1", display: "Painting 1", entry: false, count: null, cost: 80, image: "paint1.png", n: false, desc: "" },
    { type: "r", name: "paint2", display: "Painting 2", entry: false, count: null, cost: 50, image: "paint2.png", n: false, desc: "" },
    { type: "r", name: "paint3", display: "Painting 3", entry: false, count: null, cost: 90, image: "paint3.png", n: false, desc: "" },
    { type: "g", name: "sewer", display: "Sewer Lid Opener", entry: false, count: null, cost: -1, image: "sewer.png", n: false, desc: "Use this to open the sewer lid next to the dance club." },
    { type: "g", name: "chisel", display: "Chisel", entry: false, count: null, cost: -1, image: "chisel.png", n: false, desc: "Used to break out of prison. " },
    { type: "g", name: "pizza", display: "Frozen Pizza", entry: false, count: 0, cost: 24, image: "pizza.png", n: false, desc: "Frozen pizza for date night. " },
    { type: "g", name: "peanutbutter", display: "Peanut Butter", entry: false, count: 0, cost: 12, image: "peanutbutter.png", n: false, desc: "Jar of Peanut Butter. " },

    { type: "y", name: "hypno1", display: "Hypno Lesson #1", entry: false, count: null, cost: 20, image: "hypno1.png", n: false, desc: "Horny Girls Masturbate" },
    { type: "y", name: "hypno2", display: "Hypno Lesson #2", entry: false, count: null, cost: 40, image: "hypno2.png", n: false, desc: "Pretty girl's wear makeup" },
    { type: "y", name: "hypno3", display: "Hypno Lesson #3", entry: false, count: null, cost: 40, image: "hypno3.png", n: false, desc: "Girls wear dresses" },
    { type: "y", name: "hypno4", display: "Hypno Lesson #4", entry: false, count: null, cost: 50, image: "hypno4.png", n: false, desc: "Blondes have more fun!" },
    { type: "y", name: "hypno5", display: "Hypno Lesson #5", entry: false, count: null, cost: 50, image: "hypno5.png", n: false, desc: "Don't think too much" },
    { type: "y", name: "hypno6", display: "Hypno Lesson #6", entry: false, count: null, cost: 60, image: "hypno6.png", n: false, desc: "Bimbo is better" },
    { type: "y", name: "hypno7", display: "Hypno Lesson #7", entry: false, count: null, cost: 100, image: "hypno7.png", n: false, desc: "You are an object. Let men use you. All your holes and fuck holes" }

];

inv.getall = function () {
    for (var i = 0; i < inv.master.length; i++) {
        inv.master[i].entry = true;
        if (inv.master.count !== null)
            inv.master[i].count = 10;
    }
};

pic.master = [
    { name: "lolaMast", display: "Lola Masturbating", entry: false, image: "lolaMast.jpg", thumb: "lolaMast.png" },
    { name: "lolaTopless", display: "Lola Topless", entry: false, image: "lolaTopless.jpg", thumb: "lolaTopless.png" },
    { name: "landlordSleep", display: "Landlord Sleep", entry: false, image: "landloardSleep.jpg", thumb: "landloardSleep.png" },
    { name: "case_lostgirl", display: "Sanaria", entry: false, image: "case_lostgirl.jpg", thumb: "case_lostgirl.png" },
    { name: "pantyThief", display: "Panty Thief", entry: false, image: "pantyThief.jpg", thumb: "pantyThief.png" },
    { name: "jada_b", display: "Group Photo", entry: false, image: "jada_b.jpg", thumb: "jada_b.png" },
    { name: "jada_f", display: "Group Photo", entry: false, image: "jada_f.jpg", thumb: "jada_f.png" },
    { name: "jada_p", display: "Group Photo", entry: false, image: "jada_p.jpg", thumb: "jada_p.png" },
    { name: "evapussy", display: "Eva Wet and Waiting", entry: false, image: "evapussy.jpg", thumb: "evapussy.png" },
    { name: "chloe", display: "Chloe's cum face", entry: false, image: "chloe.jpg", thumb: "chloe.png" },
    { name: "candy", display: "Candy's cum hole", entry: false, image: "candy.jpg", thumb: "candy.png" },
    { name: "classbefore", display: "First Sissy Class", entry: false, image: "classbefore.jpg", thumb: "classbefore.png" },
];

pic.getall = function () {
    for (var i = 0; i < pic.master.length; i++)
        pic.master[i].entry = true;
}

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
    $('#room-inv').click(function () {
        phone.clear(true);
        inv.page = 0;
        inv.display();
    });
});

inv.hide = function () {
    $("#room-inv").hide();
};

inv.show = function () {
    $("#room-inv").show();
};

inv.getPhoneAsBackground = function () {
    return "1001_rand/" + inv.phone + ".jpg";
};

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
            g.popUpNotice(inv.master[i].display + " added to inventory. ");
            i = 9999999;
        }
    }
};

inv.addMulti = function (name, count) {
    var i;
    for (i = 0; i < inv.master.length; i++) {
        if (inv.master[i].name === name) {
            inv.master[i].entry = true;
            if (inv.master[i].count !== null) {
                inv.master[i].count = inv.master[i].count + count;
                g.popUpNotice("You receved " + count + " " + inv.master[i].display);
            }
            else
                g.popUpNotice(inv.master[i].display + " added to inventory. ");
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
            if (inv.master[i].coun !== null) {
                inv.master[i].count--;
                if (inv.master[i].count < 1) {
                    inv.master[i].count = 0;
                    inv.master[i].entry = false;
                }
            }
            else {
                inv.master[i].entry = false;
            }
            break;
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
    var totalCounter = 0;
    var i, prevI;
    for (i = 0; i < inv.master.length; i++) {
        if (inv.master[i].entry) {
            if (totalCounter >= inv.page && counter < 31) {
                $('#menu-bg_' + counter).html('<img src="./images/inv/' + inv.master[i].image + '" class="menu-select" data-inv="' + inv.master[i].name + '" title="' + inv.master[i].display + '">');
                if (inv.master[i].n)
                    $('#menu-bg_' + counter).append('<img src="./images/inv/new.png" title="New Inventory" class="display-top3 click-thru" title="' + inv.master[i].display + '">');
                if (inv.master[i].count !== null)
                    $('#menu-bg_' + counter).append('<div class="menu-popup-count" data-name="' + inv.master[i].name + '">' + inv.master[i].count + '</div>');
                counter++;
            }
            totalCounter++;
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
            case "e"://energy snack
                $("#menu_displayAction").attr("data-itype", "bag");
                $("#menu_displayAction").attr("data-type", thisItem.type);
                $("#menu_displayAction").attr("data-name", thisItem.name);
                $("#menu_displayAction").html("Snack Attack");
                $("#menu_displayDesc").append(" - Max Energy: " + gv.get("maxenergy"));
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
            case "h":
                var xh = gv.get("autohormone");

                if (xh) {
                    $("#menu_displayAction").attr("data-itype", "bag");
                    $("#menu_displayAction").attr("data-type", thisItem.type);
                    $("#menu_displayAction").attr("data-name", thisItem.name);
                    $("#menu_displayAction").html("Stop Auto Taking Pill");
                    $("#menu_displayAction").show();
                }
                else if (!daily.get("tookHormonePill")) {
                    $("#menu_displayAction").attr("data-itype", "bag");
                    $("#menu_displayAction").attr("data-type", thisItem.type);
                    $("#menu_displayAction").attr("data-name", thisItem.name);
                    $("#menu_displayAction").html("Take Your Pill");
                    $("#menu_displayAction").show();
                }
                else {
                    $("#menu_displayAction").attr("data-itype", "bag");
                    $("#menu_displayAction").attr("data-type", thisItem.type);
                    $("#menu_displayAction").attr("data-name", thisItem.name);
                    $("#menu_displayAction").html("Auto Take Pill<br/>When Hormone < 90");
                    $("#menu_displayAction").show();
                }
                break;
            default:
                $("#menu_displayAction").hide();
                break;
        };
    });
    //$("#menu_displayAction").click(function () {

    //});

    w = 600 * g.ratio;
    h = 50 * g.ratio;
    t = 980 * g.ratio;
    l = 60 * g.ratio;
    if(inv.page > 0)
        $('#room-menuButtons').append('<button id="inv_prev" class="btn btn-default pos-abs" style="width: ' + w + 'px; top: ' + t + 'px; left: ' + l + 'px;" >&lt;&lt; PREV</button>');
    $('#room-menuButtons').append('<button id="inv_close" class="btn btn-danger pos-abs" style="width: ' + w + 'px; top: ' + t + 'px; left: ' + (l + w) + 'px;" >Close</button>');
    if(inv.page < inv.master.length)
        $('#room-menuButtons').append('<button id="inv_next" class="btn btn-danger pos-abs" style="width: ' + w + 'px; top: ' + t + 'px; left: ' + (l + (w * 2)) + 'px;" >NEXT &gt;&gt; </button>');
    $('#inv_close').click(function () {
        inv.close();
    });
    $('#inv_prev').click(function () {
        inv.paging(-30);
    });
    $('#inv_next').click(function () {
        inv.paging(30);
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
        var thisCash = gv.get("money");
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
                if (!inv.master[ti].entry) {
                    inv.master[ti].n = true;
                    inv.backpackIcon();
                }
                if (thisInv.count === null) {
                    inv.add(thisName);
                    gv.mod("money", (-1 * thisInv.cost));
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
                    gv.mod("money", totalMoney);
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
                    var thisMoney = gv.get("money");
                    if (cl.list[tic].price > thisMoney) {
                        $('#menu_displayInfo').html("Can't Afford");
                        $("#menu_displayAction").hide();
                        $("#menu_displayCountLine").hide();
                    }
                    else {
                        cl.list[tic].inv = true;
                        gv.mod("money", -1 * cl.list[tic].price);
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
                case "e"://energy snack
                    var eindex = inv.getIndex(thisName);
                    if (inv.master[eindex].count > 0) {
                        inv.master[eindex].count--;
                        switch (thisName) {
                            case "acia":
                                gv.mod("energy", 30);
                                break;
                            case "soda":
                                gv.mod("energy", 60);
                                levels.mod("fitness", -25);
                                break;
                            case "cumjar":
                                gv.mod("energy", 100);
                                break;
                            default:
                                console.log("UNK energy: " + thisName);
                        }

                        $("#menu_displayInfo").html("Energy: " + gv.get("energy"));
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
                    gv.set("painting", thisName);
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
                case "h":
                    var xh = gv.get("autohormone");

                    if ($("#menu_displayAction").html() === "Take Your Pill") {
                        daily.set("tookHormonePill");
                        var myPill = inv.getIndex("hormone");
                        gv.mod("hormone", 30);
                        inv.use("hormone");
                        $("#menu_displayCost").html(inv.master[myPill].count === 0 ? "All out, better get more." : "Count: " + inv.master[myPill].count);
                        //$("#menu_displayAction").hide();

                        if (xh) {
                            $("#menu_displayAction").html("Stop Auto Taking Pill");
                        }
                        else {
                            $("#menu_displayAction").html("Auto Take Pill<br/>When Hormone < 90");
                        }
                    }
                    else if ($("#menu_displayAction").text() === "Auto Take PillWhen Hormone < 90") {
                        gv.set("autohormone", true);
                        $("#menu_displayAction").html("Stop Auto Taking Pill");
                    }
                    else {
                        gv.set("autohormone", false);
                        $("#menu_displayAction").html("Auto Take Pill<br/>When Hormone < 90");
                    }

                    
                    //else {
                    //    $("#menu_displayAction").hide();
                    //    $("#menu_displayDesc").append("<br/>I'm such an air head! I already took my pill for today.");
                    //}
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

inv.paging = function (pageSize) {
    inv.page += pageSize;
    inv.close();
    inv.display();
}

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

inv.anal = function (name) {
    switch (name) {
        case "1finger":
        case "screwdriver":
            return 0;
        case "2finger":
        case "purpleDildo":
        case "foodCarrot":
            return 1;
        case "3finger":
        case "pinkDildo":
            return 2;
        case "4finger":
        case "whiteDildo":
        case "foodBanana":
            return 3;
        case "blackDildo":
        case "foodCucumber":
            return 4;
        case "towerDildo":
        case "blackBallsDildo":
        case "foodApple":
            return 5;
        case "pinkFatDildo":
        case "horseDildo":
            return 6;
        default:
            console.log("Dildo not found: " + name);
            return 1;
    }
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
    if (typeof ia.phone !== "undefined")
        inv.phone = ia.phone;
    else
        inv.phone = "phoneBasic";
    inv.backpackIcon();
    inv.phoneIcon();
};