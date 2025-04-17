//Room name
var room601 = {};
room601.main = function () {
    var navList = [600];
    nav.buildnav(navList);
    
    
    g.internal = {
        cust: 0,
        excitement: 0,
        money: 0,
        pose: 0
    };
    room601.btnclick("getCustCount");
};

room601.btnclick = function (name) {
    switch (name) {
        case "getCustCount":
            switch (Math.floor(g.gethourdecimal())) {
                case 20: g.internal.cust = 3; return;
                case 21: g.internal.cust = 5; return;
                case 22: g.internal.cust = 6; return;
                case 23: g.internal.cust = 8; return;
                case 0: g.internal.cust = 7; return;
                case 1: g.internal.cust = 6; return;
                case 2: g.internal.cust = 4; return;
                default: 0;
            }
            
            var patrons = [
                { x: 894, y: 414, h: 47, w: 97 },
                { x: 1062, y: 386, h: 86, w: 148 },
                { x: 603, y: 371, h: 181, w: 213 },
                { x: 1163, y: 350, h: 181, w: 247 },
                { x: 428, y: 397, h: 223, w: 305 },
                { x: 1224, y: 367, h: 261, w: 320 },
                { x: 1330, y: 402, h: 527, w: 595 },
                { x: 6, y: 380, h: 327, w: 518 },
            ];

            for (let i = 0; i < g.internal.cust; i++) {
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": patrons[i].x,
                    "top": patrons[i].y,
                    "width": patrons[i].h,
                    "height": patrons[i].w,
                    "image": "601_dance/c" + i + ".png"
                }, 601);
            }

            break;
        case "dance":
            zcl.kill();
            var newPose = g.rand(0, 5);
            var poseClothing = 0;
            if (cl.c.bra === null && cl.c.panties === null)
                poseClothing = 2;
            else if (cl.c.bra === null && cl.c.panties !== null)
                poseClothing = 1;
            else
                poseClothing = 0;

            while (newPose === g.internal.pose) {
                newPose = g.rand(0, 5);
            }
            g.internal.pose = newPose;

            switch (g.internal.pose) {
                case 0: zcl.amazon(450, 675, .25, "", false); break;
                case 1: zcl.bent(450, 650, .2, "", false); break;
                case 2: zcl.poseExpose(350, 675, .22, "", false); break;
                case 3:
                    nav.button({
                        "type": "img",
                        "name": "zzz-clothing-kill",
                        "left": 782,
                        "top": 162,
                        "width": 165,
                        "height": 510,
                        "image": "601_dance/b_" + poseClothing + ".png"
                    }, 601);
                    break;
                default:
                    nav.button({
                        "type": "img",
                        "name": "zzz-clothing-kill",
                        "left": 601,
                        "top": 137,
                        "width": 364,
                        "height": 497,
                        "image": "601_dance/a_" + poseClothing + ".png"
                    }, 601);
                    break;

            }
            
            
            

            

            

            break;
        default:
            break;
    }
};

room601.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room601.chat = function (chatID) {
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