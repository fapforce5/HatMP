//Modification
//hormone level: 75!!
//sissy transform: 95!!
var room28 = {};
room28.main = function () {
    g.internal = g.pass;
    g.pass = "endSleepyTime";

    var i;
    var hormoneLevel, thisTinyPP, fitnesslevel;

    menu.save("HatMP_9", null, 9);

    if (g.dt.getHours() > 6)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);
    nav.buildclock();

    g.newday();
    cl.hairgrowth();

    //growhair
    if (g.diffDatesByDays(g.dt, cl.c.lastHairCut) > 21) {
        if (cl.c.hairLength === null)
            cl.c.hairLength = 0;
        else if (cl.c.hairLength < 4)
            cl.c.hairLength++;
        cl.c.lastHairCut = g.dt;
    }

    var maxE = g.get("maxenergy");
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "fitness":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("fitnessLevel", 1);
                    g.mod("maxenergy", 3);
                    g.popUpNotice("Your fitness level increased");
                }
                break;
            case "fitnessLevel":
                fitnesslevel = g.st[i].t;
                break;
            case "leg":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("legLevel", 1);
                    g.popUpNotice("Your kick is stronger");
                }
                break;
            case "body":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("bodyLevel", 1);
                    g.popUpNotice("Your punch is stronger");
                }
                break;
            case "d":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("dLevel", 1);
                    g.popUpNotice("Your defense has increased");
                }
                break;
            case "jobConstWorkToday":
                g.st[i].t = 0;
                break;
            case "energy":
                g.st[i].t = Math.floor(maxE * .75);
                break;
            case "hormone":
                hormoneLevel = g.st[i].t;
                if (g.st[i].t > 15)
                    g.st[i].t -= 2;
                break;
            case "shinkCock":
                if (cl.c.cock < 4) {
                    thisTinyPP = g.st[i].t;
                    g.st[i].t = false;
                }
                break;
        }
    }

    //check Transformation

    var btnList = null;
    if (thisTinyPP) {
        console.log("tinyPP")
        btnList = [{
            "type": "btn",
            "name": "cock",
            "left": 1418,
            "top": 457,
            "width": 256,
            "height": 256,
            "title": "Cancel",
            "image": "28_transformation/cock.png"
        }];
        chat(1, 28);
    }
    else if (cl.c.chest === 0 && fitnesslevel > 0) {
        console.log("fit")
        btnList = [{
            "type": "btn",
            "name": "boobs",
            "left": 980,
            "top": 19,
            "width": 256,
            "height": 256,
            "title": "Grow Tits",
            "image": "28_transformation/maleChest.png"
        }];
        chat(0, 28);
    }
    else if (hormoneLevel > 65 && g.get("sissy") > 95) {
        g.set("sissy", 0);
        g.mod("sissyLevel", 1);
        room28.btnclick("init");
        chat(2, 28);
    }
    else {
        g.roomTimeout = setTimeout(function () { char.room(g.internal) }, 1000);
    }

    if (btnList !== null) {
        $.each(btnList, function (i, v) {
            nav.button(v, 28);
        });
    }
};

room28.btnclick = function (name) {
    switch (name) {
        case "init":
            btnList = [{
                "type": "btn",
                "name": "brain",
                "left": 671,
                "top": 144,
                "width": 256,
                "height": 256,
                "title": "Cancel",
                "image": "28_transformation/brain.png"
            },
            {
                "type": "btn",
                "name": "cancel",
                "left": 542,
                "top": 457,
                "width": 256,
                "height": 256,
                "title": "Cancel",
                "image": "28_transformation/cancel.png"
            },
            {
                "type": "btn",
                "name": cl.c.chest < 6 ? "boobs" : "invalid",
                "left": 980,
                "top": 19,
                "width": 256,
                "height": 256,
                "title": "Grow Tits",
                "image": "28_transformation/boobs" + (cl.c.chest < 6 ? "" : "Cancel") + ".png"
            },
            {
                "type": "btn",
                "name": cl.c.leg < 4 ? "butt" : "invalid",
                "left": 1290,
                "top": 147,
                "width": 256,
                "height": 256,
                "title": "Cancel",
                "image": "28_transformation/butt" + (cl.c.leg < 4 ? "" : "Cancel") + ".png"
            },
            {
                "type": "btn",
                "name": cl.c.cock < 4 ? "cock" : "invalid",
                "left": 1418,
                "top": 457,
                "width": 256,
                "height": 256,
                "title": "Cancel",
                "image": "28_transformation/cock" + (cl.c.cock < 4 ? "" : "Cancel") + ".png"
            },
            {
                "type": "btn",
                "name": cl.lipsize() !== "sb" ? "lips" : "invalid",
                "left": 1290,
                "top": 767,
                "width": 256,
                "height": 256,
                "title": "Cancel",
                "image": "28_transformation/lips" + (cl.lipsize() !== "sb" ? "" : "Cancel") + ".png"
            }];

            $.each(btnList, function (i, v) {
                nav.button(v, 28);
            });
            break;
        case "boobs":
            var tempChest = cl.c.chest + 1;
            if (tempChest < 7) {
                cl.c.chest = tempChest;
                nav.killall();
                nav.bg("28_transformation/chest_" + cl.c.chest + ".gif");
                g.roomTimeout = setTimeout(function () { char.room(g.internal) }, 4000);
            }

            break;
        case "butt":
            var tempAss = cl.c.leg + 1;
            if (tempAss < 5) {
                cl.c.leg = tempAss;
                nav.killall();
                nav.bg("28_transformation/leg_" + cl.c.leg + ".gif");
                g.roomTimeout = setTimeout(function () { char.room(g.internal) }, 5000);
            }
            break;
        case "cock":
            var tempCock = cl.c.cock + 1;
            if (tempCock < 5) {
                cl.c.cock = tempCock;
                nav.killall();
                nav.bg("28_transformation/cock_" + cl.c.cock + ".gif");
                g.roomTimeout = setTimeout(function () { char.room(g.internal) }, 5000);
            }
            break;
        case "lips":
            var tempLips = cl.lipsize();
            var tempColor = cl.lipColor();
            if (tempLips !== "sb") {
                tempLips = (tempLips === "thin" ? "big" : "sb");

                cl.c.lips = tempLips + (tempColor === "nude" ? "" : tempColor);
                nav.killall();
                nav.bg("28_transformation/lip_" + tempLips + ".gif");
            }

            g.roomTimeout = setTimeout(function () { char.room(g.internal) }, 5000);
            break;
        case "brain":
            nav.killbutton("brain");
            nav.killbutton("boobs");
            nav.killbutton("butt");
            nav.killbutton("cock");
            nav.killbutton("lips");
            nav.killbutton("cancel");

            nav.t({
                type: "img",
                name: "header",
                left: 500,
                top: 120,
                font: 20,
                hex: "#ffffff",
                text: "Beginner"
            });
            nav.t({
                type: "img",
                name: "header",
                left: 1060,
                top: 120,
                font: 20,
                hex: "#ffffff",
                text: "Risqué"
            });
            nav.t({
                type: "img",
                name: "header",
                left: 1620,
                top: 120,
                font: 20,
                hex: "#ffffff",
                text: "Bimbo Slut"
            });

            nav.button({
                "type": "img",
                "name": "grid",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "28_transformation/grid.png"
            }, 28);

            //fight 200
            nav.button({
                "type": "btn",
                "name": "strip",
                "left": 356,
                "top": 200,
                "width": 400,
                "height": 100,
                "title": "Strip (Fight)",
                "image": "28_transformation/b_strip.png"
            }, 28);
            nav.button({
                "type": "btn",
                "name": "dance",
                "left": 910,
                "top": 200,
                "width": 400,
                "height": 100,
                "title": "Dance (Fight)",
                "image": "28_transformation/b_dance.png"
            }, 28);
            nav.button({
                "type": "btn",
                "name": "shakecock",
                "left": 910,
                "top": 350,
                "width": 400,
                "height": 100,
                "title": "Wave Cock (Fight)",
                "image": "28_transformation/b_shakecock.png"
            }, 28);
            nav.button({
                "type": "btn",
                "name": "displayhole",
                "left": 1460,
                "top": 200,
                "width": 400,
                "height": 100,
                "title": "Display Asshole (Fight)",
                "image": "28_transformation/b_displayhole.png"
            }, 28);

            //glory hole 400
            nav.button({
                "type": "btn",
                "name": "gloryholebj",
                "left": 356,
                "top": 500,
                "width": 400,
                "height": 100,
                "title": "Strip (Fight)",
                "image": "28_transformation/b_gloryholebj.png"
            }, 28);
            nav.button({
                "type": "btn",
                "name": "gloryholeanal",
                "left": 910,
                "top": 500,
                "width": 400,
                "height": 100,
                "title": "Dance (Fight)",
                "image": "28_transformation/b_gloryholeanal.png"
            }, 28);
            nav.button({
                "type": "btn",
                "name": "gloryholefriends",
                "left": 1460,
                "top": 500,
                "width": 400,
                "height": 100,
                "title": "Display Asshole (Fight)",
                "image": "28_transformation/b_gloryholefriends.png"
            }, 28);



            nav.button({
                "type": "btn",
                "name": "return",
                "left": 1200,
                "top": 800,
                "width": 256,
                "height": 256,
                "title": "Cancel",
                "image": "28_transformation/cancel.png"
            }, 28);
            break;
        case "cancel":
            char.room(g.internal);
            break;
        case "return":
            nav.killbutton("return");
            nav.killbutton("header");
            nav.killbutton("grid");
            nav.killbutton("strip");
            nav.killbutton("dance");
            nav.killbutton("shakecock");
            nav.killbutton("displayhole");
            nav.killbutton("gloryholebj");
            nav.killbutton("gloryholeanal");
            nav.killbutton("gloryholefriends");
            room28.btnclick("init");

            break;
        default:
            break;
    }
};

room28.chatcatch = function (callback) {
    switch (callback) {
        case "boobs":
            var tempChest = cl.c.chest + 1;
            if (tempChest < 7) {
                cl.c.chest = tempChest;
                nav.killall();
                nav.bg("28_transformation/chest_" + cl.c.chest + ".gif");
                g.roomTimeout = setTimeout(function () { char.room(g.pass) }, 4000);
            }

            break;
        default:
            break;
    }
};

room28.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "All that working out has given me a sexier body! " + sc.n("missy") + " is going to be so happy to see the new me!",
            button: [
                { chatID: -1, text: "[Click the chest]", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Oh no! I can feel that pee pee shrinking cream working! My penis is getting smaller!",
            button: [
                { chatID: -1, text: "[Shrink my pee pee]", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I must be dreaming.... I can feel as though my body wants to change.......",
            button: [
                { chatID: -1, text: ".....", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};