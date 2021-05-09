//computer
var room9 = {};

room9.main = function () {
    var btnList = room9_btnList();

    var navList = [g.pass];
    if (g.pass === 52)
        nav.bg("9_computer/52_computer.jpg");
    $('.room-topper').hide();

    $.each(btnList, function (i, v) {
        if (v.name === "powerOff" || v.name === "files" || v.name === "internet" || v.name === "porn")
            nav.button(v, 9);
    });

    nav.buildnav(navList);
};



function room9_btnList() {
    return [
        {
            "type": "btn",
            "name": "powerOff",
            "left": 1667,
            "top": 540,
            "width": 160,
            "height": 209,
            "image": "9_computer/09_powerOff.png"
        },
        {
            "type": "btn",
            "name": "files",
            "left": 477,
            "top": 355,
            "width": 157,
            "height": 162,
            "image": "9_computer/09_files.png"
        },
        {
            "type": "btn",
            "name": "internet",
            "left": 477,
            "top": 119,
            "width": 157,
            "height": 162,
            "image": "9_computer/09_internet.png"
        },
        {
            "type": "btn",
            "name": "porn",
            "left": 477,
            "top": 591,
            "width": 157,
            "height": 162,
            "image": "9_computer/porn.png"
        },
        {
            "type": "img",
            "name": "jobBG",
            "left": 442,
            "top": 46,
            "width": 1425,
            "height": 737,
            "image": "9_computer/09_jobBackground.png"
        },
        {
            "type": "btn",
            "name": "jobMaid",
            "left": 444,
            "top": 595,
            "width": 1421,
            "height": 187,
            "image": "9_computer/09_jobMaid.png"
        },
        {
            "type": "btn",
            "name": "jobMaidApplied",
            "left": 444,
            "top": 595,
            "width": 1421,
            "height": 187,
            "image": "9_computer/09_jobMaidApplied.png"
        },
        {
            "type": "btn",
            "name": "jobPI",
            "left": 444,
            "top": 222,
            "width": 1421,
            "height": 187,
            "image": "9_computer/09_jobPI.png"
        },
        {
            "type": "btn",
            "name": "jobPIApplied",
            "left": 444,
            "top": 222,
            "width": 1421,
            "height": 187,
            "image": "9_computer/09_jobPIApplied.png"
        },
        {
            "type": "btn",
            "name": "jobConstruction",
            "left": 444,
            "top": 408,
            "width": 1421,
            "height": 187,
            "image": "9_computer/09_jobConstruction.png"
        },
        {
            "type": "btn",
            "name": "jobConstructionApplied",
            "left": 444,
            "top": 408,
            "width": 1421,
            "height": 187,
            "image": "9_computer/09_jobConstructionApplied.png"
        },
        {
            "type": "img",
            "name": "navBar",
            "left": 443,
            "top": 47,
            "width": 1424,
            "height": 53,
            "image": "9_computer/09_tabNavBar.jpg"
        },
        {
            "type": "btn",
            "name": "close",
            "left": 450,
            "top": 53,
            "width": 42,
            "height": 42,
            "image": "9_computer/09_close.png"
        }
    ];
}

room9.btnclick = function (name) {
    var btnList;
    switch (name) {
        case "powerOff":
            $('.room-topper').show();
            char.room(g.pass);
            break;
        case "internet":
            $('#room-buttons').html('');
            btnList = room9_btnList();
            $.each(btnList, function (i, v) {
                if (v.name === "jobMaid") {
                    if (sc.getstep("jeffery") === 0)
                        nav.button(v, g.roomID);
                }
                if (v.name === "jobConstruction") {
                    if (sc.getstep("construction") === 0)
                        nav.button(v, g.roomID);
                }
                if (v.name === "jobPI") {
                    if (sc.getstep("missy") === 0)
                        nav.button(v, g.roomID);
                }
                if (v.name === "jobMaidApplied") {
                    if (sc.getstep("jeffery") !== 0)
                        nav.button(v, g.roomID);
                }
                if (v.name === "jobConstructionApplied") {
                    if (sc.getstep("construction") !== 0)
                        nav.button(v, g.roomID);
                }
                if (v.name === "jobPIApplied") {
                    if (sc.getstep("missy") !== 0)
                        nav.button(v, g.roomID);
                }
                if (v.name === "navBar" || v.name === "jobBG" || v.name === "close")
                    nav.button(v, g.roomID);

            });
            break;
        case "close":
            $('#room-buttons').html('');
            btnList = room9_btnList();
            $.each(btnList, function (i, v) {
                if (v.name === "powerOff" || v.name === "files" || v.name === "internet" || v.name === "porn")
                    nav.button(v, g.roomID);
            });
            break;
        case "jobMaid":
            sc.setstep("jeffery", 1);
            room9.btnclick("internet");
            chat(2, 9);
            break;
        case "jobConstruction":
            sc.setstep("construction", 1);
            room9.btnclick("internet");
            chat(0, 9);
            g.roomMapAccess(100, true, true);
            break;
        case "jobPI":
            sc.setstep("missy", 1);
            room9.btnclick("internet");
            chat(1, 9);
            g.roomMapAccess(203, true, false);
            break;
        case "files":


            break;
        case "porn":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "pornbg",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/pornbg.jpg"
            }, 9);
            nav.t({
                type: "btn",
                name: "pStraight",
                left: 500,
                top: 250,
                font: 40,
                hex: "#ffffff",
                text: "Straight Porn"
            }, 9);
            if (sc.getstep("missy") > 9) {
                nav.t({
                    type: "btn",
                    name: "pAnal",
                    left: 500,
                    top: 350,
                    font: 40,
                    hex: "#ffffff",
                    text: "Anal Porn"
                }, 9);
                if (g.sissy[3].ach) {
                    nav.t({
                        type: "btn",
                        name: "pStrapon",
                        left: 500,
                        top: 450,
                        font: 40,
                        hex: "#ffffff",
                        text: "Strapon Porn"
                    }, 9);
                }
                if (g.sissy[12].ach) {
                    nav.t({
                        type: "btn",
                        name: "pfuta",
                        left: 500,
                        top: 550,
                        font: 40,
                        hex: "#ffffff",
                        text: "Futa Porn"
                    }, 9);
                }
                if (g.sissy[16].ach) {
                    nav.t({
                        type: "btn",
                        name: "pSissy",
                        left: 500,
                        top: 650,
                        font: 40,
                        hex: "#ffffff",
                        text: "Sissy Porn"
                    }, 9);
                }
            }
            nav.button({
                "type": "btn",
                "name": "close",
                "left": 450,
                "top": 53,
                "width": 42,
                "height": 42,
                "image": "9_computer/09_close.png"
            }, 9);
            break;
        case "pStraight":
        case "pAnal":
        case "pStrapon":
        case "pfuta":
        case "pSissy":
            nav.killall();
            g.mod("arousal", 50);
            nav.button({
                "type": "img",
                "name": "pornbg",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/" + name + ".jpg"
            }, 9);
            if (cl.c.chastity !== null) {
                nav.button({
                    "type": "btn",
                    "name": "jackitNo",
                    "left": 1056,
                    "top": 816,
                    "width": 255,
                    "height": 255,
                    "image": "9_computer/jackitNo.png"
                }, 9);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "jackit",
                    "left": 801,
                    "top": 848,
                    "width": 547,
                    "height": 192,
                    "image": "9_computer/jackit.png"
                }, 9);
            }
            break;
        case "jackitNo":
            chat(4, 9);
            break;
        case "jackit":
            nav.killbutton("jackit");
            nav.button({
                "type": "img",
                "name": "splat",
                "left": 872,
                "top": 104,
                "width": 424,
                "height": 810,
                "image": "9_computer/splat.png"
            }, 9);
            cl.doCum(false);
            chat(5, 9);
            break;
        default:
            break;
    }
};

room9.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(9);
            break;
        default:
            break;
    }
};

room9.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "You have applied for the Construction Position. To complete your application please " +
                "go to the construction site and speak to the foreman in the trailer. ",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "You have applied for the Private Investigator Position. To complete your " + 
            "application Purchase a Private Investigator's License at city hall then bring that to " + sc.n("missy") + 
            " downtown. ",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "You have applied for to be a waitress at the Naked Beaver Diner. To complete your " +
                "application please visit " + sc.n("jeffery") + " downtown. ",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "You have applied for the Maid Position. To complete your application visit The Maid Service Building to complete your application. ",
            button: []
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Damn I'm so horny!!! This stupid chastity cage is the worst!!!!",
            button: [
                { chatID: -1, text: "groan", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "AAAaaaaaa YYYYEEESSSS!",
            button: [
                { chatID: -1, text: "Turn off the porn and wipe your cum off the monitor", callback: "reset" }
            ]
        },
    ];
    return cArray[chatID];

}