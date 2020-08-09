//Girl GloryHole Broom
var room2 = {};

room2.main = function () {
    g.newLoad = false;
    $('#room_footer').hide();
    $('.menu-tab').show();
    $('.room-topper').hide();
    nav.killall();
    $('.room-left').hide();
    room2.chatcatch('init');

};

room2.btnclick = function (name) {
    if (name === "click") {
        nav.button({
            "type": "btn",
            "name": "click1",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "1_startScreen/chapter1.jpg"
        }, 2);
    }
    else if (name === "click1") {
        $('.room-left').show();
        $('#room_footer').show();
        $(".room-topper").show();
        $('.hide-start').show();
        char.room(7);
    }
};

room2.chatcatch = function (callback) {
    if (callback === "doit") {
        var charName = $('<div/>').text($('#room_002Name').val()).html().trim();
        var ma = $('<div/>').text($('#room_002ma').val()).html().trim();
        var sisRel = $('<div/>').text($('#room_002sa').val()).html().trim();
        var girlName = $('<div/>').text($('#room_002gn').val()).html().trim();

        sc.setcharname("landlord", ma);
        sc.setcharname("el", sisRel);
        sc.setcharname("me", charName.length === 0 ? "Alex" : charName);
        g.set("girlname", charName.length === 0 ? "Scarlett" : girlName);
    }
    else if (callback === "init") {
        var tempLine = '<div class="intro-wrapper"><div style="height:' + (800 * g.ratio) + 'px;" class="intro-wrapper-sub">' +
            '<div class="intro-wrapper-full"><div class="intro-wrapper-left"><img src="images/speaker/me.png"/></div><div class="intro-wrapper-right">Your Name<br /><input type="text" id="char_-1" data-name="-1" /></div></div>' +
            '<div class="intro-wrapper-full"><div class="intro-wrapper-left"><img src="images/speaker/me_girl.png"/></div><div class="intro-wrapper-right">Girly Name<br /><input type="text" id="room_002gn"/></div></div>' +
            '<div class="intro-wrapper-full"><div class="intro-wrapper-left"><img src="images/speaker/lolaEva.png"/></div><div class="intro-wrapper-right">' + sc.n('lola') + ' and ' + sc.n('eva') + '\'s Relationship<br /><input type="text" id="room_002sa"/></div></div>';
            

        $.each(sc.char, function (i, v) {
            if (v.setName && v.name !== "me") {
                var addClass = v.name === "landlord" ? "" : " intro-hide";
                tempLine = tempLine.concat('<div class="intro-wrapper-full' + addClass + '"><div class="intro-wrapper-left"><img src="images/speaker/' + sc.char[i].image + '"/></div><div class="intro-wrapper-right"><input class="room2-getName" type="text" id="char_' + i + '" data-name="' + i + '" /></div></div>');
            }
        });

        tempLine = tempLine.concat('</div><div class="intro-wrapper-sub">' +
            '<button type="button" id="room_002SetAllNames">View All Names</button>' +
            '<button type="button" id="room_002ClearAllNames">Restore All Names</button>' +
            '<div class="intro-difficulty">' +
            '<button class="intro-changeDiff" type="button" data-toggle="-1"> &lt; </button>' + 
            '<div id="intro_diff" data-diff="1">Normal</div>' + 
            '<button class="intro-changeDiff float-right" type="button" data-toggle="1"> &gt; </button></div>' + 
            '<br /><br /><br />' +
            '<button type="button" id="room_002SetName">Save Names and Start</button>');

        $('#room-buttons').html(tempLine + "</div>");

        $('#char_-1').val($("<textarea/>").html(sc.n("me")).val());
        $.each(sc.char, function (i, v) {
            $('#char_' + i).val($("<textarea/>").html(v.display).val());
        });

        $('#room_002sa').val($("<textarea/>").html(sc.n("el")).val());
        $('#room_002gn').val($("<textarea/>").html(g.get("girlname")).val());
        
        $('.intro-changeDiff').click(function () {
            var currentDiff = parseInt($('#intro_diff').data('diff'));
            var changeDiff = parseInt($(this).data('toggle'));
            currentDiff = currentDiff + changeDiff;
            if (currentDiff > 2)
                currentDiff = 2;
            if (currentDiff < 0)
                currentDiff = 0;
            $('#intro_diff').data('diff', currentDiff);
            switch (currentDiff) {
                case 0:
                    $('#intro_diff').text("Easy - Like Sunday Morning");
                    break;
                case 1:
                    $('#intro_diff').text("Normal");
                    break;
                case 2:
                    $('#intro_diff').text("Hard.. heheh you said 'hard'");
                    break;
                default:
                    $('#intro_diff').text("ERROR");
                    break;
            }
        });

        $('#room_002SetAllNames').click(function () {
            if ($('.intro-hide').first().is(":visible")) {
                $('.intro-hide').slideUp("fast");
                $('#room_002SetAllNames').text("View All Names");
            }
            else {
                $('.intro-hide').slideDown("fast");
                $('#room_002SetAllNames').text("Hide Names");
            }
        });

        $('#room_002ClearAllNames').click(function () {
            $.each(g.char, function (i, v) {
                $('#char_' + i).val($("<textarea/>").html(v.display).val());
            });

            $('#char_-1').val($("<textarea/>").html(sc.n("me")).val());
            $('#room_002sa').val($("<textarea/>").html(sc.n("el")).val());
            $('#room_002gn').val($("<textarea/>").html("Scarlett").val());
        });

        $("#room_002SetName").click(function () {

            $('.room2-getName').each(function () {
                var entry = $(this).data('name');
                sc.char[entry].display = g.cleanText($(this).val());
            });

            sc.setcharname("me", g.cleanText($('#char_-1').val()));
            sc.setcharname("el", g.cleanText($('#room_002sa').val()));
            g.set("girlname", g.cleanText($('#room_002gn').val()));

            var thisDiff = parseInt($("#intro_diff").data('diff'));
            g.set("difficulty", isNaN(thisDiff) ? 1 : ((thisDiff < 0) ? 0 : ((thisDiff > 2) ? 2 : thisDiff)));
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "click",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1_startScreen/help.jpg"
            }, 2);
            
            //$('#room_002Start').click(function () {
            //    $('.room-left').show();
            //    $('#room_footer').show();
            //    $(".room-topper").show();
            //    $('.hide-start').show();
            //    char.room(7);
            //});

        });
    }
};

room2.chat = function(chatID){
    return [];
};
