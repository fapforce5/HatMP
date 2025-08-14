var privateChat = {};

function chat(chatID, roomID) {

    if (chatID !== -1) {
        privateChat.makeChat(window[g.room(roomID)]["chat"](chatID), chatID, roomID);
    }
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
    else if (document.selection) {
        document.selection.empty();
    }
}

privateChat.kill = function(){
    $('#room_chatOverlay').hide();
    $('.room-chatBtnClick').html('').hide().data('chatid', 0).data('roomid', 0).data('callback', '');
    $('#room_footerSpeach').html("");
    $('#room_chatSpeaker').html('');
    $('#room_footer').show();
};

privateChat.makeChat = function (entry, chatID, roomID) {
    if (entry !== null) {
        var thisSpeaker = privateChat.speakerInfo(entry.speaker);
        $('#room_footer').hide();
        if (!$('#room_chatOverlay').is(":visible")) {
            $('#room_chatOverlay').show();
            //$('#char_charDisplay').hide();
        }
        var counter = 0;
        $('.room-chatBtnClick').html('').hide().data('chatid', 0).data('roomid', 0).data('callback', '');
        $('#room_footerSpeach').html(entry.text);
        $('#room_chatSpeaker').html('<img src="' + thisSpeaker.img + '" /><br/>' + (thisSpeaker.name === "Random" ? "" : thisSpeaker.name));
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
        $('.room-chatBtn').css('width', "calc(" + (100 / counter) + '% - ' + ((72 * g.ratio) / counter) + "px)");
        if (g.skipChat) {
            setTimeout(function () {
                privateChat.skipChat();
            }, 100);
        }
        else {
            if(counter === 1)
                $("#room_chatskip").show();
            else
                $("#room_chatskip").hide();
        }
    }
    else {
        g.error("chat", "chatID:" + chatID + " roomID: " + roomID);
        $('#room_footer').show();
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
    if (charName[0] === "!") {
        var getTrivial = sc.trivial(charName);
        return {
            img: "./images/speaker/trivial/" + getTrivial.image,
            name: getTrivial.display
        };
    }
    else if (charName[0] === "*") {
        return {
            img: "./images/room/1004_rape" + rape.char.chat,
            name: rape.char.displayName
        };
    }
    else {
        for (var i = 0; i < sc.char.length; i++) {
            if (sc.char[i].name === charName) {
                if (charName === "me" && g.roomID > 175 && g.roomID < 250 && sissy.st[9].ach) {
                    return {
                        img: "./images/speaker/" + sc.char[i].image,
                        name: "Sissy Trainee"
                    };
                }
                else {
                    return {
                        img: "./images/speaker/" + sc.char[i].image,
                        name: sc.char[i].display
                    };
                }
            }
        }
        return {
            img: "./images/speaker/rand.png", name: ""
        };
    }
};

privateChat.skipChat = function () {
    if (g.roomTimeout === null && g.roomTimeout2 === null) {
        if ($('#room_chatBtn0').is(":visible")) {
            if (!$('#room_chatBtn1').is(":visible") && !$('#room_chatBtn2').is(":visible")) {
                $('#room_chatBtn0').click();
            }
            else {
                g.skipChat = false;
            }
        }
    }
};

$(document).ready(function () {
    $(document).bind('keyup', function (e) {
        if (e.which === 32) {//space bar
            privateChat.skipChat();
        }
        else if(e.which === 83){
            if ($("#room_chatskip").is(":visible")) {
                if (g.skipChat) {
                    g.skipChat = false;
                }
                else {
                    g.skipChat = true;
                    privateChat.skipChat();
                }
            }
        }
    });

    $("#room_chatskip").click(function () {
        g.skipChat = true;
        privateChat.skipChat();
    });

    $('.room-chatBtnClick').click(function () {
        var roomID = $(this).data('roomid');
        var chatID = $(this).data('chatid');
        var callback = $(this).data('callback');

        if (chatID < 0) {
            $('#room_chatOverlay').hide();
            $('.room-chatBtnClick').html('').hide().data('chatid', 0).data('roomid', 0).data('callback', '');
            $('#room_footerSpeach').html("");
            $('#room_chatSpeaker').html('');
            $('#room_footer').show();
            g.skipChat = false;
            //$('#char_charDisplay').show();
        }
        else
            chat(chatID, roomID);
        if (callback !== '')
            window[g.room(roomID)]["chatcatch"](callback);

    });
});