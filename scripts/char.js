var char = {};
var menu = {};
//char.clothesholder = null;

$(document).ready(function () {

    nav.setRatio();
    nav.buildRoom();
    cl.display();

    //$('#ohShitIFoundABug').click(function () {
    //    char.room(0);
    //    $('.menu-close').click();
    //});
    $('#room_footer').on('click', '.room-changeRoomBtn', function () {
        char.room(parseInt($(this).data('roomid')));
    });

    $('#room-buttons').on('click', '.rom-event', function () {
        var name = $(this).data('name');
        var roomID = parseInt($(this).data('room'));
        window[g.room(roomID)]["btnclick"](name);
    });

    $('#room_closeVideo').click(function () {
        nav.killvideo();
    });

    $('.help-history').click(function () {
        console.log(g.pastSaves.length);
        g.pastSaves.splice(g.pastSaves.length - 1, 1);
        privateChat.kill();
        clearTimeout(g.roomTimeout);
        clearTimeout(g.roomTimeout2);
        char.import(g.pastSaves[g.pastSaves.length - 1].data);
        g.pastSaves.splice(g.pastSaves.length - 1, 1);
        char.makeWalk();
    });

    $(window).on('resize', function () {
        char.resizewindow();
    });

    char.resizewindow = function () {
        let ogRatio = g.ratio === 0 ? .0001 : g.ratio;
        g.setRatio();
        var gameWidth = 1920 * g.ratio;
        var gameHeight = 1080 * g.ratio;
        let w, h, t, l, f;
        cl.display();
        $('#room-background').find('img').css({ "width": gameWidth + "px", "height": gameHeight + "px" });
        $('#room-buttons').find('img').each(function () {
            w = $(this).css("width").replace('px', '') / ogRatio;
            h = $(this).css("height").replace('px', '') / ogRatio;
            t = $(this).css("top").replace('px', '') / ogRatio;
            l = $(this).css("left").replace('px', '') / ogRatio;
            $(this).css({
                "width": (w * g.ratio) + "px",
                "height": (h * g.ratio) + "px",
                "top": (t * g.ratio) + "px",
                "left": (l * g.ratio) + "px"
            });
        });

        $(".resize").each(function () {
            w = $(this).css("width").replace('px', '') / ogRatio;
            h = $(this).css("height").replace('px', '') / ogRatio;
            t = $(this).css("top").replace('px', '') / ogRatio;
            l = $(this).css("left").replace('px', '') / ogRatio;
            $(this).css({
                "width": (w * g.ratio) + "px",
                "height": (h * g.ratio) + "px",
                "top": (t * g.ratio) + "px",
                "left": (l * g.ratio) + "px"
            });
        });

        $(".resize-font").each(function () {
            w = $(this).css("width").replace('px', '') / ogRatio;
            h = $(this).css("height").replace('px', '') / ogRatio;
            t = $(this).css("top").replace('px', '') / ogRatio;
            l = $(this).css("left").replace('px', '') / ogRatio;
            f = $(this).css("font-size").replace('px', '') / ogRatio;
            $(this).css({
                //"width": (w * g.ratio) + "px",
                //"height": (h * g.ratio) + "px",
                "top": (t * g.ratio) + "px",
                "left": (l * g.ratio) + "px",
                "font-size": (f * g.ratio) + "px"
            });
        });

        $('.room-left').css({ "height": 1050 * g.ratio + "px", "top": (30 * g.ratio) + "px" });

        $('.char-container').css({ "height": 670 * g.ratio + "px" });
        $('.glob-bg').css({ "height": 1080 * g.ratio + "px" });

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
        $(".rl-change[data-type='walk']").css({
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
        $(".char-30").css({
            "font-size": 30 * g.ratio + "px"
        });
        $(".mt-10").css({
            "margin-top": 20 * g.ratio + "px"
        });
        $(".mt-60").css({
            "margin-top": 60 * g.ratio + "px"
        });
        $(".resize-height").css({
            height: 12 * g.ratio + "px"
        });
        $("#room_chatskip").css({
            "height": (54 * g.ratio) + "px",
            "width": (72 * g.ratio) + "px"
        });
        $(".mt-300x").css({ "margin-top": (400 * g.ratio) + "px" });
        $(".mt-50x").css({ "margin-top": (50 * g.ratio) + "px" });
        $(".menu-box").css({ "width": (300 * g.ratio) + "px", "height": (90 * g.ratio) + "px", "margin-top": (15 * g.ratio) + "px" });
        $(".menu-box-img").css({ "width": (296 * g.ratio) + "px", "height": (90 * g.ratio) + "px" });
        $("#help_backButton").css({"width": (200 * g.ratio) + "px", "height": (66.6 * g.ratio) + "px", "top": (75 * g.ratio) + "px", "left": (30 * g.ratio) + "px" });
        char.menu();
    };

    $("#menu_parent").on('click', '.menu-button', function () {
        menu.mClick($(this).data('type'));
    });

    $('#room-menu').click(function () {
        phone.build();
    }).on('auxclick',function (e) {
        if (e?.which === 2) { // mouse-middle-click
            phone.build("save");
        }
    });

    $("#room_export_load").click(function () {
        char.import(null);
    });

    $("#room_export_load_file").click(function () {
        char.file_import();
    });

    $("#room_export_file").click(function () {
        char.file_export($("#room_export_file").data('saveID'));
    });

    $("#room_export_hide").click(function () {
        $("#room_export").slideUp();
    });

    $('.char-modBtn').click(function () {
        var td = $(this).data('t');
        if (td === "a") {
            if (g.cockDisplay === "a")
                g.cockDisplay = "c";
            else
                g.cockDisplay = "a";
            cl.cockDisplay();
        }
        else {
            g.tview = $(this).data("t");
            cl.display();
        }
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
    $(".rl-change[data-type='walk']").css({
        left: 225 * g.ratio + "px",
        top: "0px",
        width: 75 * g.ratio + "px",
        height: 50 * g.ratio + "px"
    });
    $(".left-menu").css({
        width: 300 * g.ratio + "px",
    }).hide();
    $(".rl-change").click(function () {
        char.changeMenu($(this).data("type"), true, false);
    });
    $(".char-12").css({
        "font-size": 12 * g.ratio + "px"
    });
    $(".char-20").css({
        "font-size": 20 * g.ratio + "px"
    });
    $(".mt-10").css({
        "margin-top": 20 * g.ratio + "px"
    });
    $(".mt-60").css({
        "margin-top": 60 * g.ratio + "px"
    });
    $(".resize-height").css({
        height: 4 * g.ratio + "px"
    });
    $(".mt-300x").css({ "margin-top": (400 * g.ratio) + "px" });
    $(".mt-50x").css({ "margin-top": (50 * g.ratio) + "px" });
    $("#room-change").click(function () {
        g.pass = g.roomID;
        char.room(8);
    });
    $("#room_left_walk_sub").css({
        height: 1000 * g.ratio + "px"
    });
    $("#room-time").click(function () {
        phone.build("time");
        //$("#room-menu").click();
        //menu.mClick("time");

    });
    $("#rl_pageSelect").children("button").click(function () {
        g.statpage = $(this).data("number");
        $(".rl-selectButton-active").removeClass("rl-selectButton-active");
        $(this).addClass("rl-selectButton-active");
        sstat.makeGraph();
    });

    $(".menu-box").css({ "width": (290 * g.ratio) + "px", "height": (88 * g.ratio) + "px", "margin-top": (15 * g.ratio) + "px" });
    $(".menu-box-img").css({ "width": (290 * g.ratio) + "px", "height": (88 * g.ratio) + "px" });
    $('.rl-bar').css({ "height": (15 * g.ratio) + "px" });
    $('.left-graph-char-bar').css({ "height": (15 * g.ratio) + "px" });
    char.init();
    char.resizewindow();
});

char.changeMenu = function (menu, update, override) {
    if (update)
        g.prevview = menu;
    $("#help_backButton").hide();
    switch (menu) {
        case "body":
            if (override)
                $("#room_left_char").show();
            else
                $("#room_left_char").is(":visible") ? $("#room_left_char").hide() : $("#room_left_char").show();
            $("#room_left_map").hide();
            $("#room_left_graph").hide();
            $("#room_left_walk").hide();
            break;
        case "map":
            $("#room_left_char").hide();
            if (override)
                $("#room_left_map").show();
            else
                $("#room_left_map").is(":visible") ? $("#room_left_map").hide() : $("#room_left_map").show();
            $("#room_left_graph").hide();
            $("#room_left_walk").hide();
            char.map();
            break;
        case "graph":
            $("#room_left_char").hide();
            $("#room_left_map").hide();
            if (override)
                $("#room_left_graph").show();
            else
                $("#room_left_graph").is(":visible") ? $("#room_left_graph").hide() : $("#room_left_graph").show();
            $("#room_left_walk").hide();
            sstat.makeGraph();
            break;
        case "walk":
            $("#room_left_char").hide();
            $("#room_left_map").hide();
            $("#room_left_graph").hide();
            if (override) {
                $("#room_left_walk").show();
            }
            else
                $("#room_left_walk").is(":visible") ? $("#room_left_walk").hide() : $("#room_left_walk").show();
            char.makeWalk();
            break;
        case "hide":
            $("#room_left_char").hide();
            $("#room_left_map").hide();
            $("#room_left_graph").hide();
            $("#room_left_walk").hide();
            break;
        default:
            console.log("invalid menu: " + menu);
            break;
    }
};

char.addtime = function (minutes) {
    g.dt = char.addMinutes(g.dt, minutes);
    nav.buildclock();
};

char.nexttime = function (hour) {
    if (g.dt.getHours() > hour)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), hour, 0, 0, 0);
    nav.buildclock();
};

char.map = function () {
    var exRoom = [226, 227, 475];
    var i, j;
    let cArray = new Array();
    let ttop = 100;

    if (g.roomID > 3 && g.roomID < 50) {
        $('#room_left_map').html('');
        cArray.push({ t: sc.getTimeline("lola"), c: sc.n("lola") });
        cArray.push({ t: sc.getTimeline("eva"), c: sc.n("eva") });
        cArray.push({ t: sc.getTimeline("landlord"), c: sc.n("landlord") });
        cArray.push({ t: sc.getTimeline("bigguy"), c: sc.n("bigguy") });
    }
    else if ((g.roomID > 49 && g.roomID < 75) || (g.roomID > 649 && g.roomID < 675)) {
        cArray.push({ t: sc.getTimeline("tiffany"), c: sc.n("tiffany") });
        cArray.push({ t: sc.getTimeline("candy"), c: sc.n("candy") });
    }
    else if (g.roomID > 499 && g.roomID < 550) {
        cArray.push({ t: sc.getTimeline("zoey"), c: sc.n("zoey") });
    }
    else if (g.roomID > 799 && g.roomID < 810) {
        cArray.push({ t: sc.getTimeline("ralph"), c: sc.n("ralph") });
        cArray.push({ t: sc.getTimeline("ralphsmom"), c: sc.n("ralphsmom") });
        cArray.push({ t: sc.getTimeline("ralphsdad"), c: sc.n("ralphsdad") });
    }
    else if (g.roomID > 899 && g.roomID < 905) {
        cArray.push({ t: sc.getTimeline("cindy"), c: sc.n("cindy") });
        cArray.push({ t: sc.getTimeline("tim"), c: sc.n("tim") });
    }
    else if (g.roomID > 74 && g.roomID < 80) {
        cArray.push({ t: sc.getTimeline("bimbo"), c: sc.n("bimbo") });
    }
    else if (g.roomID === 451 || g.roomID === 203) {
        cArray.push({ t: sc.getTimeline("cecilia"), c: sc.n("cecilia") });
    }

    if (cArray.length > 0) {
        var ampm = gv.get("clock24") === "12";
        $('#room_left_map').html('');
        for (i = 0; i < cArray.length; i++) {
            ttop += 20;
            $('#room_left_map').append('<div class="width-l resize-font killmap" style="color: #fff; position:absolute; font-size: ' + 20 * g.ratio + 'px; left: ' + 10 * g.ratio + 'px; top: ' + (ttop + 5) * g.ratio + 'px; " >' +
                cArray[i].c +
                '</div>');
            ttop += 30;
            for (j = 0; j < cArray[i].t.subList.length; j++) {
                if (cArray[i].t.subList[j].current) {
                    $('#room_left_map').append('<div class="width-l resize-font killmap" style="color: #fdd; position:absolute; font-size: ' + 20 * g.ratio + 'px; left: ' + 15 * g.ratio + 'px; top: ' + (ttop + 5) * g.ratio + 'px; " >' +
                        char.friendlyTime(cArray[i].t.subList[j].hstart, ampm) + " to " +
                        char.friendlyTime(cArray[i].t.subList[j].hend, ampm) + " - " +
                        cArray[i].t.subList[j].room + " *" +
                        '</div>');
                }
                else {
                    $('#room_left_map').append('<div class="width-l resize-font killmap" style="color: #ccc; position:absolute; font-size: ' + 20 * g.ratio + 'px; left: ' + 15 * g.ratio + 'px; top: ' + (ttop + 5) * g.ratio + 'px; " >' +
                        char.friendlyTime(cArray[i].t.subList[j].hstart, ampm) + " - " +
                        char.friendlyTime(cArray[i].t.subList[j].hend, ampm) + " - " +
                        cArray[i].t.subList[j].room +
                        '</div>');
                }
                ttop += 25;
            }
        }
    }
    else {
        if (!(exRoom.includes(g.roomID))) {
            var tm = gv.get("map");
            $('#room_left_map').html('');
            for (i = 0; i < g.roomMap.length; i++) {
                if (g.roomMap[i].map === tm) {
                    var newRatio = 45 / g.roomMap[i].height;
                    var dayNight = g.roomMap[i].access ? '<img src="./images/general/day.png" class="resize" style="position:absolute; ' + g.makeCss(16, 16, ttop + 5, 260) + '"/>' : '';
                    dayNight += g.roomMap[i].darkAccess ? '<img src="./images/general/night.png" class="resize" style="position:absolute; ' + g.makeCss(16, 16, ttop + 5, 280) + '"/>' : '';
                    $('#room_left_map').append('<img src="./images/room/' + g.roomMap[i].img + '" class="width-l resize killmap" style="position:absolute; ' + g.makeCss(g.roomMap[i].height * newRatio, g.roomMap[i].width * newRatio, ttop, 10) + '" />');
                    $('#room_left_map').append(dayNight);
                    $('#room_left_map').append('<div class="width-l resize-font killmap" style="color: #fff; position:absolute; font-size: ' + 20 * g.ratio + 'px; left: ' + 100 * g.ratio + 'px; top: ' + (ttop + 5) * g.ratio + 'px; " >' + g.roomMap[i].display + '</div>');
                    ttop += 50;
                }
            }
        }
    }
};

char.friendlyTime = function (hour, ampm = null) {
    if (ampm === null)
        ampm = gv.get("clock24") === "12";
    
    if (ampm) {
        if (hour === 0)
            return "12AM";
        if (hour < 12)
            return hour + "AM";
        if(hour === 12)
            return hour + "PM";
        return (hour - 12) + "PM";
    }
    return hour.toString();
};

char.makeWalk = function () {
    $("#room_left_walk_sub").html("'<br/><br/>");
    if (g.pastSaves.length > 1) {
        $("#room_left_walk_sub").append('<div class="resize-font"><br/><br/><br/><br/>Go back a room to: ' + g.pastSaves[g.pastSaves.length - 2].name + '</div>');
        if ($("#room_left_walk").is(":visible")) {
            $("#help_backButton").show();
        }
    }
    else {
        $("#room_left_walk_sub").append('<div class="resize-font" style="font-size: ' + 20 * g.ratio + 'px"><br/><br/><br/><br/></div>');
        $("#help_backButton").hide();
    }
    $("#room_left_walk_sub").append('<div class="resize-font" style="font-size: ' + 30 * g.ratio + 'px;"><br/>Popup History:</div>');
    if (g.popArray.length === 0) {
        $("#room_left_walk_sub").append('<div class="popUpHistory resize-font" style="font-size: ' + 20 * g.ratio + 'px">None</div>');
    }
    for (let i = 0; i < g.popArray.length; i++) {
        $("#room_left_walk_sub").append('<div class="popUpHistory resize-font" style="font-size: ' + 20 * g.ratio + 'px">' + g.popArray[i] + '</div>');
    }
};

char.newdayfake = function () {
    if (g.dt.getHours() > 6)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);

    room28.future();
    daily.newday();
    nav.buildclock();
    cl.hairgrowth();
    gv.set("energy", 10);
    gv.mod('hormone', -2);
    cl.energydisplay();
    gv.mod("arousal", 20);
    cl.cockDisplay();
};

char.settime = function (newTimeHour, newTimeMinute) {
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), newTimeHour, newTimeMinute, 0, 0);
    nav.buildclock();
};

char.getDaysPlayed = function () {
    var timeDiff = Math.abs(g.dt.getTime() - g.startDate.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

//char.greeting = function () {
//    var thisHour = g.dt.getHours;
//    if (thisHour < 12)
//        return "morning";
//    else if (thisHour < 6)
//        return "afternoon";
//    else
//        return "evening";
//};

//char.saveclothes = function (saveClothes, loadClothes, removeAll) {
//    if (saveClothes) {
//        char.clothesholder = {
//            shoes: cl.c.shoes,
//            socks: cl.c.socks,
//            pants: cl.c.pants,
//            panties: cl.c.panties,
//            bra: cl.c.bra,
//            shirt: cl.c.shirt,
//            dress: cl.c.dress,
//            buttplug: cl.c.buttplug,
//            accessories: cl.c.accessories
//        };
//    }
//    if (loadClothes) {
//        if (char.clothesholder !== null) {
//            cl.c.shoes = char.clothesholder.shoes;
//            cl.c.socks = char.clothesholder.socks;
//            cl.c.pants = char.clothesholder.pants;
//            cl.c.panties = char.clothesholder.panties;
//            cl.c.bra = char.clothesholder.bra;
//            cl.c.shirt = char.clothesholder.shirt;
//            cl.c.dress = char.clothesholder.dress;
//            cl.c.buttplug = char.clothesholder.buttplug;
//            cl.c.accessories = char.clothesholder.accessories;
//            cl.display();
//        }
//    }
//    if (removeAll) {
//        cl.c.shoes = null;
//        cl.c.socks = null;
//        cl.c.pants = null;
//        cl.c.panties = null;
//        cl.c.bra = null;
//        cl.c.shirt = null;
//        cl.c.dress = null;
//        cl.c.buttplug = null;
//        cl.c.accessories = null;
//        cl.display();
//    }
//};

char.room = function (roomID) {
    if (g.roomChange.includes(roomID) && roomID !== g.roomID)
        cl.cTemp = $.extend(true, {}, cl.c);

    if (!$('#room_footer').is(":visible"))
        $('#room_footer').show();
    if ($('#room-menuButtons').is(":visible"))
        inv.close();
    let ignoreShoeRooms = [8, 28];
    if (g.prevRoom !== roomID && !ignoreShoeRooms.includes(roomID)) {
        let shoedaring = cl.getEntry("shoes", cl.c.shoes).daring;
        let actualshoeLevel = levels.get("heels").l;
        let shoeLevel = Math.round(actualshoeLevel / 2);
        if (shoedaring > 1 && actualshoeLevel < 8) {
            if (shoeLevel < shoedaring) {
                let energyLoss = (shoeLevel - shoedaring) * 3;
                if (gv.get("energy") > 0) {
                    gv.mod("energy", energyLoss);
                    g.popUpNoticeBottom("The heels hurt your feet");
                }
            }
            levels.mod("heels", shoedaring * 3);
        }
    }
    g.prevRoom = g.roomID;
    g.internal = null;

    g.roomID = roomID;
    g.dt = char.addMinutes(g.dt, 2);
    menu.makeSaves();
    nav.buildRoom();
    cl.cockDisplay();
    cl.energydisplay();
    if ($('#room_left_map').is(":visible"))
        char.map();
    else if ($("#room_left_walk_sub").is(":visible")) {
        char.makeWalk();
    }
    if (g.prevRoom === 0 || g.prevRoom === 28){
        if (g.prevview !== null)
            char.changeMenu(g.prevview, false, true);
    }
    else if(!(g.roomID === 0 || g.roomID === 28))
        g.prevview = $("#room_left_char").is(":visible") ? "body" : ($("#room_left_map").is(":visible") ? "map" : ($("#room_left_graph").is(":visible") ? "graph" : "hide"));

    if (g.roomChange.includes(g.roomID)) 
        $("#room-change").show();
    else if (g.roomID === 354) {
        if (sc.getMissionTask("landlord", "spermbank", 2).complete)
            $("#room-change").show();
        else
            $("#room-change").hide();
    }
    else 
        $("#room-change").hide();


    if (g.passtime.includes(g.roomID))
        $("#room-time").show();
    else
        $("#room-time").hide();

    phone.clear(true);
};

char.addMinutes = function (date, minutes) {
    return new Date(date.getTime() + (minutes * 60000));
};

char.addDays = function (days) {
    g.dt.setDate(g.dt.getDate() + days);
    nav.buildclock();
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
        saveDt: new Date(),
        version: g.version,
        pass: g.pass,
        internal: g.internal,
        prevRoom: g.prevRoom,
        g: g.save(),
        inv: inv.save(),
        cl: cl.save(),
        sc: sc.save(),
        scc: scc.save(),
        pic: pic.save(),
        gv: gv.save(),
        missy: missy.save()
    };
    g.pastSaves.push({ name: g.getRooms(g.roomID).name, data: menu.save(" ", false) });
    if (g.pastSaves.length > 20)
        g.pastSaves.splice(0, 1);
};

menu.saveBtn = function(btn) {
    var saveID = btn.data('save');
    var bType = btn.attr('data-type');
    var cookieName = 'HatMP_' + saveID;
    if (bType === 'save') {
        menu.save(cookieName, true);
    }
    else { //load game
        chat(-1, 0);
        menu.load(cookieName, btn, saveID);
    }
};

menu.save = function (cookieName, saveToCookie) {

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

        saveName = "Day: " + diffDays + ", " + thisRoom + " [Created:" + new Date().toISOString().split('T')[0] + "]";

        g.saveState.savename = saveName;
        if (saveToCookie) {
            localStorage[cookieName] = JSON.stringify(g.saveState);
            return true;
        }
        else {
            return JSON.stringify(g.saveState);
        }
    }
};

menu.load = function (cookieName, btn, saveID) {
    fame.moanAnimateStop();
    if (g.newLoad) {
        $('.room-left').show();
        $('#room_footer').show();
        $(".room-topper").show();
        $('.menu-tab').show();
    }
    g.newLoad = false;

    var tp = JSON.parse(localStorage[cookieName]);
    var i;
    let saveVersion = tp.version;
    g.pass = tp.pass;
    g.internal = tp.internal;
    g.prevRoom = tp.prevRoom;
    
    g.load(tp.g);
    inv.load(tp.inv);
    cl.load(tp.cl);
    sc.load(tp.sc);
    scc.load(tp.scc);
    gv.load(tp.gv, saveVersion);
    missy.load(tp.missy);
    
    try {
        pic.load(tp.pic);
    }
    catch (err) {
        console.log(err);
    }
    char.map();
    cl.display();
    char.room(g.roomID);
    char.menu();
    $('.hide-start').show();
    if (g.roomID === 328) {
        $("#room-inv").hide();
    }
    $('.menu-button[data-type="close"]').click();
    $('.room-left').show();
    $('#room_footer').show();
    $(".room-topper").show();
    $('.menu-tab').show();
    if (g.roomChange.includes(g.roomID)) 
        $("#room-change").show();
    else 
        $("#room-change").hide();

    if (g.passtime.includes(g.roomID))
        $("#room-time").show();
    else
        $("#room-time").hide();

    if (tp.version < 22) {
        sissy.st[7].ach = false;
        sissy.st[8].ach = false;
    }
    $(".rl-change").show();
    g.pastSaves = new Array();
};

menu.saveDel = function (cookieName) {
    if (localStorage.getItem(cookieName) !== null) 
        localStorage.removeItem(cookieName);
    return true;
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

    cl.wearSavedOutfit(5);

    for (i = 0; i < sc.char.length; i++) {
        sc.char[i].step = 0;
        sc.char[i].rel = 0;
    }

    
};

char.menu = function () {
    $('#room-menu').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 30 * g.ratio + "px",
        "left": 1800 * g.ratio + "px"
    });
    $('#room-numbers').css({
        "width": 370 * g.ratio + "px",
        "top": 0 * g.ratio + "px",
        "left": 1550 * g.ratio + "px"
    });
    $(".char-clock-dow").css({
        "margin-right": 20 * g.ratio + "px"
    });
    //    "height": 50 * g.ratio + "px",
    //    "top": 10 * g.ratio + "px",
    //    "left": 400 * g.ratio + "px"
    //});
    $('#room-inv').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 30 * g.ratio + "px",
        "left": 1650 * g.ratio + "px"
    });
    $('#room-change').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 30 * g.ratio + "px",
        "left": 1500 * g.ratio + "px"
    });
    $('#room-time').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 30 * g.ratio + "px",
        "left": 1350 * g.ratio + "px"
    });
    $('.resize-text').css({
        "font-size": 1.5 * g.ratio + "rem"
    });
};



char.export = function (saveID) {
    var cookieName = 'HatMP_' + saveID;
    var tp = localStorage[cookieName];
    $("#room_export").slideDown();
    $('#room_export_load').hide();
    $('#room_export_load_file').hide();
    $('#room_export_file').show();
    $('#room_export_file').data('saveID', saveID);
    $("#room_export_data").val(tp);
    $('#room-export-text').show();
    $('#room-import-text').hide();
};

char.import = function (importData) {
    var tp;
    if (importData === null)
        tp = JSON.parse($("#room_export_data").val().trim());
    else
        tp = JSON.parse(importData);

    g.newLoad = false;
    $('.room-left').show();
    $('#room_footer').show();
    $(".room-topper").show();
    $('.menu-tab').show();
    console.log("v: " + tp.version);
    g.pass = tp.pass;
    g.internal = tp.internal;
    g.prevRoom = tp.prevRoom;
    let saveVersion = tp.version;

    g.load(tp.g);
    inv.load(tp.inv);
    cl.load(tp.cl);
    sc.load(tp.sc);
    gv.load(tp.gv, saveVersion);
    missy.load(tp.missy);
    try {
        pic.load(tp.pic);
    }
    catch (err) {
        console.log(err);
    }
    cl.display();
    char.room(g.roomID);
    char.menu();

    if (tp.version < 22) {
        sissy.st[7].ach = false;
        sissy.st[8].ach = false;
    }

    $('.hide-start').show();
    $('.menu-button[data-type="close"]').click();

    $("#room_export").slideUp();
    $(".rl-change").show();
};

char.file_export = function (saveID) {
    function pad2(num) {
      return num < 10 ? ('0' + num) : num;
    }
    // Create a file url using the save content
    const cookieName = 'HatMP_' + saveID;
    const tp = localStorage[cookieName];
    const blob = new Blob([tp], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    // Add a link to the file url and click on it for user to download it
    const now = new Date();
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // Generate file name
    a.download = 'HatMP_'
            + `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}T`
            + `${pad2(now.getHours())}${pad2(now.getMinutes())}${pad2(now.getSeconds())}`
            + '.save';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
};

char.file_import = function () {
    // Create a file input and click on it for user to select the save file
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.save,.txt';
    input.style.display = 'none';
    input.id = 'file_import_input';

    input.addEventListener('change', () => {
        document.body.removeChild(input);
        // Read the save file content and load it
        const reader = new FileReader();

        reader.onload = function() {
            $("#room_export_data").val(reader.result);
            char.import(null);
        };

        reader.onerror = function() {
            console.error(reader.error);
        };

        reader.readAsText(input.files[0]);
    });

    // Remove old file inputs in case user clicked the Cancel button
    $('#file_import_input').remove();

    document.body.appendChild(input);
    input.click();
};