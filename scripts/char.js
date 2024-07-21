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

        $(".resize-font").each(function () {
            var w = $(this).css("width").replace('px', '') / ogRatio;
            var h = $(this).css("height").replace('px', '') / ogRatio;
            var t = $(this).css("top").replace('px', '') / ogRatio;
            var l = $(this).css("left").replace('px', '') / ogRatio;
            var f = $(this).css("font-size").replace('px', '') / ogRatio;
            $(this).css({
                "width": (w * g.ratio) + "px",
                "height": (h * g.ratio) + "px",
                "top": (t * g.ratio) + "px",
                "left": (l * g.ratio) + "px",
                "font-size": (f * g.ratio) + "px"
            });
        });

        $('.room-left').css({ height: 1080 * g.ratio + "px" });

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
        $(".mt-300x").css({ "margin-top": (400 * g.ratio) + "px" });
        $(".mt-50x").css({ "margin-top": (50 * g.ratio) + "px" });
        $(".menu-box").css({ "width": (300 * g.ratio) + "px", "height": (90 * g.ratio) + "px", "margin-top": (15 * g.ratio) + "px" });
        $(".menu-box-img").css({ "width": (296 * g.ratio) + "px", "height": (90 * g.ratio) + "px" });
        char.menu();
    };

    $("#menu_parent").on('click', '.menu-button', function () {
        menu.mClick($(this).data('type'));
    });

    $('#room-menu').click(function () {
        phone.build(null);
        //menu.initBuild("init");
    });
    $("#menu_parent").on('click', '.menu-save', function () {
        menu.saveBtn($(this));
    });
    $("#menu_parent").on('click', '.menu-del', function () {
        if ($(this).data('foo') === 't') {
            $(this).data('foo', 'x');
            $(this).text("R U SURE?");
        }
        else {
            $(this).data('foo', 't');
            $(this).text("DELETE");
            menu.saveDel($(this));
        }
    });

    $("#menu_parent").on('click', '.menu-export', function () {
        char.export(parseInt($(this).data("save")));
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

    $("#menu_parent").on('click', '#menu-import', function () {
        $('#room-export-text').hide();
        $('#room-import-text').show();
        $("#room_export").slideDown();
        $("#room_export_data").val('');
        $('#room_export_load').show();
        $('#room_export_load_file').show();
        $('#room_export_file').hide();
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
            if (override)
                $("#room_left_walk").show();
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
    var i;
    if (!(exRoom.includes(g.roomID))) {
        var tm = gv.get("map");
        var ttop = 100;
        $('#room_left_map').html('');
        for (i = 0; i < g.roomMap.length; i++) {
            if (g.roomMap[i].map === tm) {
                var newRatio = 45 / g.roomMap[i].height;
                var dayNight = g.roomMap[i].access ? '<img src="./images/general/day.png" style="position:absolute; ' + g.makeCss(16, 16, ttop + 5, 260) + '"/>' : '';
                dayNight += g.roomMap[i].darkAccess ? '<img src="./images/general/night.png" style="position:absolute; ' + g.makeCss(16, 16, ttop + 5, 280) + '"/>' : '';
                $('#room_left_map').append('<img src="./images/room/' + g.roomMap[i].img + '" class="width-l resize killmap" style="position:absolute; ' + g.makeCss(g.roomMap[i].height * newRatio, g.roomMap[i].width * newRatio, ttop, 10) + '" />');
                $('#room_left_map').append(dayNight);
                $('#room_left_map').append('<div class="width-l resize killmap" style="color: #fff; position:absolute; font-size: ' + 20 * g.ratio + 'px; left: ' + 100 * g.ratio + 'px; top: ' + (ttop + 5) * g.ratio + 'px; " >' + g.roomMap[i].display + '</div>');
                ttop += 50;
            }
        }
    }
};

char.makeWalk = function () {
    var activeCase = missy.activecase();
    var btnWidth = 200 * g.ratio;
    var btnHeight = 66.6 * g.ratio;
    var mgtop = 100 * g.ratio;
    var mgleft = 25 * g.ratio;
    $("#room_left_walk_sub").html("<br/><br/><br/>" + activeCase.txt);
    if (g.pastSaves.length > 1) {
        $("#room_left_walk_sub").append('<br/><br/>Back Button. - This button is still in testing, so know that there may be issues. Best to save before use. ');
        $("#room_left_walk_sub").append('<img src="./images/room/1001_rand/back_1.png" class="help-history hover-noevent" title="Back" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; z-index: 100; margin-top: ' + mgtop + 'px; margin-left:' + mgleft + 'px; position:relative;" />');
        $("#room_left_walk_sub").append('<div style="margin-top:' + (mgtop / 2) + 'px;">' + g.pastSaves[g.pastSaves.length - 2].name + "</div>");
    }

    $('.help-history').click(function () {
        //console.log("hit")
        //var j = g.pastSaves.length - 2;
        g.pastSaves.splice(g.pastSaves.length - 1, 1);
        privateChat.kill();
        clearTimeout(g.roomTimeout);
        clearTimeout(g.roomTimeout2);
        char.import(g.pastSaves[g.pastSaves.length - 1].data);
        g.pastSaves.splice(g.pastSaves.length - 1, 1);
        char.makeWalk();
    });
    //var i;
    //var mo = new Array();
    //var maxi = 0;
    //var prevEntry = "";
    //if (g.walk === null) {
    //    for (i = 0; i < sc.events.length; i++) {
    //        if (sc.events[i].name === prevEntry) {
    //            if (sc.events[i].step > maxi)
    //                maxi = sc.events[i].step;
    //        }
    //        else {
    //            mo.push({ name: prevEntry, max: maxi });
    //            maxi = 0;
    //            prevEntry = sc.events[i].name;
    //        }
    //    }
    //    mo.push({ name: prevEntry, max: maxi });
    //    $("#room_left_walk_sub").append('<div style="height:' + 100 * g.ratio + 'px;" class="resize"></div>');
    //    $("#room_left_walk_sub").append('<div class="cursor-hover char-walkthrough" data-name="oncase">' +
    //        '<img src="./images/general/magglass.png" style="width:' + 100 * g.ratio + 'px; display:inline-block" class="resize"/>' +
    //        '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px;" class="char-20">What Do I Do?</div>' +
    //        '</div>');
    //    $.each(sc.char, function (i, v) {
    //        if (v.show) {
    //            $("#room_left_walk_sub").append('<div class="cursor-hover char-walkthrough" data-name="' + v.name + '">' +
    //                '<img src="./images/speaker/' + v.image + '" style="width:' + 100 * g.ratio + 'px; display:inline-block" class="resize"/>' +
    //                '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px;" class="char-20">' + v.display + '</div>' +
    //                '</div>');
    //        }
    //    });
    //    $('.char-walkthrough').click(function () {
    //        g.walk = $(this).data("name");
    //        char.makeWalk();
    //    });
    //}
    //else {
    //    if (g.walk === "oncase") {
    //        //var oncase = gv.get("oncase");
    //        var oncaseText = '';
    //        $("#room_left_walk_sub").append('<div style="height:' + 80 * g.ratio + 'px;" class="resize"></div>');
    //        $("#room_left_walk_sub").append('<div style="font-size:' + 20 * g.ratio + 'px;" class="cursor-hover resize char-walkthrough-return">' +
    //            '<img src="./images/general/arrowLeft.png" style="dispay:inline-block; height:' + 60 * g.ratio + 'px; margin-right:' + 40 * g.ratio + 'px;"/>' +
    //            'Go Back</div>');
    //        $("#room_left_walk_sub").append('<div style="text-align:center;">' +
    //            '<img src="./images/general/magglass.png" style="width:' + 100 * g.ratio + 'px;" class="resize"/>' +
    //            '</div>' +
    //            '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px; text-align:center; width:100%;" class="char-20">Active Case</div>');

    //        oncaseText = missy.activecase().txt;

    //        $("#room_left_walk_sub").append('<ul id="room_left_walk_sub_list">' +
    //            '<li style="font-size:' + 20 * g.ratio + 'px; color:#ffff33;" class="char-20">' +
    //            oncaseText + '</li></ul>');
    //        if (g.roomID === 0) {
    //            room0.main();
    //            //$("#room_left_walk").show();
    //        }
    //        $(".char-walkthrough-return").click(function () {
    //            g.walk = null;
    //            char.makeWalk();
    //        });
    //    }
    //    else {
    //        var reverseEvent = new Array();
    //        var displayArray = new Array();
    //        var timelineArray = new Array();
    //        var thisChar = sc.get(g.walk);
    //        var thisTimeline = sc.getTimeline(g.walk);
    //        var pointer = 0;
    //        for (i = 0; i < sc.events.length; i++) {
    //            if (sc.events[i].name === g.walk && sc.events[i].step >= 0) {
    //                reverseEvent.push({ step: sc.events[i].step, txt: sc.events[i].txt, ach: sc.events[i].ach });
    //                if (sc.events[i].step <= thisChar.step)
    //                    pointer = reverseEvent.length - 1;
    //            }
    //        }
    //        $("#room_left_walk_sub").append('<div style="height:' + 80 * g.ratio + 'px;" class="resize"></div>');
    //        $("#room_left_walk_sub").append('<div style="font-size:' + 20 * g.ratio + 'px;" class="cursor-hover resize char-walkthrough-return">' +
    //            '<img src="./images/general/arrowLeft.png" style="dispay:inline-block; height:' + 60 * g.ratio + 'px; margin-right:' + 40 * g.ratio + 'px;"/>' +
    //            'Go Back</div>');
    //        $("#room_left_walk_sub").append('<div style="text-align:center;">' +
    //            '<img src="./images/speaker/' + thisChar.image + '" style="width:' + 100 * g.ratio + 'px;" class="resize"/>' +
    //            '</div>' +
    //            '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px; text-align:center; width:100%;" class="char-20">' + thisChar.display + '</div>');

    //        for (i = 0; i < thisTimeline.subList.length; i++) {
    //            if (thisTimeline.subList[i].current)
    //                timelineArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#ffff33;" class="char-20">' +
    //                    thisTimeline.subList[i].hstart + ":00 " + thisTimeline.subList[i].hend + ":00 " +
    //                    thisTimeline.subList[i].room +
    //                    '</li>');
    //            else {
    //                timelineArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#aaa;" class="char-20">' +
    //                    thisTimeline.subList[i].hstart + ":00 " + thisTimeline.subList[i].hend + ":00 " +
    //                    thisTimeline.subList[i].room +
    //                    '</li>');
    //            }
    //        }

    //        for (i = 0; i < reverseEvent.length; i++) {
    //            if (i === pointer)
    //                displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#ffff33;" class="char-20">' +
    //                    reverseEvent[i].txt + '</li>');
    //            //else if (i === pointer + 1)
    //            //    displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#aaa;" class="char-20">' +
    //            //        reverseEvent[i].txt + '</lii>');
    //            else if (reverseEvent[i].step < thisChar.step) {
    //                if (reverseEvent[i].ach || reverseEvent[i].step === 0)
    //                    displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#aaa;" class="char-20">' +
    //                        reverseEvent[i].txt + '</li>');
    //                else
    //                    displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#666; text-decoration: line-through;" class="char-20">' +
    //                        reverseEvent[i].txt + '</li>');
    //            }
    //            else
    //                displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#666;" class="char-20" type="circle">' +
    //                    '...</li>');
    //        }

    //        $("#room_left_walk_sub").append('<ul id="room_left_walk_sub_timeline" style="list-style: none; padding:0;"></ul>');

    //        $("#room_left_walk_sub").append('<ul id="room_left_walk_sub_list"></ul>');


    //        for (i = displayArray.length - 1; i >= 0; i--)
    //            $("#room_left_walk_sub_list").append(displayArray[i]);

    //        for (i = 0; i < timelineArray.length; i++)
    //            $("#room_left_walk_sub_timeline").append(timelineArray[i]);

    //        if (g.roomID === 0) {
    //            room0.main();
    //            $("#room_left_walk").show();
    //        }
    //        $(".char-walkthrough-return").click(function () {
    //            g.walk = null;
    //            char.makeWalk();
    //        });
    //    }
    //}
};

char.newdayfake = function () {
    if (g.dt.getHours() > 6)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);

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
    if (g.roomChange.includes(roomID) && roomID !== g.roomID)
        cl.cTemp = $.extend(true, {}, cl.c);

    if (!$('#room_footer').is(":visible"))
        $('#room_footer').show();
    if ($('#room-menuButtons').is(":visible"))
        inv.close();
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
    if (g.prevRoom === 0 || g.prevRoom === 28){
        if (g.prevview !== null)
            char.changeMenu(g.prevview, false, true);
    }
    else if(!(g.roomID === 0 || g.roomID === 28))
        g.prevview = $("#room_left_char").is(":visible") ? "body" : ($("#room_left_map").is(":visible") ? "map" : ($("#room_left_graph").is(":visible") ? "graph" : "hide"));

    if (g.roomChange.includes(g.roomID)) 
        $("#room-change").show();
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
};

menu.initBuild = function (type) {
    $('#menu_parent').html('<img src="./images/phone/' + inv.get(inv.phone).image + '" style="position:absolute; ' + g.makeCss(1000, 700, 40, 610) + '" class="menu-phoneBG" />');
    $('#menu_parent').append('<img src="./images/phone/bSave.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 660) + '" data-type="save" class="menu-button menu-buttonKill" />');
    $('#menu_parent').append('<img src="./images/phone/bRelationships.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 810) + '" data-type="rel" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bContacts.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 960) + '" data-type="contact" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bHelp.png" style="position:absolute; ' + g.makeCss(150, 150, 180, 1110) + '" data-type="help" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bTime.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 660) + '" data-type="time" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bPic.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 810) + '" data-type="pic" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bSettings.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 960) + '" data-type="settings" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bHormone.png" style="position:absolute; ' + g.makeCss(150, 150, 330, 1110) + '" data-type="hormone" class="menu-button menu-buttonKill"/>');
    if (g.sissy[54].ach)
        $('#menu_parent').append('<img src="./images/phone/bStats.png" style="position:absolute; ' + g.makeCss(150, 150, 480, 660) + '" data-type="stats" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bPatron.png" style="position:absolute; ' + g.makeCss(150, 150, 780, 960) + '" data-type="patron" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bAch.png" style="position:absolute; ' + g.makeCss(150, 150, 480, 810) + '" data-type="ach" class="menu-button menu-buttonKill"/>');
    //cheat menu
    //$('#menu_parent').append('<img src="./images/phone/bAdmin.png" style="position:absolute; ' + g.makeCss(150, 150, 780, 660) + '" data-type="admin" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/bPatreon.png" style="position:absolute; ' + g.makeCss(150, 150, 780, 1110) + '" data-type="patreon" class="menu-button menu-buttonKill"/>');
    $('#menu_parent').append('<img src="./images/phone/power.png" style="position:absolute; ' + g.makeCss(90, 90, 937, 915) + '" data-type="close" class="menu-button"/>');
    $('#menu_parent').append('<img src="./images/phone/menu.png" style="position:absolute; ' + g.makeCss(70, 100, 950, 750) + '" data-type="menu" class="menu-button"/>');
    if (type === "init" || type === "save")
        $('#menu_parent').slideDown();

    if (type === "save") {
        $('.menu-button[data-type="menu"]').remove();
        menu.mClick("save");
    }
    sstat.init();
};

menu.mClick = function (type) {
    switch (type) {
        case "close":
            $('#menu_parent').slideUp('normal', function () {
                $('#menu_parent').html('');
            });
            break;
        case "menu":
            phone.build(null);
            //menu.initBuild("");
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
                scc.buildIcons();
            }, 800);
            break;
        case "save":
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div id="menu_normal" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                '<ul>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="0">SAVE</button><div class="menu-save-line" data-save="0"></div><button type="button" class="menu-del" data-save="0" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="0"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="1">SAVE</button><div class="menu-save-line" data-save="1"></div><button type="button" class="menu-del" data-save="1" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="1"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="2">SAVE</button><div class="menu-save-line" data-save="2"></div><button type="button" class="menu-del" data-save="2" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="2"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="3">SAVE</button><div class="menu-save-line" data-save="3"></div><button type="button" class="menu-del" data-save="3" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="3"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="4">SAVE</button><div class="menu-save-line" data-save="4"></div><button type="button" class="menu-del" data-save="4" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="4"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="5">SAVE</button><div class="menu-save-line" data-save="5"></div><button type="button" class="menu-del" data-save="5" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="5"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="6">SAVE</button><div class="menu-save-line" data-save="6"></div><button type="button" class="menu-del" data-save="6" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="6"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="7">SAVE</button><div class="menu-save-line" data-save="7"></div><button type="button" class="menu-del" data-save="7" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="7"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
                '<li><button type="button" class="menu-save" data-type="save" data-save="8">SAVE</button><div class="menu-save-line" data-save="8"></div><button type="button" class="menu-del" data-save="8" disabled="disabled" data-foo="t">DELETE</button><button type="button" class="menu-export" data-save="8"><img class="menu-export-image" src="./images/general/export.png"/></button></li>' +
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
            break;
        case "ach":
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
                trophy.draw();
            }, 800);
            break;
        case "patron":
            window.open("https://www.patreon.com/FF5", "_blank"); 
            break;
        case "hormone":
            var tempEnergy = Math.floor((gv.get("energy") / gv.get("maxenergy")) * 100);
            $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                '<div style="padding:10%;">' +
                '<div style="font-size:' + 20 * g.ratio + 'px; margin-bottom:5px;">Hormone Levels</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#00abff; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + gv.get("hormone") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Sissyness</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.sissyPoints() + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Appearance</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + cl.appearance() + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Energy</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + tempEnergy + '%; height:' + 15 * g.ratio + 'px; background:#20C000; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Fitness Level: ' + gv.get("fitnessLevel") + '</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + gv.get("fitness") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Leg Level: ' + gv.get("legLevel") + '</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + gv.get("leg") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '<div style="font-size:' + 20 * g.ratio + 'px; margin-top:10px; margin-bottom:5px;">Upper Body Level: ' + gv.get("bodyLevel") + '</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#333333; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + gv.get("body") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
                '</div>' +

                '</div></div>');

            break;
        case "stats":
            g.sumSissy();
            $('#menu_parent').append('<img class="sissyai-kill" src="./images/phone/sissy.jpg" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + '"/>');
            $('#menu_parent').append('<div class="sissyai-kill" style="color:#e1018f; position:absolute; ' + g.makeCss(250, 500, 650, 700) + ' font-size:' + (40 * g.ratio) + 'px;">' +
                '<table style="width:100%;">' +
                '<tr><td>SISSY Points: </td><td> ' + (g.sp.total - gv.get("usedSissyPoints")) + '</td></tr>' +
                '<tr><td>&nbsp;</td><td></td></tr>' +
                '<tr><td colspan="2"><button id="sissyai_view" type="button" class="sissy-btn" style="font-size:' + (40 * g.ratio) + 'px;">View Sissyness</button></tr></td>' +
                '</table></div>');
            $("#sissyai_view").click(function () {
                $('.menu-buttonKill').remove();
                $('.menu-button').remove();
                $('.sissyai-kill').remove();
                $('.menu-phoneBG').addClass('menu-phoneBGRotate');
                setTimeout(function () {
                    var thisImg = inv.get(inv.phone).image.split('.');
                    thisImg = thisImg[0] + "_rotate." + thisImg[1];
                    $('#menu_parent').html('<img src="./images/phone/' + thisImg + '" style="position:absolute; ' + g.makeCss(1015, 1450, 32, 235) + '" class="menu-phoneBG" />');
                    $('#menu_parent').append('<img src="./images/phone/power_rotate.png" style="position:absolute; ' + g.makeCss(131, 131, 474, 1533) + '" data-type="close" class="menu-button"/>');
                    $('#menu_parent').append('<img src="./images/phone/menu_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 720, 1560) + '" data-type="menu" class="menu-button"/>');
                    $('#menu_parent').append('<img src="./images/phone/back_rotate.png" style="position:absolute; ' + g.makeCss(144, 101, 200, 1560) + '" data-type="back" class="sc-menu-button"/>');
                    $("#menu_parent").append('<img src="./images/phone/sissy_wide.jpg" style="position:absolute; ' + g.makeCss(897, 1108, 94, 416) + '"/>');
                }, 800);
            });
            break;
        case "admin":
            //if (gv.get("cheatMode")) {
            //    $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
            //        '<h2>Cheat Status: ACTIVE</h2>Thank you for your support!<hr/><br />' +
            //        '<div style="font-size:' + 24 * g.ratio + 'px;">' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="money">Add Money</button><br/>' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="horneyp">Add Sissy Points</button><br />' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="energyp">Max Energy</button><br/>' +
            //        '<hr/>' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="lolaEva" data-step="8">Lola and Eva: After truth or dare</button><br/>' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="missy" data-step="10">Missy: School</button><br/>' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="zoey" data-step="11">Zoey: After Meeting Chloe</button><br/>' +
            //        '<div>Sissy School: Each event is skippable, click the Cheat Unlock button</div>' +
            //        '<button type="button" style="font-size:' + 24 * g.ratio + 'px;" class="admin-mod menu-blueButton" data-type="uncheat" data-step="0">Turn off cheat status</button>' +
            //        '</div></div>');
            //    $(".admin-mod").click(function () {
            //        switch ($(this).data("type")) {
            //            case "money":
            //                gv.set("money", 1000000);
            //                //$('#char_money').text('$1000000');
            //                break;
            //            case "energyp":
            //                gv.mod("energy", 10000);
            //                break;
            //            case "horneyp":
            //                gv.set("cheatPoints", 10000);
            //                break;
            //            case "lolaEva":
            //                var thisStep = $(this).data("step");
            //                if (thisStep === 4) {
            //                    if (sc.getstep("lola") < 5) {
            //                        sc.setstep("me", -1);
            //                        sc.setstepAll("eva", 4);
            //                        sc.setstepAll("lola", 5);
            //                        pic.add("lolaTopless");
            //                        g.popUpNotice("You've skipped past Spin the bottle with Lola and Eva");
            //                    }
            //                    else
            //                        g.popUpNotice("You've already passed this point. ");
            //                }
            //                else if (thisStep === 8) {
            //                    if (sc.getstep("lola") < 8) {
            //                        sc.setstep("me", -1);
            //                        sc.setstep("landlord", -1);
            //                        sc.setstep("lola", 8);
            //                        sc.setstep("eva", 7);
            //                        g.roomMapAccess(16, false, false);
            //                        char.room(0);
            //                        pic.add("lolaTopless");
            //                        g.popUpNotice("You've skipped past Truth or Dare with Lola and Eva");
            //                    }
            //                    else
            //                        g.popUpNotice("You've already passed this point.");
            //                }
            //                break;
            //            case "missy":
            //                var thisStepm = $(this).data("step");
            //                if (thisStepm === 10) {
            //                    if (sc.getstep("missy") < 10) {
            //                        inv.add("pi_lic");
            //                        cl.add("pants", "s");
            //                        cl.add("shirt", "s");
            //                        cl.add("shoes", "d");
            //                        cl.add("socks", "b");
            //                        cl.add("panties", "w");
            //                        cl.add("accessories", "piggy");
            //                        if (cl.c.chest === 0)
            //                            cl.c.chest = 1;
            //                        gv.mod("fitnessLevel", 1);
            //                        sc.setstep("tiffany", -4);
            //                        sc.setstep("tiffany", 5);
            //                        sc.setstep("me", -1);
            //                        sc.setstep("me", -2);
            //                        sc.setstepAll("missy", 10);
            //                        cl.c.bodyhair = 0;
            //                        inv.add("razor", 1);
            //                        sc.setstepAll("me", 2);
            //                        g.roomMapAccess(203, true, false);
            //                        cl.display();
            //                        g.popUpNotice("You have skipped ahead to the sissy school.");
            //                    }
            //                    else
            //                        g.popUpNotice("You've already passed this point.");
            //                }
            //                break;
            //            case "zoey":
            //                var zoeyStep = sc.getstep("zoey");
            //                if (zoeyStep < 11) {
            //                    sc.setstepAll("zoey", 11);
            //                    sc.setstep("zoey", -1);
            //                    sc.setstep("zoey", -2);
            //                    scc.love("zoey", 100, 90);
            //                    g.popUpNotice("You've advanced beyond Chloe's breakup and meeting Stormy. ");
            //                }
            //                else
            //                    g.popUpNotice("You've already passed this point.");
            //                break;
            //            case "uncheat":
            //                gv.mod("cheatMode", false);
            //                menu.mClick("admin");
            //                break;
            //        }
            //    });
            //}
            //else {
            //    $('#menu_parent').append('<div id="cheat_Killme" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center; font-size:' + 24 * g.ratio + 'px;">' +
            //        "<h2>Cheat Status: INACTIVE</h2>" +
            //        "This cheat menu is a thank you to all the great support I've received from my $5 anf $10 Patrons." +
            //        "The game is designed to be played without this cheat activated. So if you don't use cheat you're not missing anything. " +
            //        '<button type="button" class="intro-button" id="cheat_passwordSubmit" style="font-size:' + 24 * g.ratio + 'px;">I\'m a Patreon Supporter<br/>Activate Cheats</button><br/>' +
            //        '<button type="button" class="intro-button" id="cheat_cancel" style="font-size:' + 24 * g.ratio + 'px;">I\'m not a Patreon Supporter<br/>Cancel</button>' +
            //        '<br/><br/>Thank you so much for playing.' +
            //        '</div>');
            //    $('#cheat_passwordSubmit').click(function () {
            //        gv.mod("cheatMode", true);
            //        menu.mClick("admin");
            //    });
            //    $("#heat_cancel").click(function () {
            //        menu.mClick("menu");
            //    });
            //}
            break;
        case "time":
            $(".menu-buttonKill").remove();
            if (!g.passtime.includes(g.roomID)) {
                var places = "";
                $.each(g.rooms, function (i, v) {
                    if (g.passtime.includes(v.roomID))
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
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="specific" data-num="12">Noon</button> </td><td>Wait till Noon </td></tr>' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="specific" data-num="17">5:00 PM</button> </td><td>Wait till 5:00PM </td></tr>' +
                    '<tr><td><button type="button" class="menu-waitABit menu-blueButton" data-wait="specific" data-num="20">8:00 PM</button> </td><td>Wait till 8:00PM </td></tr>' +
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
            var contacTop, contactLeft;
            var contactCounter = 0;
            var contactList = "";
            for (i = 0; i < sc.char.length; i++) {
                if (sc.char[i].phone <= sc.char[i].step && sc.char[i].phone > -1) {
                    contacTop = (Math.floor(contactCounter / 4) * 150) + 150;
                    contactLeft = (contactCounter % 4) * 150;
                    contactList += '<img src="./images/phone/char/' + sc.char[i].image + '" style="position:absolute; ' + g.makeCss(150, 150, contacTop, contactLeft) +
                        '" data-name="' + sc.char[i].name + '" class="hover-pointer phone-contact"/>';
                    contactCounter++;
                }
            }
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div class="contact-body" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                '<h2>Contacts</h2>' + 
                contactList +
                '</div>');
            $('.phone-contact').click(function () {
                sc.phone($(this).data("name"));
            });
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
        case "settings":
            $('.menu-buttonKill').remove();
            $('.menu-button').remove();
            $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(761, 617, 167, 649) + ' background:#000;">' +
                '<div style="color:#fff; font-size:' + 36 * g.ratio + 'px; margin-bottom:10px; width:100%; text-align:center;">⚙️ Settings</div>' +
                '<div class="switch-group char-20">' +
                'Fantasy Creatures' +
                '<div class="switch-field">' +
                '<input type="radio" id="radio-fantasy-false" name="switch-fantasy" value="off" />' +
                '<label for="radio-fantasy-false">Off</label>' +
                '<input type="radio" id="radio-fantasy-true" name="switch-fantasy" value="on" />' +
                '<label for="radio-fantasy-true">On</label>' +
                '</div>' +
                '</div>' +
                '<div class="switch-group char-20">' +
                'Fight Speed' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-fightspeed-3500" name="switch-fightspeed" value="3500" />' +
                '<label for="radio-fightspeed-3500">Slow</label>' +
                '<input type="radio" id="radio-fightspeed-1250" name="switch-fightspeed" value="1250" />' +
                '<label for="radio-fightspeed-1250">Normal</label>' +
                '<input type="radio" id="radio-fightspeed-600" name="switch-fightspeed" value="600" />' +
                '<label for="radio-fightspeed-600">Fast</label>' +
                '<input type="radio" id="radio-fightspeed-100" name="switch-fightspeed" value="100" />' +
                '<label for="radio-fightspeed-100">Very Fast</label>' +
                '</div>' +
                '</div>' +
                '<div class="switch-group char-20">' +
                'Fight Sex Scenes' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-fightsex-3500" name="switch-fightsex" value="3500" />' +
                '<label for="radio-fightsex-3500">Slow</label>' +
                '<input type="radio" id="radio-fightsex-1250" name="switch-fightsex" value="1250" />' +
                '<label for="radio-fightsex-1250">Normal</label>' +
                '<input type="radio" id="radio-fightsex-600" name="switch-fightsex" value="600" />' +
                '<label for="radio-fightsex-600">Fast</label>' +
                '<input type="radio" id="radio-fightsex-100" name="switch-fightsex" value="100" />' +
                '<label for="radio-fightsex-100">Very Fast</label>' +
                '</div>' +
                '</div>' +
                '<div class="switch-group char-20">' +
                'Difficulty' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-diff-0" name="switch-difficulty" value="0" />' +
                '<label for="radio-diff-0">Easy</label>' +
                '<input type="radio" id="radio-diff-1" name="switch-difficulty" value="1" />' +
                '<label for="radio-diff-1">Medium</label>' +
                '<input type="radio" id="radio-diff-2" name="switch-difficulty" value="2" />' +
                '<label for="radio-diff-2">Hard</label>' +
                '</div>' +
                '</div>' +
                '<div class="switch-group char-20">' +
                ' Clock' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-12" name="switch-clock" value="12" />' +
                '<label for="radio-12">12 Hour</label>' +
                '<input type="radio" id="radio-24" name="switch-clock" value="24" />' +
                '<label for="radio-24">24 Hour</label>' +
                '</div>' +
                '</div>' +
                '</div>');
            $('#menu_parent').append('<img src="./images/phone/power.png" style="position:absolute; ' + g.makeCss(90, 90, 937, 915) + '" data-type="close" class="menu-button"/>');
            $('#menu_parent').append('<img src="./images/phone/menu.png" style="position:absolute; ' + g.makeCss(70, 100, 950, 750) + '" data-type="menu" class="menu-button"/>');
            $('#radio-fantasy-' + gv.get("fantasyCreatures")).prop("checked", true);
            $('#radio-fightspeed-' + gv.get("fightspeed")).prop("checked", true);
            $('#radio-fightsex-' + gv.get("fightsex")).prop("checked", true);
            $('#radio-' + gv.get("clock24")).prop("checked", true);
            $('#radio-diff-' + gv.get("difficulty")).prop("checked", true);

            $('input[type=radio][name=switch-fantasy]').change(function () {
                gv.set("fantasyCreatures", $(this).val() === "on");
            });
            $('input[type=radio][name=switch-clock]').change(function () {
                gv.set("clock24", $(this).val());
                nav.buildclock();
            });
            $('input[type=radio][name=switch-difficulty]').change(function () {
                gv.set("difficulty", parseInt($(this).val()));
            });
            $('input[type=radio][name=switch-fightspeed]').change(function () {
                gv.set("fightspeed", parseInt($(this).val()));
                if (g.fight !== null)
                    g.fight.fighttimer = parseInt($(this).val());
            });
            $('input[type=radio][name=switch-fightsex]').change(function () {
                gv.set("fightsex", parseInt($(this).val()));
                if (g.fight !== null)
                    g.fight.fightsex = parseInt($(this).val());
            });
            $('.switch-group').css({ "font-size": (20 * g.ratio) + "px" });
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
    scc.load(tp.scc);
    gv.load(tp.gv);
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

    g.pastSaves = new Array();
    //Remove later, unfound bug, maybe old save
    //if (sc.getstep("missy") > 1)
    //    g.roomMapAccess(203, true, true);
};

menu.saveDel = function (cookieName) {
    //var saveID = btn.data('save');
    //var cookieName = 'HatMP_' + saveID;
    if (localStorage.getItem(cookieName) !== null) 
        localStorage.removeItem(cookieName);
    return true;
    //$('.menu-save[data-save=' + saveID + ']').text('SAVE').attr('data-type', 'save');

    //$('.menu-save-line[data-save=' + saveID + ']').html("");
    //$('.menu-del[data-save=' + saveID + ']').prop('disabled', true);
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

    g.load(tp.g);
    inv.load(tp.inv);
    cl.load(tp.cl);
    sc.load(tp.sc);
    gv.load(tp.gv);
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