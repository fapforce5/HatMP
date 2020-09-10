var char = {};
var menu = {};
char.clothesholder = null;

$(document).ready(function () {

    nav.setRatio();
    nav.buildRoom();
    cl.display();

    $('#ohShitIFoundABug').click(function () {
        char.room(0);
        $('.menu-close').click();
    });
    $('#room_footer').on('click', '.room-changeRoomBtn', function () {
        char.room(parseInt($(this).data('roomid')));
    });

    $('#room-buttons').on('click', '.rom-event', function () {
        var name = $(this).data('name');
        var roomID = parseInt($(this).data('room'));
        var func = g.room(roomID) + ".click";
        window[g.room(roomID)]["btnclick"](name);
    });

    $('#room_closeVideo').click(function () {
        nav.killvideo();
    });


    $(window).on('resize', function () {
        char.resizewindow();
    });

    char.resizewindow = function () {
        var ogRatio = g.ratio === 0 ? .0001 : g.ratio;
        g.setRatio();
        var gameWidth = 1920 * g.ratio;
        var gameHeight = 1080 * g.ratio;
        cl.display();
        $('#room-background').find('img').css({ "width": gameWidth + "px", "height": gameHeight + "px" });
        $('#room-buttons').find('img').each(function () {
            var w = $(this).css("width").replace('px', '') / ogRatio;
            var h = $(this).css("height").replace('px', '') / ogRatio;
            var t = $(this).css("top").replace('px', '') / ogRatio;
            var l = $(this).css("left").replace('px', '') / ogRatio;
            $(this).css({
                "width": (w * g.ratio) + "px",
                "height": (h * g.ratio) + "px",
                "top": (t * g.ratio) + "px",
                "left": (l * g.ratio) + "px"
            });
        });

        $(".resize").each(function () {
            var w = $(this).css("width").replace('px', '') / ogRatio;
            var h = $(this).css("height").replace('px', '') / ogRatio;
            var t = $(this).css("top").replace('px', '') / ogRatio;
            var l = $(this).css("left").replace('px', '') / ogRatio;
            $(this).css({
                "width": (w * g.ratio) + "px",
                "height": (h * g.ratio) + "px",
                "top": (t * g.ratio) + "px",
                "left": (l * g.ratio) + "px"
            });
        });

        $('.room-left').css({ height: 1080 * g.ratio + "px" });

        $('.char-container').css({ "height": 670 * g.ratio + "px" });

        $('.char-modBtn').css({
            width: 75 * g.ratio + "px",
            height: 75 * g.ratio + "px"
        });
        $(".rl-change[data-type='body']").css({
            left: "0px",
            top: "0px",
            width: 75 * g.ratio + "px",
            height: 50 * g.ratio + "px"
        });
        $(".rl-change[data-type='map']").css({
            left: 75 * g.ratio + "px",
            top: "0px",
            width: 75 * g.ratio + "px",
            height: 50 * g.ratio + "px"
        });
        $(".rl-change[data-type='graph']").css({
            left: 150 * g.ratio + "px",
            top: "0px",
            width: 75 * g.ratio + "px",
            height: 50 * g.ratio + "px"
        });
        $(".rl-change[data-type='hide']").css({
            left: 225 * g.ratio + "px",
            top: "0px",
            width: 75 * g.ratio + "px",
            height: 50 * g.ratio + "px"
        });
        $(".left-menu").css({
            width: 300 * g.ratio + "px",
        });
        $(".char-12").css({
            "font-size": 12 * g.ratio + "px"
        });
        $(".char-20").css({
            "font-size": 20 * g.ratio + "px"
        });
        $(".mt-10").css({
            "margin-top": 10 * g.ratio + "px"
        });
        $(".mt-60").css({
            "margin-top": 60 * g.ratio + "px"
        });
        $(".resize-height").css({
            height: 20 * g.ratio + "px"
        });
        char.menu();
    };

    $("#menu_parent").on('click', '.menu-button', function () {
        menu.mClick($(this).data('type'));
    });

    $('#room-menu').click(function () {
        menu.initBuild("init");
    });
    $("#menu_parent").on('click', '.menu-save', function () {
        menu.saveBtn($(this));
    });
    $("#menu_parent").on('click', '.menu-del', function () {
        menu.saveDel($(this));
    });

    $("#menu_parent").on('click', '.menu-export', function () {
        char.export(parseInt($(this).data("save")));
    });

    $("#room_export_load").click(function () {
        char.import();
    });

    $("#room_export_hide").click(function () {
        $("#room_export").slideUp();
    });

    $("#menu_parent").on('click', '#menu-import', function () {
        $('#room-export-text').hide();
        $('#room-import-text').show();
        $("#room_export").slideDown();
        $("#room_export_data").val('');
        $('#room_export_load').show();
    });

    $('.char-modBtn').click(function () {
        g.tview = $(this).data("t");
        cl.display();
    });
    $(".rl-change[data-type='body']").css({
        left: "0px",
        top: "0px",
        width: 75 * g.ratio + "px",
        height: 50 * g.ratio + "px"
    });
    $(".rl-change[data-type='map']").css({
        left: 75 * g.ratio + "px",
        top: "0px",
        width: 75 * g.ratio + "px",
        height: 50 * g.ratio + "px"
    });
    $(".rl-change[data-type='graph']").css({
        left: 150 * g.ratio + "px",
        top: "0px",
        width: 75 * g.ratio + "px",
        height: 50 * g.ratio + "px"
    });
    $(".rl-change[data-type='hide']").css({
        left: 225 * g.ratio + "px",
        top: "0px",
        width: 75 * g.ratio + "px",
        height: 50 * g.ratio + "px"
    });
    $(".left-menu").css({
        width: 300 * g.ratio + "px",
    }).hide();
    $(".rl-change").click(function () {
        char.changeMenu($(this).data("type"));
    });
    $(".char-12").css({
        "font-size": 12 * g.ratio + "px"
    });
    $(".char-20").css({
        "font-size": 20 * g.ratio + "px"
    });
    $(".mt-10").css({
        "margin-top": 10 * g.ratio + "px"
    });
    $(".mt-60").css({
        "margin-top": 60 * g.ratio + "px"
    });
    $(".resize-height").css({
        height: 20 * g.ratio + "px"
    });
    //$(".width-l").css({
    //    width: 300 * g.ratio + "px"
    //});
    //$("#left_change").css({
    //    width: 75 * g.ratio + "px",
    //    height: 75 * g.ratio + "px"
    //});
    //$("#left_change").click(function () {
    //    if (g.lview === "b") {
    //        g.lview = "m";
    //        $("#left_change").find("img").attr("src", "./images/general/cbod.png");
    //        $("#room_left_char").hide();
    //        $("#room_left_map").show();
    //    }
    //    else {
    //        g.lview = "b";
    //        $("#left_change").find("img").attr("src", "./images/general/cmap.png");
    //        $("#room_left_char").show();
    //        $("#room_left_map").hide();
    //    }
    //});

    char.init();
});

char.changeMenu = function (menu) {
    switch (menu) {
        case "body":
            $("#room_left_char").show();
            $("#room_left_map").hide();
            $("#room_left_graph").hide();
            break;
        case "map":
            $("#room_left_char").hide();
            $("#room_left_map").show();
            $("#room_left_graph").hide();
            break;
        case "graph":
            $("#room_left_char").hide();
            $("#room_left_map").hide();
            $("#room_left_graph").show();
            char.makeGraph();
            break;
        case "hide":
            $("#room_left_char").hide();
            $("#room_left_map").hide();
            $("#room_left_graph").hide();
            break;
        default:
            console.log("invalid menu: " + menu);
            break;
    };
};

char.addtime = function (minutes) {
    g.dt = char.addMinutes(g.dt, minutes);
    nav.buildclock();
};

char.newday = function (sendingRoom) {
    //var retData = null;
    //var hormoneLevel = g.get("hormone");
    //if (g.dt.getHours() > 6)
    //    g.dt.setDate(g.dt.getDate() + 1);
    //g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);
    //nav.buildclock();
    //g.set("jobConstWorkToday", 0);
    //g.set("energy", 70);
    //g.mod('hormone', -2);
    //var thisTinyPP = g.get("shinkCock");
    //g.newday();
    //cl.hairgrowth();
    //if (g.diffDatesByDays(g.dt, cl.c.lastHairCut) > 21) {
    //    if (cl.c.hairLength === null)
    //        cl.c.hairLength = 0;
    //    else if (cl.c.hairLength < 4)
    //        cl.c.hairLength++;
    //    cl.c.lastHairCut = g.dt;
    //}

    //if (g.get("fitness") > 98) {
    //    g.set("fitness", 0);
    //    g.mod("fitnessLevel", 1);
    //    g.mod("maxenergy", 3);
    //    g.popUpNotice("Your fitness level increased");
    //}

    ////check Transformation

    //if (cl.c.chest === 0) {
    //    if (g.get("fitnessLevel") > 0) {
    //        retData = { type: "chest", tOld: 0, tNew: 1 };
    //        cl.c.chest = 1;
    //    }
    //}
    //else if (thisTinyPP && cl.c.cock < 5) {
    //    retData = { type: "cock", tOld: cl.c.cock, tNew: cl.c.cock + 1 };
    //}
    //else if (hormoneLevel > 65 && g.get("sissy") > 95) {
    //    var tempC = null;
    //    if (Math.floor(Math.random() * (100 - hormoneLevel)) < 5) {
    //        g.set("sissy", 0);
    //        g.mod("sissyLevel", 1);
    //        if (cl.c.leg === 4 && cl.c.chest === 6)
    //            tempC = null;
    //        else if (cl.c.leg === 4 && cl.c.chest < 6)
    //            tempC = "chest";
    //        else if (cl.c.chest === 6 && cl.c.leg < 4)
    //            tempC = "leg";
    //        else if (Math.floor(Math.random() * 2) === 0)
    //            tempC = "leg";
    //        else
    //            tempC = "chest";

    //        if (tempC === null)
    //            retData = null;

    //        else if (tempC === "chest")
    //            retData = { type: "chest", tOld: cl.c.chest, tNew: cl.c.chest + 1 };
    //        else
    //            retData = { type: "leg", tOld: cl.c.leg, tNew: cl.c.leg + 1 };
    //    }
    //}
    //if (retData !== null) {
    //    switch (retData.type) {
    //        case "chest":
    //            cl.c.chest = retData.tNew;
    //            break;
    //        case "leg":
    //            cl.c.leg = retData.tNew;
    //            break;
    //        case "cock":
    //            cl.c.cock = retData.tNew;
    //            break;
    //        default:
    //            console.log(newBod, "error");
    //            break;
    //    }
    //    cl.display();
    //}
    
    //menu.save("HatMP_9", null, 9);
    //console.log(retData);
    //return retData;
    console.log("noooooo")
};

char.newdayfake = function () {
    if (g.dt.getHours() > 6)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);

    g.newday();
    nav.buildclock();
    cl.hairgrowth();
    g.set("energy", 10);
    g.set("jobConstWorkToday", 0);
    g.mod('hormone', -2);
    cl.energydisplay();
    g.set("arousal", 0);
    cl.cockDisplay();
}

char.settime = function (newTimeHour, newTimeMinute) {
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), newTimeHour, newTimeMinute, 0, 0);
    nav.buildclock();
};

char.greeting = function () {
    var thisHour = g.dt.getHours;
    if (thisHour < 12)
        return "morning";
    else if (thisHour < 6)
        return "afternoon";
    else
        return "evening";
};

char.saveclothes = function (saveClothes, loadClothes, removeAll) {
    if (saveClothes) {
        char.clothesholder = {
            shoes: cl.c.shoes,
            socks: cl.c.socks,
            pants: cl.c.pants,
            panties: cl.c.panties,
            bra: cl.c.bra,
            shirt: cl.c.shirt,
            dress: cl.c.dress,
            buttplug: cl.c.buttplug,
            accessories: cl.c.accessories
        };
    }
    if (loadClothes) {
        if (char.clothesholder !== null) {
            cl.c.shoes = char.clothesholder.shoes;
            cl.c.socks = char.clothesholder.socks;
            cl.c.pants = char.clothesholder.pants;
            cl.c.panties = char.clothesholder.panties;
            cl.c.bra = char.clothesholder.bra;
            cl.c.shirt = char.clothesholder.shirt;
            cl.c.dress = char.clothesholder.dress;
            cl.c.buttplug = char.clothesholder.buttplug;
            cl.c.accessories = char.clothesholder.accessories;
            cl.display();
        }
    }
    if (removeAll) {
        cl.c.shoes = null;
        cl.c.socks = null;
        cl.c.pants = null;
        cl.c.panties = null;
        cl.c.bra = null;
        cl.c.shirt = null;
        cl.c.dress = null;
        cl.c.buttplug = null;
        cl.c.accessories = null;
        cl.display();
    }
};

char.room = function (roomID) {
    if (inv.roomChange.includes(roomID) && roomID !== g.roomID)
        cl.cTemp = $.extend(true, {}, cl.c);

    if (!$('#room_footer').is(":visible"))
        $('#room_footer').show();
    if ($('#room-menuButtons').is(":visible"))
        inv.close();
    g.prevRoom = g.roomID;
    g.roomID = roomID;
    g.dt = char.addMinutes(g.dt, 2);
    menu.makeSaves();
    nav.buildRoom();
    cl.cockDisplay();
    cl.energydisplay();
};

char.addMinutes = function (date, minutes) {
    return new Date(date.getTime() + (minutes * 60000));
};

char.addDays = function (date, day, staticHour, staticMinute) {
    var tDate = date;
    tDate.setDate(date.getDate() + day);
    return new Date(tDate.getFullYear(), tDate.getMonth(), tDate.getDate(), staticHour, staticMinute, 0, 0);
};

menu.initBuild = function (type) {
    $('#menu_parent').html('<img src="./images/phone/' + inv.get(inv.phone).image + '" style="position:absolute; ' + g.makeCss(1000, 700, 40, 610) + '" class="menu-phoneBG" />');
    $('#menu_parent').append('<img src="./images/phone/bSave.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 660) + '" data-type="save" class="menu-button menu-buttonKill" />');
    $('#menu_parent').append('<img src="./images/phone/bRelationships.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 810) + '" data-type="rel" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bContacts.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 960) + '" data-type="contact" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bHelp.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 1110) + '" data-type="help" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bTime.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 660) + '" data-type="time" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bPic.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 810) + '" data-type="pic" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bMap.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 960) + '" data-type="map" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bHormone.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 1110) + '" data-type="hormone" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bStats.png" style="position:absolute; ' + g.makeCss(150, 150, 480, 660) + '" data-type="stats" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bPatron.png" style="position:absolute; ' + g.makeCss(150, 150, 480, 810) + '" data-type="patron" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bAdmin.png" style="position:absolute; ' + g.makeCss(150, 150, 780, 660) + '" data-type="admin" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bPatreon.png" style="position:absolute; ' + g.makeCss(150, 150, 780, 1110) + '" data-type="patreon" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/power.png" style="position:absolute; ' + g.makeCss(90, 90, 937, 915) + '" data-type="close" class="menu-button"/>');
    $('#menu_parent').append('<img src="./images/phone/menu.png" style="position:absolute; ' + g.makeCss(70, 100, 950, 750) + '" data-type="menu" class="menu-button"/>');
    if (type === "init" || type === "save")
        $('#menu_parent').slideDown();

    if (type === "save") {
        $('.menu-button[data-type="menu"]').remove();
        menu.mClick("save");

    }
};

menu.mClick = function (type) {
    switch (type) {
        case "close":
            $('#menu_parent').slideUp('normal', function () {
                $('#menu_parent').html('');
            });
            break;
        case "menu":
            menu.initBuild("");
            break;
        case "rel":
            //menu.mClick("close");
            $('.menu-buttonKill').remove();
            $('.menu-button').remove();
            $('.menu-phoneBG').addClass('menu-phoneBGRotate');
            setTimeout(function () {
                var thisImg = inv.get(inv.phone).image.split('.');
                thisImg = thisImg[0] + "_rotate." + thisImg[1];
                $('#menu_parent').html('<img src="./images/phone/' + thisImg + '" style="position:absolute; ' + g.makeCss(1015, 1450, 32, 235) + '" class="menu-phoneBG" />');
                $('#menu_parent').append('<img src="./images/phone/power_rotate.png" style="position:absolute; ' + g.makeCss(131, 131, 474, 1533) + '" data-type="close" class="menu-button"/>');
                $('#menu_parent').append('<img src="./images/phone/menu_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 720, 1560) + '" data-type="menu" class="menu-button"/>');
                $('#menu_parent').append('<img src="./images/phone/back_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 200, 1560) + '" data-type="back" class="sc-menu-button"/>');

                sc.buildIcons();

                $('.sc-menu-button').click(function () {
                    sc.buildIcons();
                });
            }, 800);
            break;
        case "save":
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div id="menu_normal" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                '<ul>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="0">SAVE</button><div class="menu-save-line" data-save="0"></div><button type="button" class="menu-del" data-save="0" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="0"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="1">SAVE</button><div class="menu-save-line" data-save="1"></div><button type="button" class="menu-del" data-save="1" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="1"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="2">SAVE</button><div class="menu-save-line" data-save="2"></div><button type="button" class="menu-del" data-save="2" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="2"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="3">SAVE</button><div class="menu-save-line" data-save="3"></div><button type="button" class="menu-del" data-save="3" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="3"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="4">SAVE</button><div class="menu-save-line" data-save="4"></div><button type="button" class="menu-del" data-save="4" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="4"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="5">SAVE</button><div class="menu-save-line" data-save="5"></div><button type="button" class="menu-del" data-save="5" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="5"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="6">SAVE</button><div class="menu-save-line" data-save="6"></div><button type="button" class="menu-del" data-save="6" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="6"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="7">SAVE</button><div class="menu-save-line" data-save="7"></div><button type="button" class="menu-del" data-save="7" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="7"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="8">SAVE</button><div class="menu-save-line" data-save="8"></div><button type="button" class="menu-del" data-save="8" disabled="disabled">DELETE</button><button type="button" class="menu-export" data-save="8"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="9">LOAD</button><div class="menu-save-line" data-save="9"></div><span class="resize-text" style="font-size:.8rem">[Auto Save]</span></li>' +
                '<li><button type="button" id="menu-import" data-type="import">IMPORT <img class="menu-export-image" src="./images/general/import.png"/></button></li>' +
                '</ul>' +
                '</div>');
            var i;
            for (i = 0; i < 11; i++) {
                var cookieName = 'HatMP_' + i;
                if (localStorage.getItem(cookieName) !== null) {
                    var initTemp = JSON.parse(localStorage[cookieName]);
                    $('.menu-del[data-save=' + i + ']').prop('disabled', false);
                    if (initTemp.version >= 7) {
                        $('.menu-save[data-save=' + i + ']').text('LOAD').attr('data-type', 'load');
                        $('.menu-save-line[data-save=' + i + ']').html(initTemp.savename);
                    }
                    else {
                        $('.menu-save-line[data-save=' + i + ']').text("Old Version - Can't Load. ");
                    }
                }
            }
            $('.menu-save-line').css({ 'width': 300 * g.ratio + 'px' });
            $('.menu-save-line').css({ 'font-size': 20 * g.ratio + 'px', 'margin-top': 10 * g.ratio + 'px' });
            $('.menu-save').css({ 'font-size': 20 * g.ratio + 'px', 'padding': 5 * g.ratio + "px " + 10 * g.ratio + "px" });
            $('.menu-del').css({ 'font-size': 20 * g.ratio + 'px', 'padding': 5 * g.ratio + "px " + 10 * g.ratio + "px" });
            $('.menu-export').css({ 'padding': 5 * g.ratio + "px " + 10 * g.ratio + "px" });
            $('.menu-export-image').css({ 'width': 15 * g.ratio + 'px' });
            $('.menu-load').css({ 'font-size': 20 * g.ratio + 'px' });
            break;
        case "help":
            window.open("http://fapforce5.com"); 
            //$('.menu-buttonKill').remove();
            //$('.menu-button').remove();
            //$('.menu-phoneBG').addClass('menu-phoneBGRotate');
            //setTimeout(function () {
            //    var thisImg = inv.get(inv.phone).image.split('.');
            //    thisImg = thisImg[0] + "_rotate." + thisImg[1];
            //    $('#menu_parent').html('<img src="./images/phone/' + thisImg + '" style="position:absolute; ' + g.makeCss(1015, 1450, 32, 235) + '" class="menu-phoneBG" />');
            //    $('#menu_parent').append('<img src="./images/phone/power_rotate.png" style="position:absolute; ' + g.makeCss(131, 131, 474, 1533) + '" data-type="close" class="menu-button"/>');
            //    $('#menu_parent').append('<img src="./images/phone/menu_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 720, 1560) + '" data-type="menu" class="menu-button"/>');
            //    $('#menu_parent').append('<img src="./images/phone/back_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 200, 1560) + '" data-type="back" class="sc-menu-button"/>');
            //    g.makeCss()
            //    $('#menu_parent').append('<img src="./images/phone/help/help1.jpg" style="position:absolute; ' + g.makeCss(622, 1110, 93, 417) + '" id="menu_help_display" data-help="1"/>');
            //    $('#menu_parent').append('<img src="./images/general/arrowLeft.png" style="position:absolute; ' + g.makeCss(150, 233, 800, 600) + '" class="hover-display menu-help-back"/>');
            //    $('#menu_parent').append('<img src="./images/general/arrowRight.png" style="position:absolute; ' + g.makeCss(150, 233, 800, 1087) + '" class="hover-display menu-help-forward"/>');

            //    $(".menu-help-forward").click(function () {
            //        var num = parseInt($('#menu_help_display').attr('data-help'));
            //        num = num > 5 ? num = 1 : num + 1;
            //        $('#menu_help_display').prop("src", "./images/phone/help/help" + num + ".jpg").attr("data-help", num);
            //        console.log(num)
            //    });

            //    $(".menu-help-back").click(function () {
            //        var num = parseInt($('#menu_help_display').attr('data-help'));
            //        num = num < 2 ? num = 6 : num - 1;
            //        $('#menu_help_display').prop("src", "./images/phone/help/help" + num + ".jpg").attr("data-help", num);
            //    });
            //    //sc.buildIcons();

            //    //$('.sc-menu-button').click(function () {
            //    //    sc.buildIcons();
            //    //});
            //}, 800);

            //$(".menu-buttonKill").remove();
            //$('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(730, 585, 167, 651) + ' background:#ccc; padding:' + 15 * g.ratio + 'px;">' +
            //    'Thank you for playing my game. All artwork is done by a paid artist. If you would like to support the game' +
            //    'and assist with the costs of making it please visit my Patreon.' +
            //    '<div style="width:100%; margin:15px 0; text-align:center;"><a href="https://www.patreon.com/FF5" target="_blank"><img src="./images/room/1_startScreen/become_a_patron_button.png" /></a></div>' +
            //    'If you have a bug, or just wish to make a request you can email me at: ' +
            //    '<a id="menu_emailDev" href="mailto:fapforce5@gmail.com?subject=Bug Report" style="color:#1c4d68;">fapforce5@gmail.com</a>' +
            //    '<br/><br/>Version: ' + g.versionText +
            //    '</div>');
            break;
        case "patron":
            window.open("https://www.patreon.com/FF5", "_blank"); 
            break;
        case "hormone":
            var tempEnergy = Math.floor((g.get("energy") / g.get("maxenergy")) * 100);
            $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                '<div style="padding:10%;">' +
                '<div style="font-size:' + 20 * g.ratio + 'px; margin-bottom:5px;">Hormone Levels</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#00abff; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.get("hormone") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Sissyness</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.get("sissy") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Appearance</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + cl.appearance() + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Energy</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + tempEnergy + '%; height:' + 15 * g.ratio + 'px; background:#20C000; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Fitness Level: ' + g.get("fitnessLevel") + '</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.get("fitness") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Leg Level: ' + g.get("legLevel") + '</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.get("leg") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Upper Body Level: ' + g.get("bodyLevel") + '</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.get("body") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '</div></div>');

            break;
        case "stats":
            $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                '<h2>My Digital Hormone Levels</h2>' +
                '<div>Blowjobs Given: ' + g.get("giveOralMale") + '</div>' +
                '<div>Pussy Eaten: ' + g.get("giveOralFemale") + '</div>' +
                '<div>Blowjobs Received: ' + (g.get("receiveOralMale") + g.get("receiveOralFemale")) + '</div>' +
                '<hr/>' +
                '<div>Girls Fucked: ' + g.get("fuckPussy") + '</div>' +
                '<div>Girls fucked in ass: ' + g.get("giveAnalFemale") + '</div>' +
                '<hr/>' +
                '<div>Fucked by dudes: ' + g.get("receiveAnalMale") + '</div>' +
                '<div>Dudes fucked: ' + g.get("giveAnalMale") + '</div>' +
                '<hr/>' +
                '<div>Girls fingered: ' + g.get("giveFingerFemale") + '</div>' +
                '<div>Dudes jacked off: ' + g.get("giveHandjobMale") + '</div>' +
                '<div>Jacked off: ' + (g.get("receiveHandjobMale") + g.get("receiveHandjobFemale")) + '</div>' +
                '<hr/>' +
                '<div>Footjobs Received: ' + (g.get("receiveFootjobMale") + g.get("receiveFootjobFemale")) + '</div>' +
                '<hr/>' +
                '<div>Pissed on: ' + (g.get("pissedonMale") + g.get("pissedonFemale")) + '</div>' +
                '</div>');
            break;
        case "admin":
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                '<h2>Cheat Menu</h2>Thank you for your support!<hr/><br />' +
                '<button type="button" class="admin-mod menu-blueButton" data-type="money">+$1000</button> Add Money <br/><br />' +
                '<button type="button" class="admin-mod menu-blueButton" data-type="horneyp">+</button> Horney <button type="button" class="admin-mod menu-blueButton" data-type="horneyd">-</button><br/><br />' +
                '<button type="button" class="admin-mod menu-blueButton" data-type="energyp">+</button> Energy <button type="button" class="admin-mod menu-blueButton" data-type="energyd">-</button><br/><br />' +
                '<div id="admin-mod-message"></div>' +
                '</div>');
            $(".admin-mod").click(function () {
                switch ($(this).data("type")) {
                    case "money":
                        if (g.get("money") < 1000000000)
                            g.mod("money", 1000);
                        $("#admin-mod-message").text("New balance: $" + g.get("money"));
                        break;
                    case "energyp":
                        g.mod("energy", 10);
                        $("#admin-mod-message").text("New Energy: " + g.get("energy"));
                        break;
                    case "energyd":
                        g.mod("energy", -10);
                        $("#admin-mod-message").text("New Energy: " + g.get("energy"));
                        break;
                    case "horneyp":
                        g.mod("arousal", 10);
                        $("#admin-mod-message").text("New Horney: " + g.get("arousal"));
                        break;
                    case "horneyd":
                        g.mod("arousal", -10);
                        $("#admin-mod-message").text("New Horney: " + g.get("arousal"));
                        break;
                }
            });
            break;
        case "time":
            $(".menu-buttonKill").remove();
            var gr = [0, 8, 10, 11, 16, 50, 51, 52, 55, 100, 450, 500];
            if (!gr.includes(g.roomID)) {
                var places = "";
                $.each(g.rooms, function (i, v) {
                    if (gr.includes(v.roomID))
                        places = places.concat("<br/>" + v.name);
                });
                $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                    "<h2>Wait a bit</h2>" +
                    "Sorry You can't wait here, but you can wait at the following locations: " + places +
                    "</div>");
            }
            else if (g.dt.getHours() > 21 || g.dt.getHours() < 6) {
                $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                    "<h2>Wait a bit</h2>" +
                    "It's after 10:00 PM. You need to get some sleep. " +
                    "</div>");
            }
            else {
                $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                    '<div style="width:100%; text-align:center;"><h2>Wait a bit</h2></div>' +
                    '<table style="margin-left:auto; margin-right:auto; text-align:left;">' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="pass" data-num="1">1 Hour</button> </td><td>Wait for an hour </td></tr>' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="pass" data-num="3">3 Hours</button> </td><td>Wait for 3 hours </td></tr>' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="pass" data-num="5">5 Hours</button> </td><td>Wait for 5 hours </td></tr>' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="specific" data-num="17">5:00 PM</button> </td><td>Wait till 5:00PM </td></tr>' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="specific" data-num="22">10:00 PM</button> </td><td>Wait till 10:00PM </td></tr>' +
                    '</table>' +
                    '<div id="admin-wait-message" style="width:100%; text-align:center; font-size: 1.1rem;">Time: ' + nav.friendlyTime() + '</div>' +
                    '</div>');
                $(".menu-waitABit").click(function () {
                    var num = parseInt($(this).data('num'));
                    var currentTime = g.dt.getHours();
                    var currentMinutes = g.dt.getMinutes();
                    if (currentTime < 22 || currentTime > 6) {
                        if ($(this).data("wait") === "pass") {
                            currentTime += num;
                            if (currentTime > 21) {
                                currentTime = 22;
                                currentMinutes = 0;
                            }
                            char.settime(currentTime, currentMinutes);
                            $("#admin-wait-message").text("Time: " + nav.friendlyTime());
                            char.room(g.roomID);
                        }
                        else {
                            if (currentTime < num) {
                                char.settime(num, 0);
                                $("#admin-wait-message").text("Time: " + nav.friendlyTime());
                                char.room(g.roomID);
                            }
                            else
                                $("#admin-wait-message").html("That Hour has passed.<br />Time: " + nav.friendlyTime());
                        }
                    }
                    else {
                        $("#admin-wait-message").text("Sorry, it's after 10:00 PM, You need to get some sleep.");
                    }
                });
            }

            break;
        case "contact":
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                "<h2>Contacts</h2>" +
                "Sorry, this is still in development. " +
                "</div>");
            break;
        case "pic":
            $(".menu-buttonKill").remove();
            var picI, counter;
            counter = 0;
            for (picI = 0; picI < pic.master.length; picI++) {
                if (pic.master[picI].entry) {
                    var pLeft, pTop;
                    pLeft = ((counter % 4) * 150) + 660;
                    pTop = (Math.floor(counter / 4) * 150) + 180;
                    $('#menu_parent').append('<img src="./images/inv/pics/' + pic.master[picI].thumb + '" style="position:absolute; ' + g.makeCss(150, 150, pTop, pLeft) + '" data-name="' + pic.master[picI].name + '" class="menu-button menu-buttonKill menu-phoneimage" />');
                    counter++;
                }
            }
            
            $('.menu-phoneimage').click(function () {
                var subPicName = $(this).data("name");
                var subPicFileName = null;
                for (var subPicI = 0; subPicI < pic.master.length; subPicI++) {
                    if (pic.master[subPicI].name === subPicName) {
                        subPicFileName = pic.master[subPicI].image;
                        subPicI = pic.master.length;
                    }
                }
                if (subPicFileName !== null) {
                    $(".menu-buttonKill").remove();
                    $('#menu_parent').append('<img src="./images/inv/pics/' + subPicFileName + '" style="position:absolute; ' + g.makeCss(761, 617, 167, 649) + '" class="menu-button menu-buttonKill" />');
                    $('#menu_parent').append('<img src="./images/phone/bBack.png" style="position:absolute; ' + g.makeCss(70, 100, 950, 1075) + ' " data-type="back" class="menu-pic-goback menu-button menu-buttonKill">');
                    $('.menu-pic-goback').click(function () {
                        menu.mClick("pic");
                    });
                }
            });

            break;
        case "map":
            $('.menu-buttonKill').remove();
            $('.menu-button').remove();
            $('.menu-phoneBG').addClass('menu-phoneBGRotate');
            setTimeout(function () {
                var thisImg = inv.get(inv.phone).image.split('.');
                thisImg = thisImg[0] + "_rotate." + thisImg[1];
                $('#menu_parent').html('<img src="./images/phone/' + thisImg + '" style="position:absolute; ' + g.makeCss(1015, 1450, 32, 235) + '" class="menu-phoneBG" />');
                $('#menu_parent').append('<img src="./images/phone/power_rotate.png" style="position:absolute; ' + g.makeCss(131, 131, 474, 1533) + '" data-type="close" class="menu-button"/>');
                $('#menu_parent').append('<img src="./images/phone/menu_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 720, 1560) + '" data-type="menu" class="menu-button"/>');
                $('#menu_parent').append('<img src="./images/phone/back_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 200, 1560) + '" data-type="back" class="sc-menu-button"/>');
                m.drawMap();
            }, 800);
            break;
        case "patreon":
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(730, 585, 167, 651) + ' background:#ccc; padding:' + 15 * g.ratio + 'px; text-align:center;">' +
                "I want to thank <strong>All</strong> my patrons and supporters of this game. " +
                "Without your support this game would not have anywhere near the quality it has!<hr />" +
                "Below are those Patrons that went above an beyond in their support of this game by " +
                "contributing $10 a month to its making! <br />" +
                "<div style='font-size:.8rem; color:#666; margin-bottom:10px;'>Listed in alphabetical order:</div>" +
                "Arothiel<br/>" +
                "Discretlysinful (Aaron M ) <br /> " +
                "John R. (AngryJ)<br />" +
                "Krueschen <br />" +
                "Kylie V. <br/>" +
                "Merchanto<br/>" +
                "Orrin <br/>" +
                "reverseclipse<br/>" +
                "SirGuren (Contributor)<br/>" +
                "WendyJ<br/>" +
                "Wild86willie<br/>" +
                '</div>');
            break;
    }
};

menu.build = function(itemClicked) {
    $('.menu-tab').removeClass('menu-tab-active');
    $('.menu-tab[data-menu=' + itemClicked + ']').addClass('menu-tab-active');
    $('.menu-blockDisplay').hide();
    switch (itemClicked) {
        case "save":
            $('#menu-tab-save').slideDown();
            break;
        case "pref":
            $('#menu-tab-pref').slideDown();
            break;
        case "admin":
            $("#menu-tab-admin").slideDown();
            break;
    }
    
};

menu.makeSaves = function () {
    var tempRoomMap = new Array();
    var tempClothes = new Array();

    $.each(g.roomMap, function (i, v) {
        tempRoomMap.push({
            roomID: v.roomID,
            access: v.access,
            darkAccess: v.darkAccess
        });
    });
    $.each(cl.list, function (i, v) {
        tempClothes.push({
            type: v.type,
            name: v.name,
            inv: v.inv
        });
    });

    g.saveState = {
        savename: "",
        version: g.version,
        pass: g.pass,
        internal: g.internal,
        prevRoom: g.prevRoom,
        g: g.save(),
        inv: inv.save(),
        cl: cl.save(),
        sc: sc.save(),
        pic: pic.save()
    };
};

menu.saveBtn = function(btn) {
    var saveID = btn.data('save');
    var bType = btn.attr('data-type');
    var cookieName = 'HatMP_' + saveID;
    if (bType === 'save') {
        menu.save(cookieName, btn, saveID);
    }
    else { //load game
        chat(-1, 0);
        menu.load(cookieName, btn, saveID);
    }
};

menu.save = function (cookieName, btn, saveID) {
    if (g.saveState !== null) {
        var timeDiff = Math.abs(g.dt.getTime() - g.startDate.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        var thisRoom = "Unknown";
        var saveName;
        $.each(g.rooms, function (i, v) {
            if (v.roomID === g.roomID) {
                thisRoom = v.name;
                return false;
            }
        });

        saveName = "Day: " + diffDays + " - " + thisRoom;

        g.saveState.savename = saveName;
        localStorage[cookieName] = JSON.stringify(g.saveState);

        if (btn !== null) {
            btn.text('LOAD');
            btn.attr('data-type', 'load');
        }

        $('.menu-save-line[data-save=' + saveID + ']').text(saveName);
        $('.menu-del[data-save=' + saveID + ']').prop('disabled', false);
    }
};

g.saveState = {
    savename: "",
    version: g.version,
    pass: g.pass,
    internal: g.internal,
    prevRoom: g.prevRoom,
    g: g.save(),
    inv: inv.save(),
    cl: cl.save(),
    sc: sc.save(),
    pic: pic.save()
};
menu.load = function (cookieName, btn, saveID) {
    if (g.newLoad) {
        $('.room-left').show();
        $('#room_footer').show();
        $(".room-topper").show();
        $('.menu-tab').show();
    }
    g.newLoad = false;

    var tp = JSON.parse(localStorage[cookieName]);
    var i;
    g.pass = tp.pass;
    g.internal = tp.internal;
    g.prevRoom = tp.prevRoom;

    g.load(tp.g);
    inv.load(tp.inv);
    cl.load(tp.cl);
    sc.load(tp.sc);
    try {
        pic.load(tp.pic);
    }
    catch (err) {
        var thisIsfoobar = 1;
    }
    cl.display();
    char.room(g.roomID);
    m.load();
    char.menu();
    $('.hide-start').show();
    $('.menu-button[data-type="close"]').click();
    $('.room-left').show();
    $('#room_footer').show();
    $(".room-topper").show();
    $('.menu-tab').show();
};

menu.saveDel = function(btn) {
    var saveID = btn.data('save');
    var cookieName = 'HatMP_' + saveID;
    if (localStorage.getItem(cookieName) !== null) 
        localStorage.removeItem(cookieName);

    $('.menu-save[data-save=' + saveID + ']').text('SAVE').attr('data-type', 'save');

    $('.menu-save-line[data-save=' + saveID + ']').html("");
    $('.menu-del[data-save=' + saveID + ']').prop('disabled', true);
};

char.init = function() {

    char.menu();
    inv.update("backpack", true, null);
    inv.backpackIcon();
    inv.phoneIcon();

    var btnWidth = 300 * g.ratio;
    var btnHeight = 670 * g.ratio;
    $('.char-container').css({ "width": btnWidth, "height": btnHeight });

    $('.room-left').css({ height: 1080 * g.ratio + "px" });
    $('.char-modBtn').css({
        width: 75 * g.ratio + "px",
        height: 75 * g.ratio + "px"
    });

    $('.hide-start').hide();
};

char.initGame = function () {
    var i;
    cl.init();
    g.pass = g.internal = "";
    g.initGame();
    sc.setMax();
    m.createFmap();

    for (i = 0; i < g.roomMap.length; i++) {
        switch (g.roomMap[i].roomID) {
            case 16:
            case 450:
            case 500:
                g.roomMap[i].access = true;
                g.roomMap[i].darkAccess = true;
                break;
            case 100:
            case 203:
            case 600:
                g.roomMap[i].access = false;
                g.roomMap[i].darkAccess = false;
                break;
            case 400:
            case 550:
            case 650:
            case 910:
                g.roomMap[i].access = true;
                g.roomMap[i].darkAccess = false;
                break;
        }
    }

    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === "panties" && cl.list[i].name === "u" ||
            cl.list[i].type === "panties" && cl.list[i].name === "n" ||
            cl.list[i].type === "pants" && cl.list[i].name === "j" ||
            cl.list[i].type === "shirt" && cl.list[i].name === "g" ||
            cl.list[i].type === "socks" && cl.list[i].name === "w" ||
            cl.list[i].type === "shoes" && cl.list[i].name === "w" ||
            cl.list[i].type === "pj" && cl.list[i].name === "paisley")
            cl.list[i].inv = true;
        else
            cl.list[i].inv = false;
    }
    for (i = 0; i < sc.char.length; i++) {
        sc.char[i].step = 0;
        sc.char[i].rel = 0;
    }

    
};

char.menu = function () {
    $('#room-menu').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 10 * g.ratio + "px",
        "left": 1800 * g.ratio + "px"
    });
    $('#room-numbers').css({
        "width": 325 * g.ratio + "px",
        "height": 50 * g.ratio + "px",
        "top": 10 * g.ratio + "px",
        "left": 400 * g.ratio + "px"
    });
    $('#room-inv').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 10 * g.ratio + "px",
        "left": 1650 * g.ratio + "px"
    });
    $('.resize-text').css({
        "font-size": 1.5 * g.ratio + "rem"
    });
};

char.makeGraph = function () {
    //if ($("#room_left_graph").is(":visible")) {
    var i;
    var energy, maxenergy, oral, cock, anal, sissy, hormone;
    oral = cock = anal = 0;
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "energy":
                energy = g.st[i].t;
                break;
            case "maxenergy":
                maxenergy = g.st[i].t;
                break;
            case "leg":
                $(".rl-bar[data-name='leg']").css({ width: g.st[i].t + "%" });
                break;
            case "legLevel":
                $("#rl_kick").html("Kick: +" + g.st[i].t);
                break;
            case "body":
                $(".rl-bar[data-name='body']").css({ width: g.st[i].t + "%" });
                break;
            case "bodyLevel":
                $("#rl_punch").html("Punch: +" + g.st[i].t);
                break;
            case "d":
                $(".rl-bar[data-name='d']").css({ width: g.st[i].t + "%" });
                break;
            case "dLevel":
                $("#rl_d").html("Defense: +" + g.st[i].t);
                break;
            case "fitness":
                $(".rl-bar[data-name='fitness']").css({ width: g.st[i].t + "%" });
                break;
            case "fitnessLevel":
                $("#rl_fitness").html("Fitness: +" + g.st[i].t);
                break;
            case "giveOralMale":
                oral += g.st[i].t;
                break;
            case "giveOralFemale":
                oral += g.st[i].t;
                break;
            case "giveAnalMale":
                cock += g.st[i].t;
                break;
            case "giveAnalFemale":
                cock += g.st[i].t;
                break;
            case "fuckPussy":
                cock += g.st[i].t;
                break;
            case "receiveAnalMale":
                anal += g.st[i].t;
                break;
            case "receiveAnalFemale":
                anal += g.st[i].t;
                break;
            case "hormone":
                hormone = g.st[i].t;
                $(".rl-bar[data-name='hormone']").css({ width: g.st[i].t + "%" });
                break;
            case "sissy":
                sissy = g.st[i].t;
                $(".rl-bar[data-name='sissy']").css({ width: g.st[i].t + "%" });
                break;
            case "sissyLevel":
                $("#rl_sissy").html("Sissy: " + g.st[i].t);
                break;
        }
    }

    $("#rl_energy").html(" &nbsp;&nbsp;Energy/Max: " + energy + "/" + maxenergy);
    $(".rl-bar[data-name='energy']").css({ width: ((energy / maxenergy) * 100) + "%" });
    console.log(oral)
    $("#rl_oral").html(" &nbsp;&nbsp;Oral: +" + Math.floor(oral / 10));
    $(".rl-bar[data-name='oral']").css({ width: ((oral % 10) * 10) + "%" });
    $("#rl_cock").html(" &nbsp;&nbsp;Sex: +" + Math.floor(cock / 10));
    $(".rl-bar[data-name='cock']").css({ width: ((cock % 10) * 10) + "%" });
    $("#rl_anal").html(" &nbsp;&nbsp;Anal: +" + Math.floor(anal / 10));
    $(".rl-bar[data-name='anal']").css({ width: ((anal % 10) * 10) + "%" });

    if (sissy < 95 && hormone < 75) {
        $("#rl_hormone").html(" &nbsp;&nbsp;Take your pills");
        $("#rl_sis").html(" &nbsp;&nbsp;Serve More");
    }
    else if (sissy < 95) {
        $("#rl_hormone").html(" &nbsp;&nbsp;Feminine");
        $("#rl_sis").html(" &nbsp;&nbsp;Serve More");
    }
    else if (hormone < 75) {
        $("#rl_hormone").html(" &nbsp;&nbsp;Take your pills");
        $("#rl_sis").html(" &nbsp;&nbsp;You Slut!");
    }
    else {
        $("#rl_hormone").html(" &nbsp;&nbsp;Transformation Possible");
        $("#rl_sis").html(" &nbsp;&nbsp;Transformation Possible");
    }

};

char.export = function (saveID) {
    var cookieName = 'HatMP_' + saveID;
    var tp = localStorage[cookieName];
    $("#room_export").slideDown();
    $('#room_export_load').hide();
    $("#room_export_data").val(tp);
    $('#room-export-text').show();
    $('#room-import-text').hide();
};

char.import = function () {
    var tp = JSON.parse($("#room_export_data").val().trim());
    $('.room-left').show();
    $('#room_footer').show();
    $(".room-topper").show();
    $('.menu-tab').show();
    var i;
    g.pass = tp.pass;
    g.internal = tp.internal;
    g.prevRoom = tp.prevRoom;

    g.load(tp.g);
    inv.load(tp.inv);
    cl.load(tp.cl);
    sc.load(tp.sc);
    try {
        pic.load(tp.pic);
    }
    catch (err) {
        var thisIsfoobar = 1;
    }
    cl.display();
    char.room(g.roomID);
    m.load();
    char.menu();
    $('.hide-start').show();
    $('.menu-button[data-type="close"]').click();

    $("#room_export").slideUp();
};