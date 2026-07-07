var char = {};
var menu = {};
//char.clothesholder = null;

char.isTypingTarget = function (target) {
    if (!target)
        return false;

    var tagName = target.tagName ? target.tagName.toLowerCase() : "";
    return tagName === "input" || tagName === "textarea" || tagName === "select" || target.isContentEditable;
};

char.toggleMainInventoryHotkey = function () {
    if (!$("#room-inv").is(":visible"))
        return false;

    if (inv.isOpen) {
        inv.close();
        return true;
    }

    return inv.openMain();
};

char.getVisibleAdvanceRoomButtons = function (selector) {
    var buttons = $('#room-buttons .rom-event:visible').filter(function () {
        var name = $(this).data('name');
        return name !== "zzzNOOPzzzIgnore";
    });

    if (selector)
        buttons = buttons.filter(selector);

    return buttons;
};

char.getSingleSharedActionButton = function (buttons) {
    if (buttons.length === 1)
        return buttons.eq(0);
    if (buttons.length === 0)
        return null;

    var firstName = buttons.eq(0).data('name');
    var firstRoom = buttons.eq(0).data('room');
    var isSingleAction = true;

    buttons.each(function () {
        if ($(this).data('name') !== firstName || $(this).data('room') !== firstRoom) {
            isSingleAction = false;
            return false;
        }
    });

    return isSingleAction ? buttons.eq(0) : null;
};

char.isLegacySpaceAdvanceButton = function (button) {
    var $button = $(button);
    var name = ($button.data('name') || "").toString().toLowerCase();
    var image = ($button.attr('src') || "").toString().toLowerCase();

    if (name.indexOf("cancel") !== -1 || name.indexOf("back") !== -1 || name.indexOf("exit") !== -1)
        return true;

    return image.indexOf("/next.png") !== -1 ||
        image.indexOf("/back.png") !== -1 ||
        image.indexOf("/cancel.png") !== -1 ||
        image.indexOf("/close.png") !== -1 ||
        image.indexOf("/up.png") !== -1 ||
        image.indexOf("/down.png") !== -1;
};

char.getSingleAdvanceRoomButton = function () {
    var explicitAdvanceButtons = char.getVisibleAdvanceRoomButtons('[data-space-advance="true"]');
    var explicitButton = char.getSingleSharedActionButton(explicitAdvanceButtons);
    if (explicitButton !== null)
        return explicitButton;

    var legacyAdvanceButtons = char.getVisibleAdvanceRoomButtons().filter(function () {
        return char.isLegacySpaceAdvanceButton(this);
    });

    return char.getSingleSharedActionButton(legacyAdvanceButtons);
};

char.triggerSpaceAdvanceHotkey = function () {
    if ($('.room-nativeChoice:visible').length > 0)
        return false;

    var button = char.getSingleAdvanceRoomButton();
    if (button === null)
        return false;

    button.click();
    return true;
};

char.roomWithoutHistory = function (roomID) {
    g.skipNextRoomSave = true;
    char.room(roomID);
};

$(document).ready(function () {

    nav.setRatio();
    nav.buildRoom();
    //cl.display();

    //$('#ohShitIFoundABug').click(function () {
    //    char.room(0);
    //    $('.menu-close').click();
    //});
    $('#room_footer').on('click', '.room-changeRoomBtn', function () {
        var targetRoomID = parseInt($(this).data('roomid'));
        if (g.roomID === 401 && typeof room401 !== "undefined")
            room401.restoreExitState(targetRoomID);
        char.room(targetRoomID);
    });

    $('#room-buttons').on('click', '.rom-event', function () {
        var name = $(this).data('name');
        var roomID = parseInt($(this).data('room'));
        invoker.invoke(roomID, "btnclick", name);
    });

    $('#room_closeVideo').click(function () {
        nav.killvideo();
    });

    $('.help-history').click(function () {
        if (g.roomID === 955)
            g.pastSaves.splice(g.pastSaves.length - 2, 2);
        else
            g.pastSaves.splice(g.pastSaves.length - 1, 1);
        privateChat.kill();
        nav.clearRoomTimeouts();
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
        cl.display();
        $('#room-background').find('img').css({ "width": gameWidth + "px", "height": gameHeight + "px" });
        char.rescaleRoomImages($('#room-buttons').find('img'), ogRatio);
        char.rescalePositionedElements($(".resize"), ogRatio);
        char.rescaleFontElements($(".resize-font"), ogRatio);

        $('.room-left').css({ "height": 1050 * g.ratio + "px", "top": (30 * g.ratio) + "px" });

        $('.char-container').css({ "height": 670 * g.ratio + "px" });
        $('.glob-bg').css({ "height": 1080 * g.ratio + "px" });

        $('.char-modBtn').css({
            width: 75 * g.ratio + "px",
            height: 75 * g.ratio + "px"
        });
        $(".char-30").css({
            "font-size": 30 * g.ratio + "px"
        });
        char.applyScaledShellStyles({
            leftMenuWidth: 300,
            menuBoxWidth: 300,
            menuBoxHeight: 90,
            menuBoxImgWidth: 296,
            menuBoxImgHeight: 90,
            resizeHeight: 12
        });
        $("#room_chatskip").css({
            "height": (54 * g.ratio) + "px",
            "width": (72 * g.ratio) + "px"
        });
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
        char.hideExportDialog();
    });

    $(document).bind('keyup', function (e) {
        if (e.which !== 73 || e.altKey || e.ctrlKey || e.metaKey)
            return;
        if (char.isTypingTarget(e.target))
            return;
        if ($('#room_export').is(":visible"))
            return;
        if ($('#room_chatOverlay').is(":visible"))
            return;

        if (char.toggleMainInventoryHotkey())
            e.preventDefault();
    });

    $(document).bind('keyup', function (e) {
        if (e.which !== 32 || e.altKey || e.ctrlKey || e.metaKey)
            return;
        if (char.isTypingTarget(e.target))
            return;
        if (g.suppressSpaceAdvanceKeyup) {
            g.suppressSpaceAdvanceKeyup = false;
            e.preventDefault();
            return;
        }
        if ($('#room_export').is(":visible"))
            return;
        if ($('#room_chatOverlay').is(":visible"))
            return;
        if ($('#room-menuButtons').is(":visible"))
            return;

        if (char.triggerSpaceAdvanceHotkey())
            e.preventDefault();
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
    char.applyScaledShellStyles({
        leftMenuWidth: 300,
        menuBoxWidth: 290,
        menuBoxHeight: 88,
        menuBoxImgWidth: 290,
        menuBoxImgHeight: 88,
        resizeHeight: 4,
        graphBarHeight: 15,
        hideLeftMenu: true,
        walkSubHeight: 1000
    });
    $(".rl-change").click(function () {
        char.changeMenu($(this).data("type"), true, false);
    });
    $("#room-change").click(function () {
        g.pass = g.roomID;
        char.room(8);
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

    $('.rl-bar').css({ "height": (15 * g.ratio) + "px" });
    char.init();
    char.resizewindow();
});

char.changeMenu = function (menu, update, override) {
    if (update)
        g.prevview = menu;
    $("#help_backButton").hide();
    switch (menu) {
        case "body":
            char.setMenuPanel("body", override);
            break;
        case "map":
            char.setMenuPanel("map", override);
            char.map();
            break;
        case "graph":
            char.setMenuPanel("graph", override);
            sstat.makeGraph();
            break;
        case "walk":
            char.setMenuPanel("walk", override);
            char.makeWalk();
            break;
        case "hide":
            char.hideMenuPanels();
            break;
        default:
            console.log("invalid menu: " + menu);
            break;
    }
};

char.showGameShell = function () {
    $('.room-left').show();
    $('#room_footer').show();
    $(".room-topper").show();
    $('.menu-tab').show();
};

char.rescaleRoomImages = function (elements, originalRatio) {
    elements.each(function () {
        const width = $(this).css("width").replace('px', '') / originalRatio;
        const height = $(this).css("height").replace('px', '') / originalRatio;
        const top = $(this).css("top").replace('px', '') / originalRatio;
        const left = $(this).css("left").replace('px', '') / originalRatio;
        $(this).css({
            "width": (width * g.ratio) + "px",
            "height": (height * g.ratio) + "px",
            "top": (top * g.ratio) + "px",
            "left": (left * g.ratio) + "px"
        });
    });
};

char.rescalePositionedElements = function (elements, originalRatio) {
    elements.each(function () {
        const css = {};
        const width = $(this).css("width");
        const height = $(this).css("height");
        const top = $(this).css("top");
        const left = $(this).css("left");

        if (width.endsWith("px"))
            css.width = ((parseFloat(width) / originalRatio) * g.ratio) + "px";
        if (height.endsWith("px"))
            css.height = ((parseFloat(height) / originalRatio) * g.ratio) + "px";
        if (top.endsWith("px"))
            css.top = ((parseFloat(top) / originalRatio) * g.ratio) + "px";
        if (left.endsWith("px"))
            css.left = ((parseFloat(left) / originalRatio) * g.ratio) + "px";

        $(this).css(css);
    });
};

char.rescaleFontElements = function (elements, originalRatio) {
    elements.each(function () {
        const css = {};
        const top = $(this).css("top");
        const left = $(this).css("left");
        const fontSize = $(this).css("font-size");

        if (top.endsWith("px"))
            css.top = ((parseFloat(top) / originalRatio) * g.ratio) + "px";
        if (left.endsWith("px"))
            css.left = ((parseFloat(left) / originalRatio) * g.ratio) + "px";
        if (fontSize.endsWith("px"))
            css["font-size"] = ((parseFloat(fontSize) / originalRatio) * g.ratio) + "px";

        $(this).css(css);
    });
};

char.menuPanels = {
    body: "#room_left_char",
    map: "#room_left_map",
    graph: "#room_left_graph",
    walk: "#room_left_walk"
};

char.hideMenuPanels = function () {
    $("#room_left_char").hide();
    $("#room_left_map").hide();
    $("#room_left_graph").hide();
    $("#room_left_walk").hide();
    $("#help_backButton").hide();
};

char.setMenuPanel = function (panel, override) {
    var selector = char.menuPanels[panel];
    var wasVisible;
    if (!selector)
        return false;

    wasVisible = $(selector).is(":visible");
    char.hideMenuPanels();
    if (override)
        $(selector).show();
    else if (!wasVisible)
        $(selector).toggle();
    return true;
};

char.currentMenuPanel = function () {
    if ($("#room_left_char").is(":visible"))
        return "body";
    if ($("#room_left_map").is(":visible"))
        return "map";
    if ($("#room_left_graph").is(":visible"))
        return "graph";
    if ($("#room_left_walk").is(":visible"))
        return "walk";
    return "hide";
};

char.showExportDialog = function (options) {
    $("#room_export").slideDown();
    $("#room_export_data").val(options.data === undefined ? '' : options.data);

    $('#room_export_load').toggle(!!options.showLoad);
    $('#room_export_load_file').toggle(!!options.showLoadFile);
    $('#room_export_file').toggle(!!options.showSaveFile);
    $('#room-export-text').toggle(!!options.showExportText);
    $('#room-import-text').toggle(!!options.showImportText);

    if (options.saveID !== undefined)
        $('#room_export_file').data('saveID', options.saveID);
};

char.hideExportDialog = function () {
    $("#room_export").slideUp();
};

char.updateRoomActionButtons = function () {
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
};

char.applyScaledShellStyles = function (options) {
    const rlHeight = options.rlHeight;
    const leftMenuWidth = options.leftMenuWidth;
    const menuBoxWidth = options.menuBoxWidth;
    const menuBoxHeight = options.menuBoxHeight;
    const menuBoxImgWidth = options.menuBoxImgWidth;
    const menuBoxImgHeight = options.menuBoxImgHeight;
    const resizeHeight = options.resizeHeight;
    const graphBarHeight = options.graphBarHeight === undefined ? null : options.graphBarHeight;

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
        width: leftMenuWidth * g.ratio + "px",
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
        height: resizeHeight * g.ratio + "px"
    });
    $(".mt-300x").css({ "margin-top": (400 * g.ratio) + "px" });
    $(".mt-50x").css({ "margin-top": (50 * g.ratio) + "px" });
    $(".menu-box").css({
        "width": menuBoxWidth * g.ratio + "px",
        "height": menuBoxHeight * g.ratio + "px",
        "margin-top": (15 * g.ratio) + "px"
    });
    $(".menu-box-img").css({
        "width": menuBoxImgWidth * g.ratio + "px",
        "height": menuBoxImgHeight * g.ratio + "px"
    });
    if (graphBarHeight !== null)
        $('.left-graph-char-bar').css({ "height": (graphBarHeight * g.ratio) + "px" });

    if (options.hideLeftMenu)
        $(".left-menu").hide();

    if (options.walkSubHeight !== undefined)
        $("#room_left_walk_sub").css({ height: options.walkSubHeight * g.ratio + "px" });
};

char.clearMapPanel = function () {
    $('#room_left_map').html('');
};

char.addMapText = function (left, top, text, color = "#fff") {
    $('#room_left_map').append('<div class="width-l resize-font killmap" style="color: ' + color + '; position:absolute; font-size: ' + 20 * g.ratio + 'px; left: ' + left * g.ratio + 'px; top: ' + (top + 5) * g.ratio + 'px; " >' +
        text +
        '</div>');
};

char.addMapImage = function (src, height, width, top, left) {
    $('#room_left_map').append('<img src="' + src + '" class="width-l resize killmap" style="position:absolute; ' +
        g.makeCss(height, width, top, left) + '" />');
};

char.getMapDayNightIcons = function (roomMapEntry, top) {
    var dayNight = roomMapEntry.access ? '<img src="./images/general/day.png" class="resize" style="position:absolute; ' + g.makeCss(16, 16, top + 5, 260) + '"/>' : '';
    dayNight += roomMapEntry.darkAccess ? '<img src="./images/general/night.png" class="resize" style="position:absolute; ' + g.makeCss(16, 16, top + 5, 280) + '"/>' : '';
    return dayNight;
};

char.addWalkText = function (text, fontSize = null, className = "resize-font") {
    var style = fontSize === null ? '' : ' style="font-size: ' + fontSize * g.ratio + 'px"';
    $("#room_left_walk_sub").append('<div class="' + className + '"' + style + '>' + text + '</div>');
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

    if (g.roomID > 3 && g.roomID < 50 && g.room !== 28) {
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
    else if (g.roomID === 488) {
        cArray.push({ t: sc.getTimeline("daria"), c: sc.n("daria") });
    }
    else if (g.roomID === 958) {
        if (g.map !== null)
            invoker.invoke(958, "btnclick", "displayMap");
        return;
    }

    if (cArray.length > 0) {
        var ampm = gv.get("clock24") === "12";
        char.clearMapPanel();
        for (i = 0; i < cArray.length; i++) {
            ttop += 20;
            char.addMapText(10, ttop, cArray[i].c, "#fff");
            ttop += 30;
            for (j = 0; j < cArray[i].t.subList.length; j++) {
                if (cArray[i].t.subList[j].current) {
                    char.addMapText(15, ttop,
                        char.friendlyTime(cArray[i].t.subList[j].hstart, ampm) + " to " +
                        char.friendlyTime(cArray[i].t.subList[j].hend, ampm) + " - " +
                        cArray[i].t.subList[j].room + " *", "#fdd");
                }
                else {
                    char.addMapText(15, ttop,
                        char.friendlyTime(cArray[i].t.subList[j].hstart, ampm) + " - " +
                        char.friendlyTime(cArray[i].t.subList[j].hend, ampm) + " - " +
                        cArray[i].t.subList[j].room, "#ccc");
                }
                ttop += 25;
            }
        }
    }
    else {
        if (!(exRoom.includes(g.roomID))) {
            var tm = gv.get("map");
            char.clearMapPanel();
            for (i = 0; i < g.roomMap.length; i++) {
                if (g.roomMap[i].map === tm) {
                    var newRatio = 45 / g.roomMap[i].height;
                    char.addMapImage("./images/room/" + g.roomMap[i].img, g.roomMap[i].height * newRatio, g.roomMap[i].width * newRatio, ttop, 10);
                    $('#room_left_map').append(char.getMapDayNightIcons(g.roomMap[i], ttop));
                    char.addMapText(100, ttop, g.roomMap[i].display, "#fff");
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
        char.addWalkText('<br/><br/><br/><br/>Back to: ' + g.pastSaves[g.pastSaves.length - 2].name);
        if ($("#room_left_walk").is(":visible")) {
            $("#help_backButton").show();
        }
    }
    else {
        char.addWalkText('<br/><br/><br/><br/>', 20);
        $("#help_backButton").hide();
    }
    char.addWalkText('<br/>History:', 30);
    if (g.popArray.length === 0) {
        char.addWalkText('None', 20, "popUpHistory resize-font");
    }
    for (let i = 0; i < g.popArray.length; i++) {
        char.addWalkText(g.popArray[i], 20, "popUpHistory resize-font");
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
    if (g.prevRoom === roomID && !ignoreShoeRooms.includes(roomID)) {
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
    if (g.skipNextRoomSave) {
        g.skipNextRoomSave = false;
    }
    else {
        menu.makeSaves();
    }
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
        g.prevview = char.currentMenuPanel();

    char.updateRoomActionButtons();

    phone.clear(true);
    phone.preservedMenuOverlay = null;
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
        //scc: scc.save(),
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
            try {
                localStorage[cookieName] = JSON.stringify(g.saveState);
                return true;
            }
            catch (err) {
                if (!g.saveAlert) {
                    g.saveAlert = true;
                    alert("Unable to save. Your browser may be blocking the save or you're in incognito mode that doesn't allow saving."); 
                    console.error("Save failed:", e);
                }
                return false;
            }
        }
        else {
            return JSON.stringify(g.saveState);
        }
    }
};

menu.load = function (cookieName, btn, saveID) {
    fame.moanAnimateStop();
    if (g.newLoad) {
        char.showGameShell();
    }
    g.newLoad = false;

    var tp = JSON.parse(localStorage[cookieName]);
    let saveVersion = char.applyLoadedState(tp);
    char.finishLoadedState(saveVersion, {
        updateMap: true,
        hideExportDialog: false,
        resetPastSaves: true
    });
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
    char.showExportDialog({
        data: tp,
        saveID: saveID,
        showLoad: false,
        showLoadFile: false,
        showSaveFile: true,
        showExportText: true,
        showImportText: false
    });
};

char.applyLoadedState = function (tp) {
    let saveVersion = tp.version;

    g.pass = tp.pass;
    g.internal = tp.internal;
    g.prevRoom = tp.prevRoom;

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

    return saveVersion;
};

char.finishLoadedState = function (saveVersion, options) {
    if (options.updateMap)
        char.map();

    cl.display();
    char.room(g.roomID);
    char.menu();

    if (saveVersion < 22) {
        sissy.st[7].ach = false;
        sissy.st[8].ach = false;
    }

    $('.hide-start').show();
    if (g.roomID === 328)
        $("#room-inv").hide();

    $('.menu-button[data-type="close"]').click();
    char.showGameShell();
    char.updateRoomActionButtons();
    $(".rl-change").show();

    if (options.hideExportDialog)
        char.hideExportDialog();

    if (options.resetPastSaves)
        g.pastSaves = new Array();
};

char.import = function (importData) {
    var tp;
    if (importData === null)
        tp = JSON.parse($("#room_export_data").val().trim());
    else
        tp = JSON.parse(importData);

    g.newLoad = false;
    char.showGameShell();
    let saveVersion = char.applyLoadedState(tp);
    char.finishLoadedState(saveVersion, {
        updateMap: false,
        hideExportDialog: true,
        resetPastSaves: false
    });
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
