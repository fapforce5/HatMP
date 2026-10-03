//Girl GloryHole Broom
var room1 = {};
room1.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "start",
            "left": 322,
            "top": 375,
            "width": 316,
            "height": 45,
            "image": "1_startScreen/start.png"
        },
        {
            "type": "btn",
            "name": "load",
            "left": 1280,
            "top": 375,
            "width": 321,
            "height": 46,
            "image": "1_startScreen/load.png"
        },
        {
            "type": "btn",
            "name": "patron",
            "left": 852,
            "top": 375,
            "width": 217,
            "height": 51,
            "image": "1_startScreen/become_a_patron_button.png"
        }
    ];

    //var navList = [0];

    $('.room-left').hide();
    $('#room_footer').hide();
    $(".room-topper").hide();
    $.each(btnList, function (i, v) {
        nav.button(v, 1);
    });

    nav.t({
        type: "zimg",
        name: "version",
        left: 1450,
        top: 80,
        font: 20,
        hex: "#ffffff",
        stroke: "black",
        text: g.versionText + "<br/>The last release before the next release"
    }, 1);

};

room1.btnclick = function (name) {
    switch (name) {
        case "start":
            g.pass = "";
            g.newLoad = false;
            char.initGame();
            dreams.add("work");
            $('.room-left').show();
            $('#room_footer').show();
            $(".room-topper").show();
            char.room(3);
            break;
        case "help":
            char.room(2);
            break;
        case "load":
            g.newLoad = true;
            phone.build("save");
            break;
        case "patron":
            window.open("https://www.patreon.com/FF5", '_blank');
            break;
        case "charismaRoll":
            charisma.drawRoll();
            break;
        case "charismaComplete":
            charisma.complete();
            break;
        default:
            break;
    }
};

room1.chatcatch = function (callback) {
    switch (callback) {
        
        
        default:
            break;
    }
};

room1.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        }
    ];
    return cArray[chatID];
};

invoker.registerRoom(1, room1);
