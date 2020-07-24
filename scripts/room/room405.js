//Room name
var room405 = {};
room405.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "red",
            "left": 872,
            "top": 38,
            "width": 711,
            "height": 1042,
            "image": "405_reds/red.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 405);
    });
    nav.buildnav(navList);
};

room405.btnclick = function (name) {
    switch (name) {
        case "red":
            if (cl.c.hairLength === null)
                chat(0, 405);
            if (cl.c.hairLength < 2)
                chat(1, 405);
            else
                chat(2, 405);
            break;
        case "trim":
            cl.c.lastHairCut = g.dt;
            g.internal = parseInt(g.internal);
            if (g.internal > -1)
                cl.c.hairLength = g.internal;
            else
                cl.c.hairLength = null;
            g.mod("money", -24);
            cl.display();
            char.room(405);
            break;
        case "color":
            cl.c.hairColor = g.internal;
            g.mod("money", -120);
            cl.display();
            char.room(405);
            break;
        case "style":
            cl.c.hairStyle = g.internal;
            g.mod("money", -80);
            cl.display();
            char.room(405);
            break;
        default:
            break;
    }
};

room405.chatcatch = function (callback) {
    var i;
    switch (callback) {
        case "trim":
            if (g.get("money") < 24)
                chat(3, 405);
            else {
                inv.createElements();
                for (i = -1; i < cl.c.hairLength; i++)
                    $('#menu-bg_' + (i + 1)).html('<img src="./images/room/405_reds/trim' + i + '.png" data-name="' + i +'" data-type="trim" class="hair-change"/>');
            }
            $('#menu-bg_' + (i + 1)).html('<img src="./images/room/405_reds/cancel.png" data-name="cancel" data-type="cancel" class="hair-change"/>');
            $('.hair-change').click(function () {
                g.internal = $(this).data('name');
                if ($(this).data('type') === "cancel")
                    char.room(405);
                else
                    room405.btnclick($(this).data('type'));
            });
            break;
        case "dye":
            if (g.get("money") < 120)
                chat(3, 405);
            else {
                inv.createElements();
                var colorTemp = 'black';
                $('#menu-bg_0').html('<img src="./images/room/405_reds/color_' + colorTemp + '.png" data-name="' + colorTemp + '" data-type="color" class="hair-change"/>');
                colorTemp = 'auburn';
                $('#menu-bg_1').html('<img src="./images/room/405_reds/color_' + colorTemp + '.png" data-name="' + colorTemp + '" data-type="color" class="hair-change"/>');
                colorTemp = 'blond';
                $('#menu-bg_2').html('<img src="./images/room/405_reds/color_' + colorTemp + '.png" data-name="' + colorTemp + '" data-type="color" class="hair-change"/>');
                colorTemp = 'red';
                $('#menu-bg_3').html('<img src="./images/room/405_reds/color_' + colorTemp + '.png" data-name="' + colorTemp + '" data-type="color" class="hair-change"/>');
                colorTemp = 'pink';
                $('#menu-bg_4').html('<img src="./images/room/405_reds/color_' + colorTemp + '.png" data-name="' + colorTemp + '" data-type="color" class="hair-change"/>');
                colorTemp = 'rainbow';
                $('#menu-bg_5').html('<img src="./images/room/405_reds/color_' + colorTemp + '.png" data-name="' + colorTemp + '" data-type="color" class="hair-change"/>');
                $('#menu-bg_6').html('<img src="./images/room/405_reds/cancel.png" data-name="cancel" data-type="cancel" class="hair-change"/>');
            }
            $('.hair-change').click(function () {
                g.internal = $(this).data('name');
                if ($(this).data('type') === "cancel")
                    char.room(405);
                else {
                    var thisType = $(this).data('type');
                    if (thisType === "color") {
                        if ((g.internal === "pink" || g.internal === "rainbow") && !sc.checkevent("me", -5)) {
                            $('.hair-change[data-name="' + g.internal + '"]').after('<img src="./images/inv/tooGirly.png" />');
                            return;
                        }
                    }
                    room405.btnclick(thisType);

                }
            });
            break;
        case "style":
            if (g.get("money") < 80)
                chat(3, 405);
            else {
                inv.createElements();
                var styleTemp = 'straight';
                $('#menu-bg_0').html('<img src="./images/room/405_reds/style_' + styleTemp + '.png" data-name="' + styleTemp + '" data-type="style" class="hair-change"/>');
                styleTemp = 'wavy';
                $('#menu-bg_1').html('<img src="./images/room/405_reds/style_' + styleTemp + '.png" data-name="' + styleTemp + '" data-type="style" class="hair-change"/>');
                styleTemp = 'pig';
                $('#menu-bg_2').html('<img src="./images/room/405_reds/style_' + styleTemp + '.png" data-name="' + styleTemp + '" data-type="style" class="hair-change"/>');
                styleTemp = 'bang';
                $('#menu-bg_3').html('<img src="./images/room/405_reds/style_' + styleTemp + '.png" data-name="' + styleTemp + '" data-type="style" class="hair-change"/>');
                styleTemp = 'leia';
                $('#menu-bg_4').html('<img src="./images/room/405_reds/style_' + styleTemp + '.png" data-name="' + styleTemp + '" data-type="style" class="hair-change"/>');
                $('#menu-bg_5').html('<img src="./images/room/405_reds/cancel.png" data-name="cancel" data-type="cancel" class="hair-change"/>');
            }
            $('.hair-change').click(function () {
                g.internal = $(this).data('name');
                if ($(this).data('type') === "cancel")
                    char.room(405);
                else
                    room405.btnclick($(this).data('type'));
            });
            break;
        default:
            break;
    }
    
};

room405.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "red",
            text: "Hay honey! You know I can't do a lot with a bald head?",
            button: [
                { chatID: -1, text: "I'm such an air head!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "red",
            text: "Hay honey! Are you here for a trim or hair coloring?",
            button: [
                { chatID: -1, text: "Here for a trim. [$24]", callback: "trim" },
                { chatID: -1, text: "Here for a hair dye. [$120]", callback: "dye" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "red",
            text: "Hay honey! What can I do for you.",
            button: [
                { chatID: -1, text: "Here for a trim. [$24]", callback: "trim" },
                { chatID: -1, text: "Here for a hair dye. [$120]", callback: "dye" },
                { chatID: -1, text: "Here to style my hair [$80]", callback: "style" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "red",
            text: "Sorry honey, I don't do freebies.",
            button: [
                { chatID: -1, text: "Awwww ok", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};