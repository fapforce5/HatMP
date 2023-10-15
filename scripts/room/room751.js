//Room name
var room751 = {};
room751.main = function () {
    var navList = [750, 0];
    nav.buildnav(navList);
    if (gv.get("money") > 14)
        chat(0, 751);
    else
        chat(1, 751);
};

room751.btnclick = function (name) {
    var sci = sc.get(name);
    var i, j;
    nav.killall();
    var te = sc.get(name);
    var tse = -1;
    var thisStep, nextStep;
    thisStep = nextStep = null;
    for (i = 0; i < sc.events.length; i++) {
        if (sc.events[i].name === name) {
            if (sc.events[i].step === sci.step) {
                tse = i;
                i = 9999;
            }
            else if (sc.events[i] > sci.step) {
                tse = i;
                i = 9999;
                console.log("overflow");
            }
        }
    }
    if (tse > -1) {
        thisStep = sc.events[tse].txt;
        if (tse < sc.events.length - 1) {
            if (sc.events[tse + 1].name === name && sc.events[tse + 1].step > 0)
                nextStep = sc.events[tse + 1].txt;
        }
    }
    g.pass = { name: te.display, thisStep: thisStep, nextStep: nextStep };
    chat(998, 751);
    nav.bg("751_crystal/bg1.jpg");
};

room751.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(750);
            break;
        case "fortune":
            var oncasetext = "";
            switch (gv.get("oncase")) {
                case "sewer":
                    if (!inv.has("sewer"))
                        oncasetext = "It appears you're on the Red Box case. Your next step is to <span class='hl'>" +
                            "Visit " + sc.n("g") + " at the gym and learn how to spar. </span>";
                    else if (!inv.has("redbox"))
                        oncasetext = "It appears you're on the Red Box case. Your next step is to <span class='hl'>" +
                            "Go to the alley next to the dance club and fight your way through the maze until you find " +
                            "the red box. Get the box and return it to " + sc.n("missy") + ".</span>";
                    else
                        oncasetext = "It appears you're on the Red Box case. Your next step is to <span class='hl'>" +
                            "Take the Red Box to " + sc.n("missy") + " in her office. </span>";
                    break;
                case "redroom":
                    oncasetext = "It appears you're on the Red Room challenge. Your next step is to <span class='hl'>" +
                        "You must go to " + sc.n("missy") + "'s and ride the elevator to the RED floor. There you must " +
                        "pass her challenges. </span>";
                    break;
                case "gloryholebj":
                    oncasetext = "It appears you're on the Bathroom Blow Job event. Your next step is to <span class='hl'>" +
                        "Go see " + sc.n("cecilia") + " in the park bathroom during the weekend. " +
                        "She'll show you how to suck a cock like the sissy you are. Go to the last toilet on the end. </span>";
                    break;
                case "shopping":
                    if (inv.has("tifgift"))
                        oncasetext = "It appears you're on the Crossdressing event. Your next step is to <span class='hl'>" +
                            "You need to either go to your room or " + sc.n("zoey") + "'s room and open that bag. </span>";
                    else
                        oncasetext = "It appears you're on the Crossdressing event. Your next step is to <span class='hl'>" +
                            "You need to visit " + sc.n("tiffany") + " and get your suprise. </span>";
                    break;
                case "diner":
                    oncasetext = "It appears you're on the Diner Case. Your next step is to <span class='hl'>" +
                        "You need to visit " + sc.n("jeffery") + " at the diner. If your wang is too long you'll " +
                        "need to visit " + sc.n("candy") + " at Toy 'n Us and get a chastity cage. When you're done visit " +
                        sc.n("missy") + " in her office. </span>";
                    break;
                case "dinerfail":
                case "dinersuccess":
                    oncasetext = "It appears you're on the Diner Case. Your next step is to <span class='hl'>" +
                        "Visit " + sc.n("missy") + " in her office. If " + sc.n("cecilia") + " isn't there, just walk in. </span>";
                    break;
                case "bigboobs":
                case "bigass":
                case "dslLips":
                case "smolpp":
                    oncasetext = "Go home and go to sleep. When you wake up you'll see your changes. ";
                    break;
                case "clothes0":
                    oncasetext = "You must go to " + sc.n("jones") + "'s house. He lives in the north east section of the residential " +
                        "neighborhood. Go there before dark. ";
                    break;
            }
            if (oncasetext !== "") {
                g.pass = oncasetext;
                chat(2, 751);
            }
            else {
                var i, j;
                var top = 0;
                j = 0;
                for (i = 0; i < sc.char.length; i++) {
                    if (sc.char[i].max > 0) {
                        if (j % 8 === 0)
                            top += 150;
                        nav.button({
                            "type": "btn",
                            "name": sc.char[i].name,
                            "left": ((j % 8) * 150) + 450,
                            "top": top,
                            "width": 100,
                            "height": 100,
                            "image": "../speaker/" + sc.char[i].image
                        }, 751);
                        j++;
                    }
                }
            }
            break;

        default:
            break;
    }
};

room751.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "crystal",
            text: g.pass,
            button: [
                { chatID: -1, text: "Thanks!", callback: "leave" }
            ]
        };
    }
    if (chatID === 998) {
        var thisText = "";
        if (g.pass.thisStep !== null && g.pass.nextStep !== null) {
            thisText = "For " + g.pass.name + " it looks like you just did <span class='hl-pink'>" + g.pass.thisStep +
                "</span>. Your next step is to " +
                "<span class='hl'>" + g.pass.nextStep + "</span>.";
            gv.mod("money", -15);
        }
        else if (g.pass.thisStep !== null) {
            thisText = "For " + g.pass.name + " it looks like you just did <span class='hl-pink'>" + g.pass.thisStep +
                "</span>. It appears your at the end of this path. ";
        }
        else {
            thisText = "Everything is cloudy. I can't see where you're going. ";
        }
        return {
            chatID: 998,
            speaker: "crystal",
            text: thisText,
            button: [
                { chatID: -1, text: "Thanks!", callback: "leave" },
                { chatID: -1, text: "Can I see another fortune?", callback: "fortune" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "crystal",
            text: "Would you like to hear your fortune for $15? [Work in progress]",
            button: [
                { chatID: -1, text: "I do, here's $15", callback: "fortune" },
                { chatID: -1, text: "Nope", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "crystal",
            text: "I'm a fortune teller and I can tell you don't have enough money for my services. Come back when you have $15",
            button: [
                { chatID: -1, text: "Oh, ok", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "crystal",
            text: "Oh... interesting.... I can see it now...",
            button: [
                { chatID: 999, text: "yes?", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};