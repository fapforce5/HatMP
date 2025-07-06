//Room name
var room77 = {};
room77.main = function () {
    if (sc.getMission("bimbo", "fuck").notStarted) {
        sc.show("bimbo");
        sc.startMission("bimbo", "fuck");
    }

    if (sc.getTimeline("bimbo").thisRoom) {
        nav.bg("77_bimboLiving/bg.jpg");
        if (daily.get("bimbo")) {
            chat(10, 77);
            nav.buildnav([0]);
        }
        else {
            chat(0, 77);
        }
    }
    else {
        nav.button({
            "type": "btn",
            "name": "stairs",
            "left": 1615,
            "top": 0,
            "width": 305,
            "height": 835,
            "image": "77_bimboLiving/stairs.png",
            "night": "77_bimboLiving/stairsNight.png"
        }, 77);
        nav.buildnav([76, 78, 0]);
    }
};

room77.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(76);
            break;
        //case "bimbo":
        //    nav.killbutton("stairs");
        //    nav.killbutton("bimbo");
        //    nav.bg("77_bimboLiving/closeup.jpg");
        //    chat(0, 77);
        //    break;
        //case "bimboass":
        //    nav.kill("bimboass");
        //    nav.button({
        //        "type": "btn",
        //        "name": "bimboass",
        //        "left": 848,
        //        "top": 0,
        //        "width": 1072,
        //        "height": 1080,
        //        "image": "77_bimboLiving/butt1.png"
        //    }, 77);
        //    chat(18, 77);
        //    break;
        case "bj":
            nav.killall();
            nav.bg("77_bimboLiving/bjbg.jpg");
            nav.button({
                "type": "dick",
                "name": "bj1",
                "left": 567,
                "top": 15,
                "width": 658,
                "height": 1065,
                "image": "77_bimboLiving/bj0.png"
            }, 77);
            chat(7, 77);
            break;
        case "pussy":
            nav.killall();
            chat(12, 77);
            break;
        case "leave":
            char.room(0);
            break;
        case "bj1":
            nav.killall();
            nav.bg("77_bimboLiving/bjbg.jpg");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 516,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "77_bimboLiving/Blonde_Bj.gif"
            }, 77);
            nav.cum("bj2");
            break;
        case "bj2":
            nav.killall();
            sc.completeMissionTask("bimbo", "fuck", 0);
            levels.gotbj("f", "bimbo");
            nav.bg("77_bimboLiving/bj3.jpg");
            chat(8, 77);
            break;
        case "pussy1":
            nav.killall();
            nav.bg("77_bimboLiving/Blonde_Sex.gif");
            nav.cum("pussy2");
            break;
        case "pussy2":
            nav.killall();
            sc.select("pussyoutside", "77_bimboLiving/icon_outside.png", 0);
            sc.select("pussyinside", "77_bimboLiving/icon_inside.png", 1);
            break;
        case "pussyoutside":
            nav.killall();
            levels.fuckpussy("bimbo");
            sc.completeMissionTask("bimbo", "fuck", 1);
            nav.bg("77_bimboLiving/bj3.jpg");
            chat(8, 77);
            break;
        case "pussyinside":
            nav.killall();
            levels.fuckpussy("bimbo");
            sc.completeMissionTask("bimbo", "fuck", 1);

            if (sc.getMission("bimbo", "preg").notStarted) {
                sc.startMission("bimbo", "preg");
                sc.completeMissionTask("bimbo", "preg", 0);
                nav.bg("77_bimboLiving/p1.jpg");
                nav.button({
                    "type": "img",
                    "name": "tube",
                    "left": 0,
                    "top": 276,
                    "width": 1920,
                    "height": 400,
                    "image": "77_bimboLiving/p1.gif"
                }, 77);
                g.internal = 2;
                nav.next("p1");
            }
            else {
                nav.bg("77_bimboLiving/pussy3.jpg");
                chat(16, 77);
            }
            break;
        case "p1":
            nav.killbutton("tube");
            if (g.internal < 6) {
                nav.bg("77_bimboLiving/p" + g.internal + ".jpg");
            }
            else {
                nav.killall();
                nav.bg("77_bimboLiving/pussy3.jpg");
                chat(14, 77);
            }
            g.internal++;
            break;
        case "anal":
            nav.killall();
            if (sc.getMissionTask("bimbo", "fuck", 2).notStarted)
                sc.completeMissionTask("bimbo", "fuck", 2);
            chat(17, 77);
            break;
        case "anal2":
            nav.killall();
            nav.bg("77_bimboLiving/Blonde_Anal.gif");
            nav.cum("anal3");
            break;
        case "anal3":
            nav.killall();
            nav.bg("77_bimboLiving/anal3.jpg");
            levels.fuckass("bimbo", "f");
            chat(20, 77);
            break;
        default:
            break;
    }
};

room77.chatcatch = function (callback) {
    switch (callback) {
        case "anal0":
            nav.killall();
            nav.bg("77_bimboLiving/" + callback + ".jpg");
            break;
        case "anal1":
            nav.bg("77_bimboLiving/" + callback + ".jpg");
            nav.button({
                "type": "dick",
                "name": "anal2",
                "left": 769,
                "top": 391,
                "width": 383,
                "height": 383,
                "image": "77_bimboLiving/anal1.png"
            }, 77);
            break;
        case "pussy0":
            nav.bg("77_bimboLiving/" + callback + ".jpg");
            nav.button({
                "type": "dick",
                "name": "pussy1",
                "left": 609,
                "top": 0,
                "width": 808,
                "height": 1080,
                "image": "77_bimboLiving/pussy0.png"
            }, 77);
            break;
        case "fuck0":
            if (cl.c.chastity !== null)
                chat(3, 77);
            else if (gender.isCockTooSmallForSex())
                chat(4, 77);
            else {
                nav.bg("77_bimboLiving/bg1.jpg");
                chat(6, 77);
            }
            break;
        case "icons":
            sc.select("bj", "77_bimboLiving/icon_bj.png", 0);
            sc.select("pussy", "77_bimboLiving/icon_pussy.png", 1);
            sc.select("anal", "77_bimboLiving/icon_anal.png", 2);
            sc.selectCancel("leave", 3);
            break;
        case "leave":
            char.addtime(60);
            daily.set("bimbo");
            char.room(0);
            break;
        case "takedickout":
            if (gender.canUseCock()) {
                nav.bg("77_bimboLiving/closeup1.jpg");
                chat(3, 77);
            }
            else if (cl.c.chastity !== null) {
                nav.bg("77_bimboLiving/closeupno.jpg");
                chat(1, 77);
            }
            else {
                nav.bg("77_bimboLiving/closeupno.jpg");
                chat(2, 77);
            }
            break;
      
        //case "mouth":
        //    nav.bg("77_bimboLiving/suck1.jpg");
        //    break;
        //case "mouth1":
        //    nav.bg("77_bimboLiving/gray.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "bimbo",
        //        "left": 320,
        //        "top": 80,
        //        "width": 1600,
        //        "height": 1000,
        //        "image": "77_bimboLiving/bj1.gif"
        //    });
        //    break;
        //case "mouth2":
        //    nav.kill("bimbo");
        //    nav.button({
        //        "type": "btn",
        //        "name": "bimbo",
        //        "left": 320,
        //        "top": 80,
        //        "width": 1600,
        //        "height": 1000,
        //        "image": "77_bimboLiving/bj2.gif"
        //    });
        //    break;
        //case "mouth3":
        //    nav.kill("bimbo");
        //    nav.button({
        //        "type": "btn",
        //        "name": "bimbo",
        //        "left": 320,
        //        "top": 80,
        //        "width": 1600,
        //        "height": 1000,
        //        "image": "77_bimboLiving/bj3.gif"
        //    });
        //    break;
        //case "mouth4":
        //    nav.kill("bimbo");
        //    nav.button({
        //        "type": "btn",
        //        "name": "bimbo",
        //        "left": 320,
        //        "top": 80,
        //        "width": 1600,
        //        "height": 1000,
        //        "image": "77_bimboLiving/bj4.gif"
        //    });
        //    break;
        //case "mouth5":
        //    nav.kill("bimbo");
        //    nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "bimbo",
        //        "left": 769,
        //        "top": 73,
        //        "width": 827,
        //        "height": 1005,
        //        "image": "76_bimboRoom/bimboCumface.png"
        //    }, 77);
        //    gv.mod("receiveOralFemale", 1);
        //    cl.doCum(false);
        //    break;
        //case "pussy":
        //    nav.killall();
        //    nav.bg("77_bimboLiving/laying.jpg");
        //    break;
        //case "pussy1":
        //    nav.bg("77_bimboLiving/f1.gif");
        //    break;
        //case "pussy2":
        //    if (sc.getEvent("bimbo", -1))
        //        chat(12, 77);
        //    else
        //        chat(25, 77);
        //    break;
        //case "pussy3":
        //    nav.bg("77_bimboLiving/f3.gif");
        //    break;
        //case "pussy4":
        //    nav.bg("77_bimboLiving/f2.gif");
        //    break;
        //case "pussy5":
        //    gv.mod("fuckPussy", 1);
        //    cl.doCum(false);
        //    nav.bg("77_bimboLiving/p5.jpg");
        //    break;
        //case "pussy6":
        //    nav.killbutton("tube");
        //    gv.mod("fuckPussy", 1);
        //    cl.doCum(false);
        //    nav.bg("77_bimboLiving/p6.jpg");
        //    break;
        //case "pussy7":
        //    gv.mod("fuckPussy", 1);
        //    cl.doCum(false);
        //    nav.bg("77_bimboLiving/p1.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "tube",
        //        "left": 0,
        //        "top": 276,
        //        "width": 1920,
        //        "height": 400,
        //        "image": "77_bimboLiving/p1.gif"
        //    }, 77);
        //    if (gv.get("knockedup") === null) {
        //        gv.set("knockedup", g.dt);
        //        chat(29, 77);
        //    }
        //    else if (gv.get("knockedup").getFullYear() < 2000) {
        //        gv.set("knockedup", g.dt);
        //        chat(29, 77);
        //    }
        //    else {
        //        chat(27, 77);
        //    }
        //    break;
        //case "pussy7a":
        //    nav.killbutton("tube");
        //    nav.bg("77_bimboLiving/p1a.jpg");
        //    break;
        //case "pussy7a1":
        //    nav.killbutton("tube");
        //    nav.bg("77_bimboLiving/p1a1.jpg");
        //    break;
        //case "pussy7a2":
        //    nav.killbutton("tube");
        //    nav.bg("77_bimboLiving/p1a2.jpg");
        //    break;
        //case "end":
        //    char.addtime(60);
        //    nav.buildnav([76, 0]);
        //    break;
        //case "ass":
        //    nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
        //    nav.kill("bimbo");
        //    nav.button({
        //        "type": "btn",
        //        "name": "bimboass",
        //        "left": 848,
        //        "top": 0,
        //        "width": 1072,
        //        "height": 1080,
        //        "image": "77_bimboLiving/butt.png"
        //    }, 77);
        //    break;
        //case "ass1":
        //    nav.kill("bimbo");
        //    nav.bg("77_bimboLiving/b1.gif");
        //    break;
        //case "ass2":
        //    nav.kill("bimbo");
        //    nav.bg("77_bimboLiving/b2.gif");
        //    break;
        //case "ass3":
        //    nav.bg("77_bimboLiving/b3.gif");
        //    break;
        //case "ass4":
        //    nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
        //    gv.mod("giveAnalFemale", 1);
        //    cl.doCum(false);
        //    nav.kill("bimbo");
        //    nav.button({
        //        "type": "img",
        //        "name": "bimbo",
        //        "left": 848,
        //        "top": 0,
        //        "width": 1072,
        //        "height": 1080,
        //        "image": "77_bimboLiving/butt2.png"
        //    }, 77);
        //    break;
        //case "ass5":
        //    gv.mod("giveAnalFemale", 1);
        //    cl.doCum(false);
        //    nav.bg("77_bimboLiving/b4.gif");
        //    break;
        //case "ass6":
        //    gv.mod("giveAnalFemale", 1);
        //    nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
        //    cl.doCum(false);
        //    nav.kill("bimbo");
        //    nav.button({
        //        "type": "img",
        //        "name": "bimbo",
        //        "left": 918,
        //        "top": 46,
        //        "width": 851,
        //        "height": 1031,
        //        "image": "77_bimboLiving/s1.png"
        //    }, 77);
        //    break;
        default:
            break;
    }
};

room77.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bimbo",
            text: "Hello...",
            button: [
                { chatID: 1, text: "Hi. I'm the pizza delivery man. ", callback: "" },
                { chatID: -1, text: "Yelp! *Run away*", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "I don't remember ordering a pizza. I don't have any money. ",
            button: [
                { chatID: 2, text: "When the how are you going to pay?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "I'm so sorry. I don't know. ",
            button: [
                { chatID: -1, text: "[Take your dick out]", callback: "fuck0" },
                { chatID: -1, text: "Well you're not getting a pizza! ", callback: "leave" },
            ]
        },
        {
            chatID: 3,
            speaker: "bimbo",
            text: "I don't know what you want me to do with that. There's a thing blocking your cock. ",
            button: [
                { chatID: -1, text: "Oh yeah. Crap. Well I guess I'll just go home and cry. No pizza for you.", callback: "leave" }
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "It's so tiny. Your mom must be disappointed. Why is it so tiny?  ",
            button: [
                { chatID: 5, text: "I don't know. I just have a small dick. ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "bimbo",
            text: "Well I don't play with tiny cocks. You find a tiny woman to have sex with. Maybe a " +
                "girl with a tiny pussy. You could totally date an oompa loompa. They're tiny! ",
            button: [
                { chatID: -1, text: "Oh ok.", callback: "leave" }
            ]
        },
        {
            chatID: 6,
            speaker: "bimbo",
            text: "Oh no. It seems I've gotten myself into a mess again. ",
            button: [
                { chatID: -1, text: "Yes you have. ", callback: "icons" },
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "I'm gunna fuck your face.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "bimbo",
            text: "Oh look. Free lotion! Yeah! ",
            button: [
                { chatID: 9, text: "That's my good girl.", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "bimbo",
            text: "...Wait! Where's pizza? ",
            button: [
                { chatID: -1, text: "Yelp!", callback: "leave" },
            ]
        },
        {
            chatID: 10,
            speaker: "bimbo",
            text: "Hello...",
            button: [
                { chatID: 11, text: "I came with the pizza! ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "bimbo",
            text: "Oh. That's ok. I have tacos coming. ",
            button: [
                { chatID: -1, text: "oh.. ok.", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "I'm going to fuck you in your pussy!",
            button: [
                { chatID: 13, text: "...", callback: "pussy0" },
            ]
        },
        {
            chatID: 13,
            speaker: "bimbo",
            text: "Ok. My doctor told me to tell people not to cum inside me, 'cuase, uhhhh. " +
                "I don't remember why. Something about bills, or I have chills. I don't know. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "bimbo",
            text: "Oh no. My doctors's going to be so mad at me. I promised I wouldn't let anyone " +
                "cum in me. Maybe I just won't tell him! He can't be mad if he doesn't know. ",
            button: [
                { chatID: 15, text: "That sounds like a smart choice", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "bimbo",
            text: "Awww. I've never been called smart. Most guys just say I'm hot, or I'm a " +
                "good girl... wait... Where's my pizza? ",
            button: [
                { chatID: -1, text: "yelp!", callback: "leave" },
            ]
        },
        {
            chatID: 16,
            speaker: "bimbo",
            text: "I'm leaking again. That's why my rug is white, so I can just rub it in. Saves " +
                "clean up time! A good fuck makes me so hungry... where's my pizza? ",
            button: [
                { chatID: -1, text: "yelp!", callback: "leave" },
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "I'm going to fuck you up your tight little asshole. ",
            button: [
                { chatID: 18, text: "...", callback: "anal0" },
            ]
        },
        {
            chatID: 18,
            speaker: "bimbo",
            text: "Oh. I love anal play! ",
            button: [
                { chatID: 19, text: "...", callback: "anal1" },
            ]
        },
        {
            chatID: 19,
            speaker: "bimbo",
            text: "Shove it in dry. I love the surprise pain of anal.",
            button: [
                { chatID: -1, text: "Fuck yeah!", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "bimbo",
            text: "I haven't been fucked like this since my bondage gang bang! Anal always " +
                "makes me hungry. Hey where's my pizza? ",
            button: [
                { chatID: -1, text: "Yelp!", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
}; 