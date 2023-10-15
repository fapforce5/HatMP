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
        left: 1520,
        top: 1010,
        font: 20,
        hex: "#ffffff",
        text: g.versionText
    }, 1);

};

room1.btnclick = function (name) {
    switch (name) {
        case "start":
            g.pass = "";
            char.initGame();
            $('.room-left').show();
            $('#room_footer').show();
            $(".room-topper").show();
            char.room(3);
            break;
        case "help":
            char.room(2);
            break;
        case "load":
            menu.initBuild("save");
            g.newLoad = true;
            break;
        case "patron":
            window.open("https://www.patreon.com/FF5", '_blank');
            break;
        case "quickfightFight":
            quickFight.drawFight();
            break;
        case "quickfightRun":
            quickFight.run();
            break;
        case "quickfightcomplete":
            quickFight.complete();
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
        case "killFame":
            nav.killbutton("fameRandomEvent");
            break;
        case "rape1":
            nav.killall();
            fame.position1(fame.rapechar);
            break;
        case "rape2":
            nav.killall();
            fame.position2(fame.rapechar);
            break;
        case "rape3":
            char.addtime(67);
            char.room(g.roomID);
            break;
        
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