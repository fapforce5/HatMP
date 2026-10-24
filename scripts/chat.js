var privateChat = {};

privateChat.resetButtons = function () {
    $('.room-chatBtnClick').html('').hide().data('chatid', 0).data('roomid', 0).data('callback', '');
};

privateChat.hideOverlay = function () {
    $('#room_chatOverlay').hide();
    $('#room_footerSpeach').html("");
    $('#room_chatSpeaker').html('');
    $('#room_footer').show();
};

privateChat.close = function () {
    privateChat.hideOverlay();
    privateChat.resetButtons();
    g.skipChat = false;
};

privateChat.setButton = function (index, text, chatID, roomID, callback) {
    $('#room_chatBtn' + index)
        .html(text)
        .data('chatid', chatID)
        .data('roomid', roomID)
        .data('callback', callback)
        .attr('title', 'Shortcut: ' + (index + 1))
        .show();
};

privateChat.updateSkipButton = function (buttonCount) {
    if (g.skipChat) {
        setTimeout(function () {
            privateChat.skipChat();
        }, 100);
    }
    else if (buttonCount === 1)
        $("#room_chatskip").show();
    else
        $("#room_chatskip").hide();
};

privateChat.visibleButtons = function () {
    return $('.room-chatBtnClick:visible');
};

privateChat.selectButtonByIndex = function (index) {
    var buttons = privateChat.visibleButtons();
    if (index < 0 || index >= buttons.length)
        return false;

    buttons.eq(index).trigger('click');
    return true;
};

privateChat.getShortcutIndexFromEvent = function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
        return null;

    if (e.which >= 49 && e.which <= 57)
        return e.which - 49;

    if (e.which >= 97 && e.which <= 105)
        return e.which - 97;

    if (e.code && e.code.startsWith("Digit")) {
        var digitIndex = parseInt(e.code.replace("Digit", ""), 10) - 1;
        return digitIndex >= 0 && digitIndex < 9 ? digitIndex : null;
    }

    if (e.code && e.code.startsWith("Numpad")) {
        var numpadIndex = parseInt(e.code.replace("Numpad", ""), 10) - 1;
        return numpadIndex >= 0 && numpadIndex < 9 ? numpadIndex : null;
    }

    return null;
};

privateChat.isTypingTarget = function (target) {
    if (!target)
        return false;

    var tagName = target.tagName ? target.tagName.toLowerCase() : "";
    return tagName === "input" || tagName === "textarea" || tagName === "select" || target.isContentEditable;
};

privateChat.canHandleSpace = function (target) {
    return $('#room_chatOverlay').is(":visible") &&
        !$('#room_export').is(":visible") &&
        !privateChat.isTypingTarget(target);
};

function chat(chatID, roomID) {

    if (chatID !== -1) {
        privateChat.makeChat(invoker.invoke(roomID, "chat", chatID), chatID, roomID);
    }
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
    else if (document.selection) {
        document.selection.empty();
    }
}

privateChat.kill = function(){
    privateChat.hideOverlay();
    privateChat.resetButtons();
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
        privateChat.resetButtons();
        $('#room_footerSpeach').html(entry.text);
        var speakerImg;
        if (thisSpeaker.layers) {
            speakerImg = '<div class="room-chatSpeaker-layers">';
            $.each(thisSpeaker.layers, function (i, v) {
                speakerImg += '<img src="./images/mainChar/speaker/' + v + '" />';
            });
            speakerImg += '</div>';
        }
        else
            speakerImg = '<img src="' + thisSpeaker.img + '" /><br/>';
        $('#room_chatSpeaker').html(speakerImg + (thisSpeaker.name === "Random" ? "" : thisSpeaker.name));
        if (entry.button.length === 0) {
            privateChat.setButton(0, 'Close', -1, roomID, '');
            counter = 1;
        }
        else {
            $.each(entry.button, function (i, v) {
                privateChat.setButton(i, v.text, v.chatID, roomID, v.callback);
                counter++;
            });
        }
        counter = (counter === 0 ? counter = 1 : counter);
        $('.room-chatBtn').css('width', "calc(" + (100 / counter) + '% - ' + ((72 * g.ratio) / counter) + "px)");
        privateChat.updateSkipButton(counter);
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
                        layers: privateChat.meLayers(),
                        name: "Sissy Trainee"
                    };
                }
                else {
                    return {
                        img: "./images/speaker/" + sc.char[i].image,
                        layers: charName === "me" ? privateChat.meLayers() : null,
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

//Main character speaker portrait built from the cropped layers in images/mainChar/speaker.
//Layer order matches the #char-* order in index.html (bottom to top).
privateChat.meLayers = function () {
    if (cl.c === null)
        return null;

    let findImage = function (list, name) {
        if (name === null)
            return null;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name === name)
                return list[i].image;
        }
        return null;
    };

    let layers = [];
    layers.push("top_" + cl.c.chest + ".png");
    layers.push(cl.getmakeup().image);
    layers.push(findImage(cl.earring, cl.c.earring));
    layers.push(findImage(cl.nosering, cl.c.nosering));
    if (cl.c.cumface)
        layers.push("cum_face.png");
    layers.push(findImage(cl.necklace, cl.c.necklace));
    layers.push("lips_" + cl.c.lips + "_" + (cl.c.lipstick === null ? "nude" : cl.c.lipstick) + ".png");
    if (cl.c.pissface === null) {
        layers.push("eyes_" + cl.c.eyes + ".png");
    }
    else {
        layers.push("eyeliner_" + cl.c.pissface + ".png");
        layers.push("eyes_" + cl.c.eyes + "_f.png");
    }

    if (cl.c.wig !== null)
        layers.push(findImage(cl.wig, cl.c.wig));
    else if (cl.c.hairLength === null)
        layers.push(null);
    else if (cl.c.hairLength < 2)
        layers.push("hair_" + cl.c.hairLength + "_" + cl.c.hairColor + ".png");
    else if (cl.c.hairStyle === "leia" || cl.c.hairStyle === "bun")
        layers.push("hair_2_" + cl.c.hairColor + "_" + cl.c.hairStyle + ".png");
    else
        layers.push("hair_" + cl.c.hairLength + "_" + cl.c.hairColor + "_" + cl.c.hairStyle + ".png");

    layers.push(findImage(cl.accessories, cl.c.accessories));

    return layers.filter(x => x !== null);
};

//nav.button for a speaker portrait. "me" is drawn as stacked layers, everyone else uses btn.image.
privateChat.speakerButton = function (btn, name, roomNum) {
    let layers = name === "me" ? privateChat.meLayers() : null;
    if (layers === null) {
        nav.button(btn, roomNum);
        return;
    }
    $.each(layers, function (i, v) {
        nav.button($.extend({}, btn, { image: "../mainChar/speaker/" + v }), roomNum);
    });
};

privateChat.skipChat = function () {
    var buttons = privateChat.visibleButtons();
    if (buttons.length === 1) {
        buttons.eq(0).trigger('click');
    }
    else if (buttons.length > 1) {
        g.skipChat = false;
    }
};

$(document).ready(function () {
    $(document).on('keydown', function (e) {
        if (e.which === 32) {//space bar
            if (!privateChat.canHandleSpace(e.target))
                return;

            if (privateChat.visibleButtons().length === 1) {
                g.suppressSpaceAdvanceKeyup = true;
                e.preventDefault();
                privateChat.skipChat();
            }
        }

        var shortcutIndex = privateChat.getShortcutIndexFromEvent(e);
        if (shortcutIndex === null)
            return;
        if (!privateChat.canHandleSpace(e.target))
            return;

        if (privateChat.selectButtonByIndex(shortcutIndex))
            e.preventDefault();
    });

    $(document).on('keyup', function (e) {
        if (e.which === 32) {//space bar
            if (!privateChat.canHandleSpace(e.target))
                return;

            if (privateChat.visibleButtons().length === 1)
                e.preventDefault();
        }
        else if (privateChat.getShortcutIndexFromEvent(e) !== null) {
            if (privateChat.canHandleSpace(e.target))
                e.preventDefault();
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

    $("#room_chatskip").on('click', function () {
        g.skipChat = true;
        privateChat.skipChat();
    });

    $('.room-chatBtnClick').on('click', function () {
        var roomID = $(this).data('roomid');
        var chatID = $(this).data('chatid');
        var callback = $(this).data('callback');

        if (chatID < 0) {
            privateChat.close();
            //$('#char_charDisplay').show();
        }
        else
            chat(chatID, roomID);
        if (callback !== '')
            invoker.invoke(roomID, "chatcatch", callback);

    });
});
