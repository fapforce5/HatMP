//Room name
var room210 = {};
room210.main = function () {
    var i, j, offset;
    var usedSissyPoints = g.get("usedSissyPoints");
    nav.bg("28_transformation/grid.jpg");
    g.sumSissy();
    //chest
    offset = 33;
    for (i = 2; i < 7; i++) {
        j = i + offset;
        g.sissy[j].ach = i <= cl.c.chest;
    }
    offset = 39;
    for (i = 1; i < 6; i++) {
        j = i + offset;
        g.sissy[j].ach = i <= cl.c.leg;
    }

    $.each(g.sissy, function (i, v) {
        if (v.active) {
            nav.button({
                "type": "btn",
                "name": v.icon,
                "left": 30 + ((v.x - 1) * 80),
                "top": 30 + ((v.y - 1) * 80),
                "width": 75,
                "height": 75,
                "image": "28_transformation/" + (v.icon + (v.ach ? "" : "_u")) + ".png"
            }, 210);
        }
    });
    nav.t({
        type: "img",
        name: "pointDisplay",
        left: 50,
        top: 100,
        font: 40,
        hex: "#000000",
        text: '<div style="text-align:center;">Available Points <br/>' + (g.sp.total - usedSissyPoints) + '</div>'
    });

    var hor = g.get("hormone");
    var hortxt = "";
    if (hor < 25) {
        hex = "#2c416e";
        hortxt = "Boy";
    }
    else if (hor < 50) {
        hex = "#432c6e";
        hortxt = "Transitioning - Boy";
    }
    else if (hor < 75) {
        hex = "#6e2c6c";
        hortxt = "Transitioning - Girl";
    }
    else {
        hex = "#91116d";
        hortxt = "Girl";
    }

    nav.t({
        type: "img",
        name: "pointDisplay",
        left: 50,
        top: 200,
        font: 40,
        hex: hex,
        text: '<div style="text-align:center;">Hormone Level<br/>' + hortxt + '</div>'
    });
};

room210.btnclick = function (name) {
    var id, pid;
    var prevToUnlock = "";
    var usedSissyPoints = g.get("usedSissyPoints");
    var needSissyPoints = 0;
    var availableSissyPoints;
    nav.killbutton("bigDisplay");
    nav.button({
        "type": "img",
        "name": "bigDisplay",
        "left": 1645,
        "top": 153,
        "width": 250,
        "height": 400,
        "image": "28_transformation/" + name + "_d.png"
    }, 210);

    xtop = 600 * g.ratio;
    xleft = 1634 * g.ratio;
    xwidth = 271 * g.ratio;

    for (i = 0; i < g.sissy.length; i++) {
        if (g.sissy[i].icon === name) {
            id = i;
            i = 9999;
        }
    }

    needSissyPoints = g.sissy[id].points * 100 * g.sp.difficulty.m;
    availableSissyPoints = g.sp.total - usedSissyPoints;


    for (i = 0; i < g.sissy[id].pID.length; i++) {
        pid = g.sissy[id].pID[i];
        if (!g.sissy[pid].ach) {
            if (prevToUnlock === "")
                prevToUnlock = g.sissy[pid].name;
            else
                prevToUnlock += " and " + g.sissy[pid].name;
        }
    }
    pid = g.sissy[id].pID;
    tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">' + g.sissy[id].name + '</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">' + g.sissy[id].description + '</div>';

    if (needSissyPoints > 0)
        tText += "<br/>" + needSissyPoints + " points<br/>";

    if (id === 56)
        tText += '<img src="./images/room/28_transformation/cancel_b.png" class="room-btn rom-event" data-name="h_' + id + '" data-room="209" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
    else if (g.sissy[id].ach)
        tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Acheived</div>';
    else if (!g.sissy[id].active)
        tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Work in<br/>Progress</div>';
    else if (g.sissy[id].h && g.get("hormone") < 75)
        tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need to raise<br/>your homone level</div>';
    else if (prevToUnlock === "") {
        if (id === 47 || id === 48 || id === 49)
            tText += '<img src="./images/room/28_transformation/unlockx.png" class="room-btn rom-event" data-name="h_' + id + '" data-room="209" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
        else if (needSissyPoints <= availableSissyPoints)
            tText += '<img src="./images/room/28_transformation/unlock.png" class="room-btn rom-event" data-name="h_' + id + '" data-room="209" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
        if (g.get("cheatMode"))
            tText += '<div class="room-btn rom-event cursor-hover" style="font-size:' + 20 * g.ratio + 'px; margin-top:' + 5 * g.ratio + 'px; width:100%; text-align:center;" data-name="h_' + id + '" data-room="211">Cheat Unlock</div>';
    }
    else if (needSissyPoints > availableSissyPoints)
        tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need ' + needSissyPoints + ' points</div>';
    else
        tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need to<br/>Unlock<br/>' + prevToUnlock + '</div>';

    xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';
    $('#room-buttons').append(xline);
};

room210.chatcatch = function (callback) {
    switch (callback) {
        case "contract":
            var thisText = "<h1 class='hl-pink'>Sissy School Contract</h1>" +
                "<h2>Introduction</h2>" +
                "This document, hereby referred to as CONTRACT, is a binding agreement between " + sc.n("missy") + " and " + sc.n("p") + ", <br/>" +
                "hereby referred to as the MISTRESSES, and " + sc.n("me") + " , hereby referred to as SISSY. The purpose of <br/>" +
                "this CONTRACT is to serve as an agreement between the MISTRESS and SISSY regarding terms of SERVICE. <br/>" +
                "<hr/>" +
                "1. The SISSY shall obey any and all orders from the MISTRESSES. It is not the SISSY's place to <br/>" +
                "question the orders given, only to follow and obey.<br/>" +
                "2. The SISSY shall attend the Sissy School until such a time as the MISTRESSES feel the SISSY is ready <br/>" +
                "to assume the duties of a true detective. Once the SISSY has become a true detective the SISSY will have the<br/>" +
                "option to continue their lessons.<br/>" +
                "3. The SISSY shall install the SISSY TRACKING SOFTWARE on the SISSY's phone. The SISSY TRACKING  <br/>" +
                "SOFTWARE will report back the location and all actions of the SISSY so that the MISTRESS may accuratly <br/>" +
                "award the SISSY the proper number of extra credit points. <br/>" +
                "4. Some courses are required and some are a gift. The SISSY may trade their extra credit points to be gifted an extra " +
                "credit course.<br/><hr/>";
            nav.button({
                "type": "img",
                "name": "sheet",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "209_classroom/page.png"
            }, 209);
            nav.t({
                type: "img",
                name: "contract",
                left: 350,
                top: 100,
                font: 30,
                hex: "#000000",
                text: thisText
            });
            nav.button({
                "type": "btn",
                "name": "missy0accept",
                "left": 350,
                "top": 860,
                "width": 400,
                "height": 100,
                "image": "209_classroom/accept.jpg"
            }, 209);
            break;
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