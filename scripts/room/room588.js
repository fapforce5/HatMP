//Room name
var room588 = {};
room588.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "588_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 588);
    //});
    //nav.buildnav(navList);
    if (g.pass === "sporty_588") {
        zcl.displayMain(100, 500, .1, "clothes", false);
        nav.button({
            "type": "img",
            "name": "sporty",
            "left": 743,
            "top": 0,
            "width": 705,
            "height": 1080,
            "image": "588_doofus/sporty.png"
        }, 586);
        chat(0, 588);
    }
    else {
        nav.buildnav([585, 586, 587, 589]);

    }
};

room588.btnclick = function (name) {
    switch (name) {
        case "sporty":
            switch (g.internal.step) {
                case 1: nav.bg("588_doofus/sporty1.jpg"); break;
                case 2: nav.bg("588_doofus/sporty2.jpg"); break;
                case 3: nav.bg("588_doofus/sporty3.jpg");
                    nav.killbutton("sporty");
                    sc.select("sporty_balls", "588_doofus/icon_balls.png", 0);
                    sc.select("sporty_dick", "588_doofus/icon_dick.png", 1);
                    break;
                case 4: nav.bg("588_doofus/sporty4_" + g.internal.p + ".jpg"); break;
                case 5: nav.bg("588_doofus/sporty5_" + g.internal.p + ".jpg"); break;
                case 6:
                    nav.bg("588_doofus/sporty6.jpg");
                    nav.killbutton("sporty");
                    nav.button({
                        "type": "tongue",
                        "name": "sporty",
                        "left": 1314,
                        "top": 653,
                        "width": 203,
                        "height": 203,
                        "image": "588_doofus/sporty_butthole.png"
                    }, 588);
                    break;
                case 7: nav.bg("588_doofus/sporty7.jpg"); break;
                case 8:
                    nav.killbutton("sporty");
                    nav.bg("588_doofus/sporty8.jpg");
                    nav.next("sporty");
                    break;

            }

            g.internal.step++;
            break;
        case "sporty_balls":
            nav.killall();
            g.internal.p = "sporty";
            nav.bg("588_doofus/sporty4_happy.jpg");
            nav.next("sporty");
            break;
        case "sporty_dick":
            nav.killall();
            g.internal.p = "me";
            nav.bg("588_doofus/sporty4_sad.jpg");
            nav.next("sporty");
            break;
        default:
            break;
    }
};

room588.chatcatch = function (callback) {
    switch (callback) {
        case "sporty0":
            g.internal = { step: 1, p: "" };
            nav.killall();
            nav.bg("588_doofus/sporty0.jpg");
            nav.next("sporty");
            break;
        default:
            break;
    }
};

room588.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "sporty",
            text: "So should we strip down and put on a show for him baby?",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "sporty0" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};