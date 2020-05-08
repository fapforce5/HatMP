/*
speaker: 
me: me
sister 1 ponytail: Lola
sister2 ponytail: Eva
mother: Mom
Dominatrix: Missy

construction foreman: Forman,
contruction receptionist: Bambi
*/

var privateChat = {};

function chat(chatID, roomID) {

    if (chatID !== -1) {
        var entry = window[g.room(roomID)]["chat"](chatID);
        if (entry !== null) {
            var thisSpeaker = privateChat.speakerInfo(entry.speaker);
            $('#room_footer').hide();
            if (!$('#room_chatOverlay').is(":visible")) {
                $('#room_chatOverlay').show();
                $('#char_charDisplay').hide();
            }
            var counter = 0;
            $('.room-chatBtnClick').html('').hide().data('chatid', 0).data('roomid', 0).data('callback', '');
            $('#room_footerSpeach').html(entry.text);
            $('#room_chatSpeaker').html('<img src="' + thisSpeaker.img + '" /><br/>' + thisSpeaker.name);
            if (entry.button.length === 0) {
                $('#room_chatBtn0').html('Close').show().data('chatid', -1).data('roomid', roomID).data('callback', '');
                counter = 1;
            }
            else {
                $.each(entry.button, function (i, v) {
                    $('#room_chatBtn' + i).html(v.text).data('chatid', v.chatID).data('roomid', roomID).data('callback', v.callback).show();
                    counter++;
                });
            }
            counter = (counter === 0 ? counter = 1 : counter);
            $('.room-chatBtn').css('width', (99 / counter) + '%');
        }
        else {
            g.error("chat", "chatID:" + chatID + " roomID: " + roomID);
            $('#room_footer').show();
        }
    }
}

privateChat.images = function (charName) {
    charName = charName.toLowerCase();
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === charName) {
            return "./images/speaker/" + sc.char[i].image;
        }
    }
    return "";
};

privateChat.speakerInfo = function (charName) {
    charName = charName.toLowerCase();
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === charName) {
            return {
                img: "./images/speaker/" + sc.char[i].image, name: sc.char[i].display
            };
        }
    }
    return {
        img: "./images/speaker/rand.png", name: ""
    };
};

$(document).ready(function () {
    $(document).bind('keyup', function (e) {
        if (e.which === 32) {//space bar
            if ($('#room_chatBtn0').is(":visible")) {
                if (!$('#room_chatBtn1').is(":visible") && !$('#room_chatBtn2').is(":visible")) {
                    $('#room_chatBtn0').click();
                }
            }
        }
    });
    $('.room-chatBtnClick').click(function () {
        var roomID = $(this).data('roomid');
        var chatID = $(this).data('chatid');
        var callback = $(this).data('callback');
        if (chatID === 0 && roomID === 0) { console.log("chatID 0 and roomId 0");}
        else {
            if (chatID < 0) {
                $('#room_chatOverlay').hide();
                $('.room-chatBtnClick').html('').hide().data('chatid', 0).data('roomid', 0).data('callback', '');
                $('#room_footerSpeach').html("");
                $('#room_chatSpeaker').html('');
                $('#room_footer').show();
                $('#char_charDisplay').show();
            }
            else
                chat(chatID, roomID);
            if (callback !== '')
                window[g.room(roomID)]["chatcatch"](callback);
        }
    });
});