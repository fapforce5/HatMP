//wardrobe
//Don't use g.internal
var room8 = {};

room8.main = function () {
    char.changeMenu("body", false, true);
    var clothingList;
    var w, h;
    $.each(cl.saveOutfit, function (i, v) {
        nav.button({
            "type": "btn",
            "name": "wear_" + i,
            "left": 350 + (i * 248),
            "top": 220,
            "width": 120,
            "height": 40,
            "title": v.title,
            "image": "8_wardrobe/save_wear.png"
        }, 8);
        nav.button({
            "type": "btn",
            "name": "save_" + i,
            "left": 470 + (i * 248),
            "top": 220,
            "width": 120,
            "height": 40,
            "title": v.title,
            "image": "8_wardrobe/save_save.png"
        }, 8);

        nav.inputbox({
            "type": "img",
            "name": "save_input_" + i,
            "left": 350 + (i * 248),
            "top": 150,
            "width": 224,
            "height": 40,
            "title": v.name,
        }, 8);
    });

    room8.drawClothingIcons(0);

    if (!gv.get("firstTimeInWardrobe")) {
        gv.set("firstTimeInWardrobe", true);
        chat(1, 8);
    }

    room8.btnclick("checkSleepEnable");

    if (g.pass === 52)
        nav.bg("8_wardrobe/52_wardrobe.jpg");
    else if (g.pass === 56)
        nav.bg("56_bathroom/blur.jpg");
    else if (g.pass === 502)
        nav.bg("8_wardrobe/502_wardrobe.jpg");
    else if (g.pass === 201 || g.pass === 199)
        nav.bg("8_wardrobe/201.jpg");
    else if (g.pass === 209)
        nav.bg("8_wardrobe/209.jpg");
    else if (g.pass === 451)
        nav.bg("8_wardrobe/451.jpg");
    else if (g.pass === 452)
        nav.bg("8_wardrobe/452.jpg");
    else if (g.pass === 552)
        nav.bg("8_wardrobe/552.jpg");
    else if (g.pass === 553)
        nav.bg("8_wardrobe/553.jpg");
    else if (g.pass === 875)
        nav.bg("8_wardrobe/903.jpg");
    else if (g.pass === 902)
        nav.bg("8_wardrobe/902.jpg");
    else if (g.pass === 903)
        nav.bg("8_wardrobe/903.jpg");
    else if (g.pass === 10 || g.pass === 775 || g.pass === 174 || g.pass === 40)
        nav.bg("8_wardrobe/8_wardrobe.jpg");
    else if (g.pass === 953)
        nav.bg("8_wardrobe/953.jpg");
    else if (g.pass === 316)
        nav.bg("8_wardrobe/316.jpg");
    else if (g.pass === 318)
        nav.bg("8_wardrobe/318.jpg");
    else if (g.pass === 12)
        nav.bg("12_bathroom/blur.jpg");
    else if (g.pass === 354)
        nav.bg("8_wardrobe/354.jpg");
    else if (g.pass === 503)
        nav.bg("8_wardrobe/503.jpg");
    else if (g.pass === 727)
        nav.bg("8_wardrobe/727.jpg");
    else if (g.pass === 0)
        nav.bg("8_wardrobe/8_wardrobe.jpg");
    else {
        g.pass = 451;
        nav.bg("8_wardrobe/451.jpg");
    }

    var navList = [g.pass];
    nav.buildnav(navList);
    $('.room-btn[data-name="main_panties"]').click();
};

room8.btnclick = function (name) {
    var type, j, clname;
    if (name.startsWith("main_")) {
        nav.killbuttonStartsWith("room8kill_");
        type = name.replace("main_", "");
        if (type === "nude") {
            cl.nude();
            room8.btnclick("checkSleepEnable");
        }
        else {
            j = 0;
            nav.button({
                "type": "btn",
                "name": "room8kill_" + type + "-nonexxx",
                "left": 350 + ((j % 10) * 155),
                "top": 500 + (Math.floor(j / 10) * 155),
                "width": 150,
                "height": 150,
                "title": "Remove",
                "image": "8_wardrobe/icons/none.png"
            }, 8);
            
            j = 1;
            $.each(cl.list, function (i, v) {
                if (v.type === type && v.inv) {
                    var wearing = false;
                    switch (type) {
                        case "shoes": wearing = cl.c.shoes === v.name; break;
                        case "socks": wearing = cl.c.socks === v.name; break;
                        case "pants": wearing = cl.c.pants === v.name; break;
                        case "panties": wearing = cl.c.panties === v.name; break;
                        case "bra": wearing = cl.c.bra === v.name; break;
                        case "shirt": wearing = cl.c.shirt === v.name; break;
                        case "dress": wearing = cl.c.dress === v.name; break;
                        case "swimsuit": wearing = cl.c.swimsuit === v.name; break;
                        case "pj": wearing = cl.c.pj === v.name; break;
                        case "buttplug": wearing = cl.c.buttplug === v.name; break;
                        default: "can't find " + clname; break;
                    };
                    if (wearing) {
                        nav.button({
                            "type": "img",
                            "name": "room8kill_" + v.type + "-" + v.name,
                            "left": 350 + ((j % 10) * 155),
                            "top": 500 + (Math.floor(j / 10) * 155),
                            "width": 150,
                            "height": 150,
                            "image": "8_wardrobe/icons/_select_" + v.sex + ".png"
                        }, 8);
                    }
                    nav.button({
                        "type": "img",
                        "name": "room8kill_" + v.type + "-" + v.name,
                        "left": 350 + ((j % 10) * 155),
                        "top": 500 + (Math.floor(j / 10) * 155),
                        "width": 150,
                        "height": 150,
                        "image": "8_wardrobe/icons/char_" + v.daring + ".png"
                    }, 8);
                    nav.button({
                        "type": "btn",
                        "name": "room8kill_" + v.type + "-" + v.name,
                        "left": 350 + ((j % 10) * 155),
                        "top": 500 + (Math.floor(j / 10) * 155),
                        "width": 150,
                        "height": 150,
                        "title": v.display,
                        "image": "8_wardrobe/icons/" + v.img
                    }, 8);
                    j++;
                }
            });
        }
    }
    else if (name === "next") {
        room8.drawClothingIcons(1);
    }
    else if (name === "prev") {
        room8.drawClothingIcons(0);
    }
    else if (name.startsWith("room8kill_")) {
        fullname = name.replace("room8kill_", "");
        var tempx = fullname.split("-");
        type = tempx[0];
        clname = tempx[1];
        if (clname === "nonexxx")
            clname = null;
        switch (type) {
            case "shoes": cl.c.shoes = clname; cl.c.pj = null; break;
            case "socks": cl.c.socks = clname; cl.c.pj = null; cl.c.swimsuit = null; break;
            case "pants": cl.c.pants = clname; cl.c.pj = null; cl.c.swimsuit = null; cl.c.dress = null; break;
            case "panties": cl.c.panties = clname; cl.c.pj = null; cl.c.swimsuit = null; break;
            case "bra": cl.c.bra = clname; cl.c.pj = null; cl.c.swimsuit = null; break;
            case "shirt": cl.c.shirt = clname; cl.c.pj = null; cl.c.swimsuit = null; cl.c.dress = null; break;
            case "dress": cl.c.dress = clname; cl.c.pj = null; cl.c.swimsuit = null; cl.c.shirt = null; cl.c.pants = null; break;
            case "swimsuit": cl.c.swimsuit = clname; cl.c.pj = null; cl.c.dress = null; cl.c.shirt = null; cl.c.pants = null; cl.c.socks = null; cl.c.shoes = null; break;
            case "pj": cl.nude(); cl.c.pj = clname; break;
            case "buttplug": cl.c.buttplug = clname; break;
            case "necklace": cl.c.necklace = clname; break;
            case "ear": cl.c.earring = clname; break;
            case "nose": cl.c.nosering = clname; break;
            case "belly": cl.c.bellyring = clname; break;
            case "nipple": cl.c.nipplering = clname; break;
            case "accessories": cl.c.accessories = clname; break;
            default: "can't find " + clname; break;
        }
        room8.btnclick("checkSleepEnable");
        room8.btnclick("main_" + type);
        cl.display();
    }
    else if (name.startsWith("wear_")) {
        var wearOutfit = parseInt(name.replace("wear_", ""));
        cl.wearSavedOutfit(wearOutfit);
        room8.btnclick("checkSleepEnable");
    }
    else if (name.startsWith("save_")) {
        var entry = parseInt(name.replace("save_", ""));
        var saveName = $("input[data-name='save_input_" + entry + "'").val();
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
        var newName = saveName;
        if (newName.length > 20)
            newName = newName.substring(0, 20);
        cl.saveOutfit[entry].name = g.cleanText(newName);
        g.popUpNoticeBottom(newName + " outfit saved. ");
    }
    else if (name === "checkSleepEnable") {
        if (cl.c.shoes !== null || cl.c.socks !== null || cl.c.pants !== null || cl.c.shirt !== null ||
            cl.c.dress !== null || cl.c.swimsuit !== null) {
            $("img[data-name='save_5']").hide();
        }
        else
            $("img[data-name='save_5']").show();
    }
    room8.drawClothingList();
};

room8.drawClothingIcons = function (list) {
    nav.killbuttonStartsWith("main_");
    var clothingList = new Array();
    nav.killbutton("next");
    nav.killbutton("prev");
    console.log(list === 0)
    if (list === 0) {
        if (sissy.get("fem103").ach) {
            clothingList = [
                { img: "icon_girl_nude", title: "Nude", name: "main_nude" },
                { img: "icon_girl_underwear", title: "Underwear", name: "main_panties" },
                { img: "icon_girl_bra", title: "Bras", name: "main_bra" },
                { img: "icon_girl_pants", title: "Pants", name: "main_pants" },
                { img: "icon_girl_shirt", title: "Shirt", name: "main_shirt" },
                { img: "icon_girl_dress", title: "Dress", name: "main_dress" },
                { img: "icon_girl_socks", title: "Socks", name: "main_socks" },
                { img: "icon_girl_shoes", title: "Shoes", name: "main_shoes" },
                { img: "icon_girl_swim", title: "Swim", name: "main_swimsuit" },
                { img: "icon_girl_pj", title: "PJs", name: "main_pj" },
                { img: "icon_girl_next", title: "Next", name: "next" },
            ];
        }
        else {
            clothingList = [
                { img: "icon_boy_nude", title: "Nude", name: "main_nude" },
                { img: (cl.hasClothingTypeSex("panties", "f") ? "icon_girl_underwear" : "icon_boy_underwear"), title: "Underwear", name: "main_panties" },
                { img: "icon_boy_pants", title: "Pants", name: "main_pants" },
                { img: "icon_boy_shirt", title: "Shirt", name: "main_shirt" },
                { img: "icon_boy_socks", title: "Socks", name: "main_socks" },
                { img: "icon_boy_shoes", title: "Shoes", name: "main_shoes" },
                { img: "icon_boy_swim", title: "Swim", name: "main_swimsuit" },
                { img: "icon_boy_pj", title: "PJs", name: "main_pj" },
            ];
            if (cl.hasClothingType("buttplug")) {
                clothingList.push({ img: "icon_girl_plug", title: "Butt plug", name: "main_buttplug" });
            }
            if (cl.hasClothingType("dress")) {
                clothingList.splice(1, 0, { img: "icon_girl_dress", title: "Dress", name: "main_dress" });
            }
            if (cl.hasClothingType("bra")) {
                clothingList.splice(1, 0, { img: "icon_girl_bra", title: "Butt plug", name: "main_bra" });
            }
        }
    }
    else {
        clothingList = [
            { img: "icon_girl_nude", title: "Nude", name: "main_nude" },
            { img: "icon_girl_acc", title: "Accessories", name: "main_accessories" },
            { img: "icon_girl_necklace", title: "Necklace", name: "main_necklace" },
            { img: "icon_girl_ear", title: "Ear rings", name: "main_ear" },
            { img: "icon_girl_nose", title: "Nose Rings", name: "main_nose" },
            { img: "icon_girl_belly", title: "Belly Rings", name: "main_belly" },
            { img: "icon_girl_nipple", title: "Nipple Rings", name: "main_nipple" },
            { img: "icon_girl_plug", title: "Butt Plugs", name: "main_buttplug" },
            { img: "icon_girl_back", title: "Prev", name: "prev" },
        ];
    }
    w = 1500 / clothingList.length;
    h = (w / 200) * 300;
    $.each(clothingList, function (i, v) {
        nav.button({
            "type": "img",
            "name": v.name + "_entry",
            "left": 350 + (i * 130),
            "top": 310,
            "width": 125,
            "height": 125,
            "title": v.title,
            "image": "8_wardrobe/icons/_blank.png"
        }, 8);
        nav.button({
            "type": "btn",
            "name": v.name,
            "left": 350 + (i * 130),
            "top": 300,
            "width": 125,
            "height": 187,
            "title": v.title,
            "image": "8_wardrobe/" + v.img + ".png"
        }, 8);
    });

    room8.drawClothingList();
};

room8.drawClothingList = function () {
    var clothingIcon = null;
    if (cl.c.panties !== null)
        nav.modbutton("main_panties_entry", "8_wardrobe/icons/" + cl.list[cl.where("panties", cl.c.panties)].img, null, null);
    else
        nav.modbutton("main_panties_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.bra !== null)
        nav.modbutton("main_bra_entry", "8_wardrobe/icons/" + cl.list[cl.where("bra", cl.c.bra)].img, null, null);
    else
        nav.modbutton("main_bra_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.dress !== null)
        nav.modbutton("main_dress_entry", "8_wardrobe/icons/" + cl.list[cl.where("dress", cl.c.dress)].img, null, null);
    else
        nav.modbutton("main_dress_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.pants !== null)
        nav.modbutton("main_pants_entry", "8_wardrobe/icons/" + cl.list[cl.where("pants", cl.c.pants)].img, null, null);
    else
        nav.modbutton("main_pants_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.shirt !== null)
        nav.modbutton("main_shirt_entry", "8_wardrobe/icons/" + cl.list[cl.where("shirt", cl.c.shirt)].img, null, null);
    else
        nav.modbutton("main_shirt_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.socks !== null)
        nav.modbutton("main_socks_entry", "8_wardrobe/icons/" + cl.list[cl.where("socks", cl.c.socks)].img, null, null);
    else
        nav.modbutton("main_socks_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.shoes !== null)
        nav.modbutton("main_shoes_entry", "8_wardrobe/icons/" + cl.list[cl.where("shoes", cl.c.shoes)].img, null, null);
    else
        nav.modbutton("main_shoes_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.swimsuit !== null)
        nav.modbutton("main_swimsuit_entry", "8_wardrobe/icons/" + cl.list[cl.where("swimsuit", cl.c.swimsuit)].img, null, null);
    else
        nav.modbutton("main_swimsuit_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.pj !== null)
        nav.modbutton("main_pj_entry", "8_wardrobe/icons/" + cl.list[cl.where("pj", cl.c.pj)].img, null, null);
    else
        nav.modbutton("main_pj_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.buttplug !== null) 
        nav.modbutton("main_buttplug_entry", "8_wardrobe/icons/" + cl.list[cl.where("buttplug", cl.c.buttplug)].img, null, null);
    else
        nav.modbutton("main_buttplug_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.accessories !== null)
        nav.modbutton("main_accessories_entry", "8_wardrobe/icons/" + cl.list[cl.where("accessories", cl.c.accessories)].img, null, null);
    else
        nav.modbutton("main_accessories_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.necklace !== null)
        nav.modbutton("main_necklace_entry", "8_wardrobe/icons/" + cl.list[cl.where("necklace", cl.c.necklace)].img, null, null);
    else
        nav.modbutton("main_necklace_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.earring !== null)
        nav.modbutton("main_ear_entry", "8_wardrobe/icons/" + cl.list[cl.where("ear", cl.c.earring)].img, null, null);
    else
        nav.modbutton("main_ear_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.nosering !== null)
        nav.modbutton("main_nose_entry", "8_wardrobe/icons/" + cl.list[cl.where("nose", cl.c.nosering)].img, null, null);
    else
        nav.modbutton("main_nose_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.bellyring !== null)
        nav.modbutton("main_belly_entry", "8_wardrobe/icons/" + cl.list[cl.where("belly", cl.c.bellyring)].img, null, null);
    else
        nav.modbutton("main_belly_entry", "8_wardrobe/icons/_blank.png", null, null);

    if (cl.c.nipplering !== null)
        nav.modbutton("main_nipple_entry", "8_wardrobe/icons/" + cl.list[cl.where("nipple", cl.c.nipplering)].img, null, null);
    else
        nav.modbutton("main_nipple_entry", "8_wardrobe/icons/_blank.png", null, null);

   
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
                { chatID: 2, text: "...", callback: "" },
                { chatID: -1, text: "Skip", callback: "" }
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
            text: "My butt-hole is way too tight for that! I'm going to have to work on it so I can fit this in!",
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
