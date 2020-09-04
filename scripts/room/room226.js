//Room name
var room226 = {};
var tree = new Array();
room226.main = function () {
    $("#rl_map").attr("src", "./images/general/map_266.jpg");
    if (g.lview === "b")
        $("#left_change").click();
    setTimeout(function () { $("#room_footer").hide(); }, 200);
    g.internal = {
        id: 0, l: [
            {
                id: 0,
                left: 137,
                top: 98,
                t: "y",
                b: null,
                l: 1,
                r: 2,
                v: false
            },
            {
                id: 1,
                left: 58,
                top: 186,
                t: "sl",
                b: 0,
                l: 5,
                r: null,
                v: false
            },
            {
                id: 2,
                left: 173,
                top: 186,
                t: "y",
                b: 0,
                l: 3,
                r: 4,
                v: false
            },
            {
                id: 3,
                left: 173,
                top: 274,
                t: "l",
                b: 2,
                l: 6,
                r: null,
                v: false
            },
            {
                id: 4,
                left: 244,
                top: 274,
                t: "l",
                b: 2,
                l: 7,
                r: null,
                v: false
            },
            {
                id: 5,
                left: 22,
                top: 334,
                t: "y",
                b: 1,
                l: 8,
                r: 9,
                v: false
            },
            {
                id: 6,
                left: 137,
                top: 334,
                t: "y",
                b: 3,
                l: 10,
                r: 11,
                v: false
            },
            {
                id: 7,
                left: 244,
                top: 334,
                t: "e",
                b: 4,
                l: null,
                r: null,
                v: false
            },
            {
                id: 8,
                left: 23,
                top: 422,
                t: "sr",
                b: 5,
                l: 14,
                r: null,
                v: false
            },
            {
                id: 9,
                left: 93,
                top: 422,
                t: "e",
                b: 5,
                l: null,
                r: null,
                v: false
            },
            {
                id: 10,
                left: 137,
                top: 422,
                t: "l",
                b: 6,
                l: 12,
                r: null,
                v: false
            },
            {
                id: 11,
                left: 210,
                top: 422,
                t: "l",
                b: 6,
                l: 13,
                r: null,
                v: false
            },
            {
                id: 12,
                left: 135,
                top: 481,
                t: "e",
                b: 10,
                l: null,
                r: null,
                v: false
            },
            {
                id: 13,
                left: 174,
                top: 481,
                t: "y",
                b: 11,
                l: 15,
                r: 16,
                v: false
            },
            {
                id: 14,
                left: 66,
                top: 569,
                t: "y",
                b: 8,
                l: 19,
                r: 20,
                v: false
            },
            {
                id: 15,
                left: 174,
                top: 569,
                t: "l",
                b: 13,
                l: 17,
                r: null,
                v: false
            },
            {
                id: 16,
                left: 247,
                top: 569,
                t: "l",
                b: 13,
                l: 18,
                r: null,
                v: false
            },
            {
                id: 17,
                left: 172,
                top: 627,
                t: "e",
                b: 15,
                l: null,
                r: null,
                v: false
            },
            {
                id: 18,
                left: 167,
                top: 627,
                t: "sl",
                b: 16,
                l: 22,
                r: null,
                v: false
            },
            {
                id: 19,
                left: 66,
                top: 657,
                t: "l",
                b: 14,
                l: 21,
                r: null,
                v: false
            },
            {
                id: 20,
                left: 137,
                top: 657,
                t: "e",
                b: 14,
                l: null,
                r: null,
                v: false
            },
            {
                id: 21,
                left: 30,
                top: 716,
                t: "y",
                b: 19,
                l: 23,
                r: 24,
                v: false
            },
            {
                id: 22,
                left: 131,
                top: 776,
                t: "y",
                b: 18,
                l: 27,
                r: 28,
                v: false
            },
            {
                id: 23,
                left: 30,
                top: 805,
                t: "l",
                b: 21,
                l: 25,
                r: null,
                v: false
            },
            {
                id: 24,
                left: 103,
                top: 805,
                t: "l",
                b: 21,
                l: 26,
                r: null,
                v: false
            },
            {
                id: 25,
                left: 30,
                top: 864,
                t: "l",
                b: 23,
                l: 29,
                r: null,
                v: false
            },
            {
                id: 26,
                left: 101,
                top: 864,
                t: "e",
                b: 24,
                l: null,
                r: null,
                v: false
            },
            {
                id: 27,
                left: 132,
                top: 864,
                t: "l",
                b: 22,
                l: 30,
                r: null,
                v: false
            },
            {
                id: 28,
                left: 204,
                top: 864,
                t: "l",
                b: 22,
                l: 31,
                r: null,
                v: false
            },
            {
                id: 29,
                left: 28,
                top: 923,
                t: "e",
                b: 25,
                l: null,
                r: null,
                v: false
            },
            {
                id: 30,
                left: 130,
                top: 923,
                t: "e",
                b: 27,
                l: null,
                r: null,
                v: false
            },
            {
                id: 31,
                left: 202,
                top: 923,
                t: "e",
                b: 28,
                l: null,
                r: null,
                v: false
            },
    ]};
    room226.btnclick("drawMap");
}; 

room226.find = function (level, nodeID) {

};

room226.btnclick = function (name) {
    switch (name) {
        case "drawMap":
            if (Math.random() * 8 < 2) {
                alert("fight")
            }
            nav.killbutton("left");
            nav.killbutton("right");
            var iconList = [
                { 
                    "name": "y",
                    "width": 103,
                    "height": 98,
                    "image": "225_sewer/p_y.png",
                },
                {
                    "name": "sl",
                    "width": 109,
                    "height": 148,
                    "image": "225_sewer/p_sl.png",
                },
                {
                    "name": "sr",
                    "width": 109,
                    "height": 148,
                    "image": "225_sewer/p_sr.png",
                },
                {
                    "name": "e",
                    "width": 34,
                    "height": 60,
                    "image": "225_sewer/p_e.png",
                },
                {
                    "name": "l",
                    "width": 30,
                    "height": 59,
                    "image": "225_sewer/p_l.png",
                },
            ];
            var th, tw;
            th = 0; 
            tw = 0;
            $(".rlm-icon").remove();
            for (i = 0; i < g.internal.l.length; i++) {
                for (j = 0; j < iconList.length; j++) {
                    if (iconList[j].name === g.internal.l[i].t) {
                        $("#room_left_map").append('<img src="./images/room/' + iconList[j].image + '" class="rlm-icon resize" style="' + g.makeCss(iconList[j].height, iconList[j].width, g.internal.l[i].top, g.internal.l[i].left) + '; position: absolute;"/>');
                        if (i === g.internal.id) {
                            th = iconList[j].height;
                            tw = iconList[j].width;
                        }
                    }
                }
            }

            
            if (g.internal.l[g.internal.id].l === null && g.internal.l[g.internal.id].r === null) {
                nav.bg("225_sewer/s0.jpg");
                
            }
            else if (g.internal.l[g.internal.id].r === null) {
                nav.bg("225_sewer/s1.jpg");
                nav.button({
                    "type": "btn",
                    "name": "left",
                    "left": 536,
                    "top": 56,
                    "width": 773,
                    "height": 638,
                    "image": "225_sewer/center.png",
                    "title": "straight"
                }, 226);
            }
            else  {
                nav.bg("225_sewer/s2.jpg");
                nav.button({
                    "type": "btn",
                    "name": "right",
                    "left": 1078,
                    "top": 79,
                    "width": 582,
                    "height": 716,
                    "image": "225_sewer/right.png",
                    "title": "right"
                }, 226);
                nav.button({
                    "type": "btn",
                    "name": "left",
                    "left": 282,
                    "top": 79,
                    "width": 582,
                    "height": 716,
                    "image": "225_sewer/left.png",
                    "title": "left"
                }, 226);
            }

            nav.button({
                "type": "btn",
                "name": "back",
                "left": 405,
                "top": 980,
                "width": 1411,
                "height": 100,
                "image": "225_sewer/back.png",
                "title": "back"
            }, 226);

            var icont = g.internal.l[g.internal.id].top + (th / 2) - 20;
            var iconl = g.internal.l[g.internal.id].left + (tw / 2) - 20;
            $('.room_l_i').remove();
            $("#room_left_map").append('<img src="./images/room/225_sewer/icon.png" class="rlm-icon resize" style="' + g.makeCss(40, 40, icont, iconl) + '; position: absolute;"/>');
            
            break;
        case "left":
            g.internal.id = g.internal.l[g.internal.id].l;
            room226.btnclick("drawMap");
            break;
        case "right":
            g.internal.id = g.internal.l[g.internal.id].r;
            room226.btnclick("drawMap");
            break;
        case "back":
            if (g.internal.id === 0) {
                char.room(225);
            }
            else {
                g.internal.id = g.internal.l[g.internal.id].b;
                room226.btnclick("drawMap");
            }
            break;
        default:
            break;
    }
};

room226.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room226.chat = function (chatID) {
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