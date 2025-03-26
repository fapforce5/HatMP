//computer
var room9 = {};

room9.main = function () {
    var btnList = room9_btnList();

    var navList = [g.pass];
    if (g.pass === 52)
        nav.bg("9_computer/52_computer.jpg");
    $('.room-topper').hide();

    $.each(btnList, function (i, v) {
        if (v.name === "powerOff" || v.name === "files" || v.name === "internet" || v.name === "porn" || v.name === "usb" || v.name === "missyusb" || v.name === "expose")
            nav.button(v, 9);
    });

    nav.buildnav(navList);
};



function room9_btnList() {
    var btnList = [
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

    if (inv.has("usb")) {
        btnList.push({
            "type": "btn",
            "name": "usb",
            "left": 800,
            "top": 119,
            "width": 157,
            "height": 162,
            "image": "9_computer/usb.png"
        });
    }

    if (inv.has("missyusb") && missy.activecase().caseId === 4) {
        btnList.push({
            "type": "btn",
            "name": "missyusb",
            "left": 800,
            "top": 119,
            "width": 157,
            "height": 162,
            "image": "9_computer/usb.png"
        });
    }

    if (sissy.st[29].ach) {
        btnList.push({
            "type": "btn",
            "name": "expose",
            "left": 800,
            "top": 591,
            "width": 157,
            "height": 162,
            "image": "9_computer/expose.png"
        });
    }
    return btnList;
}

room9.btnclick = function (name) {
    var btnList;
    switch (name) {
        case "powerOff":
            $('.room-topper').show();
            char.room(g.pass);
            break;
        case "internet":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "jobBG",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/09_jobBackground.png"
            }, 9);

            if (gv.get("jobapplynurse") === 0)
                nav.button({
                    "type": "btn",
                    "name": "jobNurse",
                    "left": 444,
                    "top": 222,
                    "width": 1421,
                    "height": 187,
                    "image": "9_computer/09_jobPI.png"
                }, 9);
            else
                nav.button({
                    "type": "img",
                    "name": "",
                    "left": 444,
                    "top": 222,
                    "width": 1421,
                    "height": 187,
                    "image": "9_computer/09_jobPIApplied.png"
                }, 9);

            if (gv.get("jobapplyconst") === 0)
                nav.button({
                    "type": "btn",
                    "name": "jobConstruction",
                    "left": 444,
                    "top": 408,
                    "width": 1421,
                    "height": 187,
                    "image": "9_computer/09_jobConstruction.png"
                }, 9);
            else
                nav.button({
                    "type": "img",
                    "name": "",
                    "left": 444,
                    "top": 408,
                    "width": 1421,
                    "height": 187,
                    "image": "9_computer/09_jobConstructionApplied.png"
                }, 9);

            if (gv.get("jobapplybeaver") === 0)
                nav.button({
                    "type": "btn",
                    "name": "jobBeaver",
                    "left": 444,
                    "top": 595,
                    "width": 1421,
                    "height": 187,
                    "image": "9_computer/09_jobMaid.png"
                }, 9);
            else
                nav.button({
                    "type": "img",
                    "name": "",
                    "left": 444,
                    "top": 595,
                    "width": 1421,
                    "height": 187,
                    "image": "9_computer/09_jobMaidApplied.png"
                }, 9);

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
        case "close":
            $('#room-buttons').html('');
            btnList = room9_btnList();
            $.each(btnList, function (i, v) {
                if (v.name === "powerOff" || v.name === "files" || v.name === "internet" || v.name === "porn" || v.name === "usb" || v.name === "missyusb" || v.name === "expose")
                    nav.button(v, g.roomID);
            });
            break;
        case "jobBeaver":
            gv.set("jobapplybeaver", 1);
            nav.button({
                "type": "img",
                "name": "map",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/beaver.jpg"
            }, 9);
            chat(2, 9);
            break;
        case "jobConstruction":
            nav.killall();
            gv.set("jobapplyconst", 1);
            nav.button({
                "type": "img",
                "name": "map",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/const.jpg"
            }, 9);
            chat(0, 9);
            g.roomMapAccess(100, true, true);
            break;
        case "jobNurse":
            gv.set("jobapplynurse", 1);
            nav.button({
                "type": "img",
                "name": "map",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/nurse.jpg"
            }, 9);
            chat(1, 9);
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
            nav.t({
                type: "btn",
                name: "pAnal",
                left: 500,
                top: 350,
                font: 40,
                hex: "#ffffff",
                text: "Anal Porn"
            }, 9);
            if (qdress.st[0].ach) {
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
            if (qdress.st[1].ach) {
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
            if (qdress.st[3].ach) {
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
        case "expose":
            nav.killall();
            var sissyType = "sissy3";
            if (inv.has("sissy0"))
                sissyType = "sissy0";
            else if (inv.has("sissy1"))
                sissyType = "sissy1";
            else if (inv.has("sissy2"))
                sissyType = "sissy3";
            nav.button({
                "type": "img",
                "name": "pornbg",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/" + sissyType + ".jpg"
            }, 9);
            var qtxt = "Ms. Black<br/>" +
                "Looking Sexy girl! I know these men will love what they see!</br><br/>" +
                "Big Dick Daddy<br/>" +
                "Looking good girl! Need to strip off that sissy suit and show us your pussy!<br/><br/>" +
                "Stphanie<br/>" +
                "So cute! <br/><br/>" +
                "Sissy Sally<br/>" +
                "Oh wow! Im jelly of your legs girl! <br/><br/>" +
                "Ron<br/>" +
                "I want to lick you from your toes to your holes<br/><br/>" +
                "J.<br/>" +
                "FFFUUUUUCCCKKKK!!!! I need that in my life! <br/><br/>" +
                "Killa B<br/>" +
                "I'm going to find you, tie you up, and fuck you hard bitch. <br/><br/>";
            nav.t({
                type: "img",
                name: "pornbg",
                left: 850,
                top: 250,
                font: 20,
                hex: "#333333",
                text: qtxt
            }, 9);
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
            gv.mod("arousal", 50);
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
            if (!weekly.get("momjerkoff") && g.pass === 10) {
                weekly.set("momjerkoff");
                nav.bg("9_computer/jackoff1.jpg");
                if (sc.getLevel("landlord") < 2) {
                    nav.killall();
                    chat(9, 9);
                }
                else {
                    nav.killall();
                    chat(6, 9);
                }
            }
            else {
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
                stats.mod("masturbate", "dick", 1);
                //gv.mod("jackoff", 1);
                chat(5, 9);
            }
            break;
        case "usb":
            char.room(6);

            break;
        case "missyusb":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "missyusbdoc",
                "left": 477,
                "top": 119,
                "width": 157,
                "height": 162,
                "image": "221_recip/notes.png"
            }, 9);
            nav.button({
                "type": "btn",
                "name": "powerOff",
                "left": 1667,
                "top": 540,
                "width": 160,
                "height": 209,
                "image": "9_computer/09_powerOff.png"
            }, 9);
            break;
        case "missyusbdoc":
            if (missy.get("reusableCaseCounter") < 3) {
                levels.mod("pi", 50, 999);
                missy.set("reusableCaseCounter", 3);
            }
            nav.killall();
            nav.button({
                "type": "img",
                "name": "missyusbdocx",
                "left": 442,
                "top": 46,
                "width": 1425,
                "height": 737,
                "image": "9_computer/missyusb.jpg"
            }, 9);
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
        case "jackoff4":
            nav.killbutton("jackoff4");
            chat(12, 9);
            break;
        
        default:
            break;
    }
};

room9.chatcatch = function (callback) {
    switch (callback) {
        case "jackoff3":
        case "jackoff5":
        case "jackoff6":
            nav.bg("9_computer/" + callback + ".jpg");
            break;
        case "jackoff4":
            nav.bg("9_computer/" + callback + ".gif");
            nav.next("jackoff4");
            break;
        case "reset":
            char.room(9);
            break;
        case "internet":
            room9.btnclick("internet");
            break;
        case "jackoff2":
        case "jackoffCaught":
            nav.bg("9_computer/" + callback + ".jpg");
            break;
        case "powerOff":
            room9.btnclick("powerOff");
            break;
        case "jackoffEnd":
            sex.mod("boob", false, "f", 1);
            sc.modLevel("landlord", 20, 10);
            sc.completeMissionTask("landlord", "misc", 0);
            cl.doCum();
            char.room(10);
            break;
        case "porn":
            nav.bg("9_computer/09_computer.jpg");
            room9.btnclick("porn");
            break;
        default:
            break;
    }
};

room9.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I applied for the Construction Position. I need to go to the construction site and speak " +
                "to the foreman in the trailer. ",
            button: [
                { chatID: -1, text: "Construction in a manly job! ", callback: "internet" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I applied to be a nurse. I need to go to the hospital downtown. ",
            button: [
                { chatID: -1, text: "Nursing is kind of a feminine job. ", callback: "internet" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I applied for to be a waitress at the Naked Beaver Diner. I need to  visit " +
                sc.n("jeffery") + " at the diner. ",
            button: [
                { chatID: -1, text: "Waitressing is kind of a feminine job. ", callback: "internet" }
            ]
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
        {
            chatID: 6,
            speaker: "landlord",
            text: "Why are you pants down? Are you masturbating to computer porn again? ",
            button: [
                { chatID: 7, text: "Wha... No....", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "It's ok sweetie. You know your dad used to jack off 10 times a day. He was always playing " +
                "with his penis. That man would have had enough sperm to keep my store stocked up for a year. " +
                sc.n("bigguy") + " on the other hand never masturbates. He says his hands don't feel as good " +
                "as my.. well, you know. Masturbation is fine. Like practicing for real sex. ",
            button: [
                { chatID: 8, text: "*blush*", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "Someday you'll meet a nice young woman and have sex, but it's good to explore your body. You " +
                "know I know a few tricks from the store. Show " + sc.n("landlord") + " you penis. I'll help you " +
                "practice for the real thing. ",
            button: [
                { chatID: 11, text: "[Show her your penis]", callback: "jackoff3" },
                { chatID: 15, text: sc.n("landlord") + "! AAAakkkk please leave!", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Is that porn? Are you masturbating?!? ",
            button: [
                { chatID: 10, text: "aaak " + sc.n("landlord") + "! You didn't knock! ", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "It's my house. I don't need to knock. Now put your penis away and do something " +
                "with your life. And stop wasting sperm. Ugh! I swear! I'm going to take your dirty " +
                "laundry and clean it. I swear boys are so nasty.! ",
            button: [
                { chatID: 16, text: "Yes " + sc.n("landlord") + ".", callback: "porn" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "Such a waste of a good boner waste on mastrubation. Wouldn't you like to rub it " +
                "betwen my big fat titties instead?",
            button: [
                { chatID: -1, text: "oh yeah!", callback: "jackoff4" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Doesn't that feel good rubbing your penis between my juicy titties? So much " +
                "better than your hand. Now cum for me. Show me how much you love rubbing your " +
                "penis between my breasts. ",
            button: [
                { chatID: 13, text: "FFFfffff", callback: "jackoff5" }
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "My little boy is such a big cummer! Wow!",
            button: [
                { chatID: 14, text: "*panting*", callback: "jackoff6" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "It's a good thing your " + sc.n("el") + " never leave their room. I don't think " +
                "I'ld be able to explain how your cum got all over me. ",
            button: [
                { chatID: -1, text: "haha yeah", callback: "jackoffEnd" }
            ]
        },
        {
            chatID: 15,
            speaker: "landlord",
            text: "ok. If you play with it too much it will fall off. Try meeting some real girls " +
                "honey. ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "reset" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "What terrible timing. She almost caught me jacking off. I'm so glad she didn't " +
                "walk in when I was about to shoot my load. Fuck that would be embarrasing. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
    ];
    return cArray[chatID];

}