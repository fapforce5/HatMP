//Girl GloryHole Broom
var room1 = {};
room1.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "start",
            "left": 802,
            "top": 454,
            "width": 316,
            "height": 45,
            "image": "1_startScreen/start.png"
        },
        {
            "type": "btn",
            "name": "load",
            "left": 800,
            "top": 605,
            "width": 321,
            "height": 46,
            "image": "1_startScreen/load.png"
        },
        {
            "type": "btn",
            "name": "patron",
            "left": 860,
            "top": 725,
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
        left: 1350,
        top: 950,
        font: 40,
        hex: "#ffffff",
        stroke: "black",
        text: g.versionText + "<br/>Stops after Sissy School Final"
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