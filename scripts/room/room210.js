//Room name
var room210 = {};
room210.main = function () {
    var i, j, offset;

    $.each(sissy.st, function (i, v) {
        if (v.active) {
            nav.button({
                "type": "btn",
                "name": v.icon,
                "left": 10 + (v.x * 115),
                "top": -50 + (v.y * 200),
                "width": 100,
                "height": 100,
                "image": "210_classSelection/" + (v.icon + (v.ach ? "" : "_u")) + ".png"
            }, 210);
        }
    });
};

room210.btnclick = function (name) {
    //if name === class gv.set("sissySchoolClass") gv.get("sissySchoolClassDays")
    var id, pid;
    var prevToUnlock = "";
    nav.killbutton("bigDisplay");
    nav.button({
        "type": "img",
        "name": "bigDisplay",
        "left": 1645,
        "top": 153,
        "width": 250,
        "height": 400,
        "image": "210_classSelection/" + name + ".jpg"
    }, 210);

    xtop = 600 * g.ratio;
    xleft = 1634 * g.ratio;
    xwidth = 271 * g.ratio;

    for (i = 0; i < sissy.st.length; i++) {
        if (sissy.st[i].icon === name) {
            id = i;
            i = 9999;
        }
    }
    console.log(name);
    for (i = 0; i < sissy.st[id].pID.length; i++) {
        pid = sissy.st[id].pID[i];
        if (!sissy.st[pid].ach) {
            if (prevToUnlock === "")
                prevToUnlock = sissy.st[pid].name;
            else
                prevToUnlock += " and " + sissy.st[pid].name;
        }
    }
    //pid = g.sissy[id].pID;

    tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">' + sissy.st[id].name + '</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">' + sissy.st[id].description + '</div>';

    //if (id === 56)
    //    tText += '<img src="./images/room/28_transformation/cancel_b.png" class="room-btn rom-event" data-name="h_' + id + '" data-room="209" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
    //else if (g.sissy[id].ach)
    //    tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Acheived</div>';
    //else if (!g.sissy[id].active)
    //    tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Work in<br/>Progress</div>';
    //else if (g.sissy[id].h && gv.get("hormone") < 75)
    //    tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need to raise<br/>your homone level</div>';
    //else if (prevToUnlock === "") {
    //    if (id === 47 || id === 48 || id === 49)
    //        tText += '<img src="./images/room/28_transformation/unlockx.png" class="room-btn rom-event" data-name="h_' + id + '" data-room="209" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
    //    if (gv.get("cheatMode"))
    //        tText += '<div class="room-btn rom-event cursor-hover" style="font-size:' + 20 * g.ratio + 'px; margin-top:' + 5 * g.ratio + 'px; width:100%; text-align:center;" data-name="h_' + id + '" data-room="211">Cheat Unlock</div>';
    //}
    //else
        tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need to<br/>Unlock<br/>' + prevToUnlock + '</div>';

    xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';
    $('#room-buttons').append(xline);
};

room210.chatcatch = function (callback) {
    switch (callback) {
        default:
            break;
    }
};

room210.chat = function (chatID) {
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