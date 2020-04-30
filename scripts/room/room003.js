//Room name
var room3 = {};
room3.main = function () {
    $('#room_footer').hide();
    $('.room-left').hide();

    $("#room-background").html('<div class="intro-body"><div class="intro-top">Hermaphrodity</div>' +
        '<div class="intro-bottom">and the Mystery of the Missing Specimens</div>' +
        'This game is best viewed full screen. To make your browser full screen press the F11 key. To exit full ' +
        'screen press the F11 key again. <br /><br />' +
        'This game contains themes and images that are not suitable for minors. <br /><br />' +
        'This is a work of fiction. Names, characters, businesses, places, events, locales, ' +
        'and incidents are either the products of the author’s imagination or used in a fictitious ' +
        'manner. Any resemblance to actual persons, living or dead, or actual events is purely coincidental.<br />' +
        'Click Next to play the game. Press "Exit Game" to exit.<br />'  +
        'Happy Fapping!<br />' +
        
        '<button style="width:49%; margin-right:1%;" class="intro-button" onclick="room3.btnclick(0)">Next</button>' +
        '<button style="width:49%;" class="intro-button" onclick="room3.btnclick(1)">Exit Game (Underage)</button>' +
        
        
        '</div>');
};

room3.btnclick = function (name) {
    switch (name) {
        case 0:
            char.room(2);
            break;
        case 1:
            window.open("https://google.com", "_self");
            break;
        default:
            break;
    }
};

room3.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room3.chat = function (chatID) {
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
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};