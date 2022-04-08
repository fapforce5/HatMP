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
        "margin-top": 10 * g.ratio + "px"
    });
    $(".mt-60").css({
        "margin-top": 60 * g.ratio + "px"
    });
    $(".resize-height").css({
        height: 20 * g.ratio + "px"
    });
    $("#room-change").click(function () {
        g.pass = g.roomID;
        char.room(8);
    });
    $("#room_left_walk_sub").css({
        height: 1000 * g.ratio + "px"
    });
    $("#room-time").click(function () {
        $("#room-menu").click();
        menu.mClick("time");

    });
    
    $('#char_cockDisplay').click(function () {
        if ($('.room-btn[data-name="killassholeDisplayZ"]').length > 0) {
            nav.killbutton("killassholeDisplayZ");
        }
        else {
            if (g.cockDisplay === "a") {
                nav.button({
                    "type": "btn",
                    "name": "killassholeDisplayZ",
                    "left": 400,
                    "top": 300,
                    "width": 1200,
                    "height": 585,
                    "image": "../mainChar/asshole/a" + Math.floor(cl.c.butthole) + ".png"
                }, 1);
            }
        }
    });

    char.init();
});

char.changeMenu = function (menu, update, override) {
    console.log("hit: " + menu + ". Update: " + update);
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
            char.makeGraph();
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

char.map = function () {
    var exRoom = [226, 227, 475];
    var i;
    if (!(exRoom.includes(g.roomID))) {
        if (true) {
            var tm = g.get("map");
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
        else {
            var proom, top, left;
            $('#room_left_map').html('<img src="./images/general/map0.jpg" class="width-l resize killmap" style="position:absolute; ' + g.makeCss(169, 300, 100, 0) + '" />');
            $('#room_left_map').append('<img src="./images/general/map1.jpg" class="width-l resize killmap" style="position:absolute; ' + g.makeCss(169, 300, 269, 0) + '" />');
            $('#room_left_map').append('<img src="./images/general/map2.jpg" class="width-l resize killmap" style="position:absolute; ' + g.makeCss(169, 300, 438, 0) + '" />');
            proom = null;
            if (g.prevRoom !== null) {
                if (g.roomID === 0 || g.roomID === 8) {
                    $.each(g.rooms, function (i, v) {
                        if (v.roomID === g.prevRoom) {
                            proom = v.houseID;
                            return;
                        }
                    });
                }
                else {
                    $.each(g.rooms, function (i, v) {
                        if (v.roomID === g.roomID) {
                            proom = v.houseID;
                            return;
                        }
                    });
                }
            }
            if (proom !== null) {
                $.each(g.roomMap, function (i, v) {
                    if (v.roomID === proom) {
                        top = 100 + (v.map * 169) + ((v.top + (v.height / 2)) * .1564);
                        left = ((v.left + (v.width / 2)) * .1564);
                        $('#room_left_map').append('<img src="./images/general/spot.gif" class="width-l resize killmap" style="position:absolute; ' + g.makeCss(20, 20, top, left) + '" />');
                        return;
                    }
                });
            }
        }
    }
};

char.makeWalk = function () {
    $("#room_left_walk_sub").html("");
    var i;
    var mo = new Array();
    var maxi = 0;
    var prevEntry = "";
    if (g.walk === null) {
        for (i = 0; i < sc.events.length; i++) {
            if (sc.events[i].name === prevEntry) {
                if (sc.events[i].step > maxi)
                    maxi = sc.events[i].step;
            }
            else {
                mo.push({ name: prevEntry, max: maxi });
                maxi = 0;
                prevEntry = sc.events[i].name;
            }
        }
        mo.push({ name: prevEntry, max: maxi });
        $("#room_left_walk_sub").append('<div style="height:' + 100 * g.ratio + 'px;" class="resize"></div>');
        $("#room_left_walk_sub").append('<div class="cursor-hover char-walkthrough" data-name="oncase">' +
            '<img src="./images/general/magglass.png" style="width:' + 100 * g.ratio + 'px; display:inline-block" class="resize"/>' +
            '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px;" class="char-20">Active Case</div>' +
            '</div>');
        $.each(sc.char, function (i, v) {
            if (v.show) {
                $("#room_left_walk_sub").append('<div class="cursor-hover char-walkthrough" data-name="' + v.name + '">' +
                    '<img src="./images/speaker/' + v.image + '" style="width:' + 100 * g.ratio + 'px; display:inline-block" class="resize"/>' +
                    '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px;" class="char-20">' + v.display + '</div>' +
                    '</div>');
            }
        });
        $('.char-walkthrough').click(function () {
            g.walk = $(this).data("name");
            char.makeWalk();
        });
    }
    else {
        if (g.walk === "oncase") {
            var oncase = g.get("oncase");
            var oncaseText = '';
            $("#room_left_walk_sub").append('<div style="height:' + 80 * g.ratio + 'px;" class="resize"></div>');
            $("#room_left_walk_sub").append('<div style="font-size:' + 20 * g.ratio + 'px;" class="cursor-hover resize char-walkthrough-return">' +
                '<img src="./images/general/arrowLeft.png" style="dispay:inline-block; height:' + 60 * g.ratio + 'px; margin-right:' + 40 * g.ratio + 'px;"/>' +
                'Go Back</div>');
            $("#room_left_walk_sub").append('<div style="text-align:center;">' +
                '<img src="./images/general/magglass.png" style="width:' + 100 * g.ratio + 'px;" class="resize"/>' +
                '</div>' +
                '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px; text-align:center; width:100%;" class="char-20">Active Case</div>');

            switch (oncase) {
                case "smolpp":
                case "bigboobs":
                case "bigass":
                case "dslLips":
                    oncaseText = "Go home and sleep to transition. ";
                    break;
                case "cult0":
                    oncaseText = "Get information on the cult. ";
                    break;
                case "redroom":
                    oncaseText = "Take the elevator up to the Red Room and pass the tests. ";
                    break;
                case "gloryholebj":
                    oncaseText = "Visit the glory hole during the weekend before 5PM. It's located in the men's bathroom " +
                        "at the park. ";
                    break;
                case "shopping":
                    oncaseText = "Visit Tiffany at The Toy Store for your shopping trip!";
                    break;
                case "clothes0":
                case "clothes1":
                case "clothes2":
                case "clothes3":
                    oncaseText = "Visit Mr. Jones at his Mansion north east of the suburbs. Follow his instructions. ";
                    break;
                case "dinerfail":
                case "dinersuccess":
                    oncaseText = "Report your investigation to Missy in her office. ";
                    break;
                case "diner":
                    oncaseText = "Report to the Naked Beaver diner and try to figure out which waitress has been " +
                        "stealing from Jeffery. ";
                    break;
                case "sewer":
                    oncaseText = "First visit Gertrude in the gym to get the crowbar. Then use that crowbar to enter  " +
                        "the sewer and fight the clown clan to the very last room to get Missy's Red Box. " +
                        "Once you get the Red Box Return to Missy's office.";
                    break;
                default:
                    break;
            }
            $("#room_left_walk_sub").append('<ul id="room_left_walk_sub_list">' +
                '<li style="font-size:' + 20 * g.ratio + 'px; color:#ffff33;" class="char-20">' +
                oncaseText + '</li></ul>');
            if (g.roomID === 0) {
                room0.main();
                $("#room_left_walk").show();
            }
            $(".char-walkthrough-return").click(function () {
                g.walk = null;
                char.makeWalk();
            });
        }
        else {
            var reverseEvent = new Array();
            var displayArray = new Array();
            var thisChar = sc.get(g.walk);
            var pointer = 0;
            for (i = 0; i < sc.events.length; i++) {
                if (sc.events[i].name === g.walk && sc.events[i].step >= 0) {
                    reverseEvent.push({ step: sc.events[i].step, txt: sc.events[i].txt, ach: sc.events[i].ach });
                    if (sc.events[i].step <= thisChar.step)
                        pointer = reverseEvent.length - 1;
                }
            }
            $("#room_left_walk_sub").append('<div style="height:' + 80 * g.ratio + 'px;" class="resize"></div>');
            $("#room_left_walk_sub").append('<div style="font-size:' + 20 * g.ratio + 'px;" class="cursor-hover resize char-walkthrough-return">' +
                '<img src="./images/general/arrowLeft.png" style="dispay:inline-block; height:' + 60 * g.ratio + 'px; margin-right:' + 40 * g.ratio + 'px;"/>' +
                'Go Back</div>');
            $("#room_left_walk_sub").append('<div style="text-align:center;">' +
                '<img src="./images/speaker/' + thisChar.image + '" style="width:' + 100 * g.ratio + 'px;" class="resize"/>' +
                '</div>' +
                '<div style="display:inline-block; font-size:' + 20 * g.ratio + 'px; text-align:center; width:100%;" class="char-20">' + thisChar.display + '</div>');

            for (i = 0; i < reverseEvent.length; i++) {
                if (i === pointer)
                    displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#ffff33;" class="char-20">' +
                        reverseEvent[i].txt + '</li>');
                else if (i === pointer + 1)
                    displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#aaa;" class="char-20">' +
                        reverseEvent[i].txt + '</lii>');
                else if (reverseEvent[i].step < thisChar.step) {
                    if (reverseEvent[i].ach || reverseEvent[i].step === 0)
                        displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#aaa;" class="char-20">' +
                            reverseEvent[i].txt + '</li>');
                    else
                        displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#666; text-decoration: line-through;" class="char-20">' +
                            reverseEvent[i].txt + '</li>');
                }
                else
                    displayArray.push('<li style="font-size:' + 20 * g.ratio + 'px; color:#666;" class="char-20" type="circle">' +
                        '...</li>');
            }
            $("#room_left_walk_sub").append('<ul id="room_left_walk_sub_list"></ul>');
            for (i = displayArray.length - 1; i >= 0; i--)
                $("#room_left_walk_sub_list").append(displayArray[i]);

            if (g.roomID === 0) {
                room0.main();
                $("#room_left_walk").show();
            }
            $(".char-walkthrough-return").click(function () {
                g.walk = null;
                char.makeWalk();
            });
        }
    }
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
            var tempEnergy = Math.floor((g.get("energy") / g.get("maxenergy")) * 100);
            $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc;">' +
                '<div style="padding:10%;">' +
                '<div style="font-size:' + 20 * g.ratio + 'px; margin-bottom:5px;">Hormone Levels</div>' +
                '<div style="width: 100%; height:' + 15 * g.ratio + 'px; background:#00abff; border-radius:20px; border:solid 1px #000000;">' +
                '<div style="width: ' + g.get("hormone") + '%; height:' + 15 * g.ratio + 'px; background:#ff5ed1; border-radius:20px 0 0 20px;"></div>' +
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
            g.sumSissy();
            $('#menu_parent').append('<img class="sissyai-kill" src="./images/phone/sissy.jpg" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + '"/>');
            $('#menu_parent').append('<div class="sissyai-kill" style="color:#e1018f; position:absolute; ' + g.makeCss(250, 500, 650, 700) + ' font-size:' + (40 * g.ratio) + 'px;">' +
                '<table style="width:100%;">' +
                '<tr><td>SISSY Points: </td><td> ' + (g.sp.total - g.get("usedSissyPoints")) + '</td></tr>' +
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
                    g.sissyview();
                }, 800);
            });
            break;
        case "admin":
            $(".menu-buttonKill").remove();
            $('#menu_parent').append('<div id="cheat_Killme" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                '<h2>Cheat Menu</h2>' +
                '<label>Password</label> ' +
                '<span id="cheat_message" style="color:#aa3333;"></span>' +
                '<input style="width:92%;" type="text" id="cheat_input"/><br/>' +
                '<button type="button" class="intro-button" id="cheat_passwordSubmit">Submit</button>' +
                'This cheat menu is a thank you to all the great support I\'ve received from my $5 anf $10 Patrons.<br/>Thank you so much for playing.' +
                '</div>');
            $('#cheat_passwordSubmit').click(function () {
                var cheatString = $("#cheat_input").val().replace(/\W/g, '').toLowerCase();
                $("#cheat_message").html("");

                if (btoa(cheatString) === g.pw) {
                    $("#cheat_Killme").remove();
                    $('#menu_parent').append('<div class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center;">' +
                        '<h2>Cheat Menu</h2>Thank you for your support!<hr/><br />' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="money">+$1000</button> Add Money <br/><br />' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="horneyp">+</button> Sissy <button type="button" class="admin-mod menu-blueButton" data-type="horneyd">-</button><br/><br />' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="energyp">+</button> Energy <button type="button" class="admin-mod menu-blueButton" data-type="energyd">-</button><br/><br />' +
                        '<div>Lola / Eva: ' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="lolaEva" data-step="4">Bottle</button>' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="lolaEva" data-step="8">T or D</button>' +
                        '</div>' +
                        '<div>Missy: ' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="missy" data-step="10">School</button>' +
                        '</div>' +
                        '<div>Zoey' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="zoey" data-step="11">After Meeting Chloe</button>' +
                        '</div>' +
                        '<div>Sissy School' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="school" data-step="28">Post Diner</button>' +
                        '<button type="button" class="admin-mod menu-blueButton" data-type="school" data-step="19">Post Sewer</button>' +
                        '</div>' +
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
                                g.mod("energy", 1000);
                                $("#admin-mod-message").text("New Energy: " + g.get("energy"));
                                break;
                            case "energyd":
                                g.mod("energy", -500);
                                $("#admin-mod-message").text("New Energy: " + g.get("energy"));
                                break;
                            case "horneyp":
                                g.mod("cheatPoints", 1);
                                $("#admin-mod-message").text("New Sissy: " + g.get("sissy"));
                                break;
                            case "horneyd":
                                g.mod("cheatPoints", -1);
                                $("#admin-mod-message").text("New Sissy: " + g.get("sissy"));
                                break;
                            case "lolaEva":
                                var thisStep = $(this).data("step");
                                if (thisStep === 4) {
                                    if (sc.getstep("lola") < 5) {
                                        sc.setstep("me", -1);
                                        sc.setstepAll("eva", 4);
                                        sc.setstepAll("lola", 5);
                                        pic.add("lolaTopless");
                                        g.popUpNotice("You've skipped past Spin the bottle with Lola and Eva");
                                    }
                                    else
                                        g.popUpNotice("You've already passed this point. ");
                                }
                                else if (thisStep === 8) {
                                    if (sc.getstep("lola") < 8) {
                                        sc.setstep("me", -1);
                                        sc.setstep("landlord", -1);
                                        sc.setstep("lola", 8);
                                        sc.setstep("eva", 7);
                                        g.roomMapAccess(16, false, false);
                                        char.room(0);
                                        pic.add("lolaTopless");
                                        g.popUpNotice("You've skipped past Truth or Dare with Lola and Eva");
                                    }
                                    else
                                        g.popUpNotice("You've already passed this point.");
                                }
                                break;
                            case "missy":
                                var thisStepm = $(this).data("step");
                                if (thisStepm === 10) {
                                    if (sc.getstep("missy") < 10) {
                                        inv.add("pi_lic");
                                        cl.add("pants", "s");
                                        cl.add("shirt", "s");
                                        cl.add("shoes", "d");
                                        cl.add("socks", "b");
                                        cl.add("panties", "w");
                                        cl.add("accessories", "piggy");
                                        if (cl.c.chest === 0)
                                            cl.c.chest = 1;
                                        g.mod("fitnessLevel", 1);
                                        sc.setstep("tiffany", -4);
                                        sc.setstep("tiffany", 5);
                                        sc.setstep("me", -1);
                                        sc.setstep("me", -2);
                                        sc.setstepAll("missy", 10);
                                        g.set("bodyhair", 0);
                                        inv.add("razor", 1);
                                        sc.setstepAll("me", 2);
                                        g.roomMapAccess(203, true, false);
                                        cl.display();
                                        g.popUpNotice("You have skipped ahead to the sissy school.");
                                    }
                                    else
                                        g.popUpNotice("You've already passed this point.");
                                }
                                break;
                            case "zoey":
                                var zoeyStep = sc.getstep("zoey");
                                if (zoeyStep < 11) {
                                    sc.setstepAll("zoey", 11);
                                    sc.setstep("zoey", -1);
                                    sc.setstep("zoey", -2);
                                    scc.love("zoey", 100, 90);
                                    g.popUpNotice("You've advanced beyond Chloe's breakup and meeting Stormy. ");
                                }
                                else
                                    g.popUpNotice("You've already passed this point.");
                                break;
                            case "school":
                                var thisSteps = $(this).data("step");
                                if (sc.getstep("missy") < 10) {
                                    sc.setstepAll("me", 2);
                                    inv.add("pi_lic");
                                    cl.add("pants", "s");
                                    cl.add("shirt", "s");
                                    cl.add("shoes", "d");
                                    cl.add("socks", "b");
                                    cl.add("panties", "w");
                                    cl.add("accessories", "piggy");
                                    if (cl.c.chest === 0)
                                        cl.c.chest = 1;
                                    g.mod("fitnessLevel", 1);
                                    sc.setstep("tiffany", -4);
                                    sc.setstep("tiffany", 5);
                                    sc.setstep("me", -1);
                                    sc.setstep("me", -2);
                                    sc.setstepAll("missy", 10);
                                    g.set("bodyhair", 0);
                                    inv.add("razor", 1);
                                    g.roomMapAccess(203, true, false);
                                    cl.display();

                                }
                                if (thisSteps === 28) {
                                    if (!g.sissy[28].ach) {
                                        sc.setstep("tiffany", 16);
                                        sc.setstep("candy", 1);
                                        cl.add("shirt", "r");
                                        cl.add("pants", "k");
                                        cl.add("shoes", "fb");
                                        cl.add("chatity", "cage");
                                        cl.add("pj", "gown");
                                        cl.add("bra", "w");
                                        sc.setstepAll("jeffery", 8);
                                        sc.setstep("holly", 3);
                                        sc.setstepAll("treyvon", 2);
                                        g.sissy[0].ach = true;
                                        g.sissy[1].ach = true;
                                        g.sissy[20].ach = true;
                                        g.sissy[21].ach = true;
                                        g.sissy[22].ach = true;
                                        g.sissy[24].ach = true;
                                        g.sissy[28].ach = true;
                                        g.sissy[29].ach = true;
                                        g.sissy[51].ach = true;
                                        g.sissy[54].ach = true;
                                        g.popUpNotice("You've progressed past the Diner Event. ");
                                    }
                                    else {
                                        g.popUpNotice("You've already passed this point.");
                                    }
                                }
                                else if (thisSteps === 19) {
                                    if (!g.sissy[19].ach) {
                                        g.sissy[54].ach = true;
                                        g.sissy[0].ach = true;
                                        g.sissy[1].ach = true;
                                        g.sissy[20].ach = true;
                                        g.sissy[2].ach = true;
                                        g.sissy[3].ach = true;
                                        g.sissy[6].ach = true;
                                        g.sissy[12].ach = true;
                                        g.sissy[15].ach = true;
                                        g.sissy[16].ach = true;
                                        g.sissy[19].ach = true;
                                        inv.add("sewer");
                                        g.popUpNotice("You've progressed past the Sewer Event. ");
                                    }
                                    else {
                                        g.popUpNotice("You've already passed this point.");
                                    }
                                }
                                break;
                        }
                    });
                } else {
                    $("#cheat_message").html("It appears the pawword doesn't work. If you're a $5 or $10 Patron it should be in the posts. ");
                }



            });

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
            $('#menu_parent').append('<div style="position:absolute; ' + g.makeCss(761, 617, 167, 649) + '">' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-street" name="switch-map" value="street" checked />' +
                '<label for="radio-street">Street</label>' +
                '<input type="radio" id="radio-houses" name="switch-map" value="house" />' +
                '<label for="radio-houses">Houses</label>' +
                ' Map View' +
                '</div>' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-yes" name="switch-fantasy" value="yes" checked />' +
                '<label for="radio-yes">Off</label>' +
                '<input type="radio" id="radio-no" name="switch-fantasy" value="no" />' +
                '<label for="radio-no">On</label>' +
                ' Fantasy Creatures' +
                '</div>' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-easy" name="switch-difficulty" value="easy" checked />' +
                '<label for="radio-easy">Easy</label>' +
                '<input type="radio" id="radio-medium" name="switch-difficulty" value="medium" />' +
                '<label for="radio-medium">Medium</label>' +
                '<input type="radio" id="radio-hard" name="switch-difficulty" value="hard" />' +
                '<label for="radio-hard">Hard</label>' +
                ' Difficulty' +
                '</div>' +
                '<div class="switch-field" >' +
                '<input type="radio" id="radio-cheatOff" name="switch-cheat" value="off" checked />' +
                '<label for="radio-cheatOff">Off</label>' +
                '<input type="radio" id="radio-cheatOn" name="switch-cheat" value="on" />' +
                '<label for="radio-cheatOn">On</label>' +
                ' Cheat Mode' +
                '</div>' +
                '</div>');
            $('#menu_parent').append('<img src="./images/phone/power.png" style="position:absolute; ' + g.makeCss(90, 90, 937, 915) + '" data-type="close" class="menu-button"/>');
            $('#menu_parent').append('<img src="./images/phone/menu.png" style="position:absolute; ' + g.makeCss(70, 100, 950, 750) + '" data-type="menu" class="menu-button"/>');
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
    scc: scc.save(),
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
    
    g.load(tp.g, tp.version);
    inv.load(tp.inv);
    cl.load(tp.cl);
    sc.load(tp.sc);
    scc.load(tp.scc);
    try {
        pic.load(tp.pic);
    }
    catch (err) {
        var thisIsfoobar = 1;
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

    //Remove later, unfound bug, maybe old save
    if (sc.getstep("missy") > 1)
        g.roomMapAccess(203, true, true);
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
        "width": 370 * g.ratio + "px",
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
    $('#room-change').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 10 * g.ratio + "px",
        "left": 1500 * g.ratio + "px"
    });
    $('#room-time').css({
        "width": 100 * g.ratio + "px",
        "height": 100 * g.ratio + "px",
        "top": 10 * g.ratio + "px",
        "left": 1350 * g.ratio + "px"
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
            //case "sissyLevel":
            //    $("#rl_sissy").html("Sissy: " + g.st[i].t);
            //    break;
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

    if (hormone < 10) 
        $("#rl_hormone").html(" &nbsp;&nbsp;Hairy Boy");
    else if (hormone < 50) 
        $("#rl_hormone").html(" &nbsp;&nbsp;Boyish");
    else if (sissy < 75) 
        $("#rl_hormone").html(" &nbsp;&nbsp;Feminine");
    else 
        $("#rl_hormone").html(" &nbsp;&nbsp;Girly");
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

    g.load(tp.g, tp.version);
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
    char.menu();
    $('.hide-start').show();
    $('.menu-button[data-type="close"]').click();

    $("#room_export").slideUp();
};