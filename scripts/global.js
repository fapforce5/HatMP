var g = {}; //global
g.ratio = 1;// nav_ratio = 1;
g.roomTimeout = null;// var nav_roomTimout = null;
g.roomTimeout2 = null;
g.pass = null;//var nav_roomPass = null;
g.internal = null;
g.fight = null;
g.map = null;
g.roomAdd = new Array();
g.saveState = null;
g.startDate = new Date(2012, 0, 1, 0, 0, 0, 0);
g.version = 10.0;
g.versionText = "0.10.0 - 28 JAN 2021";
g.notes = "v0.10.0";
g.newLoad = false;
g.back = false;
g.altview = false;
g.tview = "f";
g.lview = "b";
g.prevRoom;
g.prevview = null;
g.pw = "dGhhbmt5b3U=";
g.passtime = [0, 8, 10, 11, 16, 29, 50, 51, 52, 55, 100, 450, 500, 650, 901];
g.roomChange = [10, 12, 56, 201, 209, 451, 452, 503, 552, 553, 902, 903];

g.roomID = 1;
g.dt = g.startDate;

g.st = [
    { n: "shower", t: g.startDate, q: "date" },
    { n: "cum", t: g.startDate, q: "date" },
    { n: "knockedup", t: null, q: "date" },

    { n: "difficulty", t: 1, q: "int" },
    { n: "money", t: 450, q: "money" },
    { n: "rent", t: 200, q: "zero" },
    { n: "rentOwed", t: 0, q: "zero" },
    { n: "arousal", t: 5, q: "hundred" },
    { n: "rentKnockOff", t: 0, q: "zero" },
    { n: "energy", t: 95, q: "energy" },
    { n: "maxenergy", t: 100, q: "zero" },
    { n: "fitness", t: 0, q: "hundred" },
    { n: "hormone", t: 0, q: "hundred" },
    { n: "autohormone", t: false, q: "bool" },
    { n: "chastityLock", t: false, q: "bool" },
    { n: "leg", t: 0, q: "hundred" },
    { n: "body", t: 0, q: "hundred" },
    { n: "d", t: 0, q: "hundred" },
    { n: "sissy", t: 0, q: "sissy" },
    { n: "sissyLevel", t: 0, q: "zero" },
    { n: "sissyPoints", t: 0, q: "zero" },
    { n: "pill", t: null, q: "string" },
    { n: "legLevel", t: 0, q: "zero" },
    { n: "bodyLevel", t: 0, q: "zero" },
    { n: "fitnessLevel", t: 0, q: "zero" },
    { n: "dLevel", t: 0, q: "zero" },
    { n: "map", t: 0, q: "int" },
    { n: "jobConstructionPay", t: 0, q: "zero" },
    { n: "jobConstWorkToday", t: 0, q: "int" },
    { n: "momClosetLube", t: 3, q: "int" },
    { n: "momClosetMoney", t: 7, q: "int" },
    { n: "momearnbackhome", t: 0, q: "int" },
    { n: "bladder", t: 0, q: "zero" },
    { n: "painting", t: "", q: "string" },
    { n: "bodyhair", t: 100, q: "zero" },
    { n: "reddoorloc", t: 1, q: "int" },
    { n: "makeup", t: 0, q: "int" },
    { n: "sewerEnd", t: 0, q: "int" },
    { n: "sewerMap", t: "", q: "string" },
    { n: "sewerID", t: 0, q: "int" },
    { n: "shinkCock", t: false, q: "bool" },
    { n: "lockdrawer", t: false, q: "bool" },
    { n: "puter", t: false, q: "bool" },
    { n: "slimeMonsters", t: true, q: "bool" },
    { n: "oncase", t: null, q: "string" },

    { n: "fighttimer", t: 4000, q: "int" },

    { n: "giveOralMale", t: 0, q: "int" },
    { n: "giveOralFemale", t: 0, q: "int" },
    { n: "receiveOralMale", t: 0, q: "int" },
    { n: "receiveOralFemale", t: 0, q: "int" },

    { n: "receiveBoobJob", t: 0, q: "int" },
    { n: "giveBoobJob", t: 0, q: "int" },

    { n: "loadSwollowed", t: 0, q: "int" },
    { n: "loadSpit", t: 0, q: "int" },
    { n: "creamPied", t: 0, q: "int" },

    { n: "giveAnalMale", t: 0, q: "int" },
    { n: "giveAnalFemale", t: 0, q: "int" },
    { n: "receiveAnalMale", t: 0, q: "int" },
    { n: "receiveAnalFemale", t: 0, q: "int" },

    { n: "giveHandjobMale", t: 0, q: "int" },
    { n: "giveFingerFemale", t: 0, q: "int" },
    { n: "receiveHandjobMale", t: 0, q: "int" },
    { n: "receiveHandjobFemale", t: 0, q: "int" },

    { n: "giveFootjobMale", t: 0, q: "int" },
    { n: "giveFootjobFemale", t: 0, q: "int" },
    { n: "receiveFootjobMale", t: 0, q: "int" },
    { n: "receiveFootjobFemale", t: 0, q: "int" },

    { n: "fuckPussy", t: 0, q: "int" },
    { n: "getPussyFucked", t: 0, q: "int" },

    { n: "pissedonMale", t: 0, q: "int" },
    { n: "pissedonFemale", t: 0, q: "int" },

    { n: "girlname", t: "Scarlett", q: "string" },

    
    { n: "jobConstGetRaise", t: false, q: "bool" },
    { n: "lockboobs", t: false, q: "bool" },
    { n: "lockbutt", t: false, q: "bool" },
    { n: "chloe", t: false, q: "day" },
    { n: "enterSister", t: false, q: "day" },
    { n: "evaDayEvent", t: false, q: "day" },
    { n: "lolaDayEvent", t: false, q: "day" },
    { n: "tiffanyDayEvent", t: false, q: "day" },
    { n: "candyDayEvent", t: false, q: "day" },
    { n: "momChore", t: false, q: "day" },
    { n: "zoeyDay", t: false, q: "day" },
    { n: "choreDishes", t: false, q: "day" },
    { n: "showerPeek", t: false, q: "day" },
    { n: "momRaidCloset", t: false, q: "day" },
    { n: "tookHormonePill", t: false, q: "day" },
    { n: "gworkout", t: false, q: "day" },
    { n: "tim", t: false, q: "day" },
    { n: "cindy", t: false, q: "day" },
    { n: "doc", t: false, q: "day" },

    { n: "bigguy", t: false, q: "day" },
    { n: "cardgame", t: false, q: "day" },
    { n: "momchat", t: false, q: "day" },
    { n: "buttholeplay", t: false, q: "day" },
    { n: "reddoor", t: false, q: "day" },
    { n: "cultrun", t: false, q: "day" },
];

g.sissy = [
    
    { id: 0, pID: 54, icon: "missy1", x: 2, y: 7, name: "Tea Time", description: "Follow Instructions", ach: false, active: true, points: false },
    { id: 1, pID: 0, icon: "missy2", x: 3, y: 7, name: "Patience", description: "Follow Instructions", ach: false, active: true, points: false },
    { id: 2, pID: 20, icon: "missy3", x: 4, y: 9, name: "Furniture", description: "You will learn to know your place.", ach: false, active: true, points: false },

    { id: 3, pID: 2, icon: "hypno0", x: 5, y: 9, name: "Hypno", description: "Watch the hypno tube", ach: false, active: true, points: false },
    { id: 4, pID: 3, icon: "hypno1", x: 5, y: 10, name: "Hypno", description: "Watch the hypno tube", ach: false, active: false, points: true },
    { id: 5, pID: 4, icon: "hypno2", x: 5, y: 11, name: "Hypno", description: "Watch the hypno tube", ach: false, active: true, points: true },

    { id: 6, pID: 3, icon: "chastity", x: 6, y: 9, name: "Chastity Training", description: "What a worthless flag of skin you have", ach: false, active: true, points: false },
    { id: 7, pID: 6, icon: "cock1", x: 6, y: 10, name: "Average Size Cock", description: "Just enough to still please women", ach: false, active: false, points: true },
    { id: 8, pID: 7, icon: "cock2", x: 6, y: 11, name: "Below Average Cock", description: "Women will be dissapointed in your manhood", ach: false, active: true, points: true },
    { id: 9, pID: 8, icon: "cock3", x: 6, y: 12, name: "Tiny pp", description: "Hahaha, that's too small to give anyone pleasure", ach: false, active: true, points: true },
    { id: 10, pID: 9, icon: "cock4", x: 6, y: 13, name: "It's a Clitty", description: "You're no longer a man, sissy", ach: false, active: true, points: true },
    { id: 11, pID: 51, icon: "cock5", x: 20, y: 9, name: "Wet Juicy Pussy", description: "Finally you've reached your final potential", ach: false, active: false, points: true },

    { id: 12, pID: 6, icon: "bj", x: 7, y: 9, name: "Blow Me", description: "Work on your BJ skills", ach: false, active: true, points: false },
    { id: 13, pID: 12, icon: "gloryhole0", x: 7, y: 8, name: "Glory Hole Slut", description: "Present your mouth at a glory hole", ach: false, active: true, points: true },
    { id: 14, pID: 12, icon: "date0", x: 7, y: 10, name: "Firendly Oral", description: "Go down on your dates and friends [Not Implemented]", ach: false, active: false, points: true },

    { id: 15, pID: 12, icon: "redroom", x: 8, y: 9, name: "Red Room", description: "Prove your Worth", ach: false, active: true, points: false },

    { id: 16, pID: 15, icon: "takeit", x: 9, y: 9, name: "Take It Slut", description: "Bend over and serve", ach: false, active: true },
    { id: 17, pID: 16, icon: "gloryhole1", x: 9, y: 8, name: "Fuck Anonymous Cock", description: "Present your ass at a glory hole [Not Implemented]", ach: false, active: true, points: true },
    { id: 18, pID: 16, icon: "date1", x: 9, y: 10, name: "Make Your Date Happy", description: "Offer your sissy hole to your dates and friends [Not Implemented]", ach: false, active: true, points: true },

    { id: 19, pID: 16, icon: "sewer", x: 10, y: 9, name: "Sewer Search", description: "Search the sewer", ach: false, active: true, points: false },

    { id: 20, pID: 1, icon: "p0", x: 4, y: 7, name: "Meet and Greet", description: "Meet your new instructor", ach: false, active: true, points: false },
    { id: 21, pID: 20, icon: "p1", x: 4, y: 5, name: "Sit Like A Lady", description: "How to sit like a proper lady", ach: false, active: true, points: false },
    { id: 22, pID: 21, icon: "p2", x: 4, y: 4, name: "How to Pee", description: "How to pee like a lady", ach: false, active: true, points: false },
    { id: 23, pID: 24, icon: "p3", x: 4, y: 3, name: "Dress", description: "How to dress like a lady", ach: false, active: true, points: false },

    { id: 24, pID: 22, icon: "cross0", x: 4, y: 3, name: "Cross dress", description: "Cross Dressing Class", ach: false, active: true, points: false },
    { id: 25, pID: 24, icon: "heels", x: 3, y: 3, name: "High Heels", description: "Learn how to walk in high heels", ach: false, active: false, points: true },
    { id: 26, pID: 24, icon: "makeup0", x: 4, y: 2, name: "Makeup", description: "You can go out wearing makeup", ach: false, active: false, points: true },
    { id: 27, pID: 26, icon: "makeup1", x: 4, y: 1, name: "Piercing", description: "You can get piercings", ach: false, active: false, points: true },

    { id: 28, pID: 24, icon: "diner", x: 6, y: 3, name: "Diner", description: "Diner Case", ach: false, active: true, points: false },

    { id: 29, pID: 28, icon: "cross1", x: 7, y: 3, name: "Cross dress", description: "You can cross dress in public", ach: false, active: true, points: false },

    { id: 30, pID: 28, icon: "makeup2", x: 6, y: 6, name: "Tattoos", description: "You can get tattoos  [Not Implemented]", ach: false, active: false, points: true },

    { id: 31, pID: 29, icon: "clothes0", x: 7, y: 1, name: "Sexy Clothes", description: "You can buy sexy clothes", ach: false, active: true, points: true },
    { id: 32, pID: 31, icon: "clothes1", x: 8, y: 1, name: "Panties?", description: "You don't have to wear panties or bra", ach: false, active: true, points: true },
    { id: 33, pID: 32, icon: "clothes2", x: 9, y: 1, name: "Slutty Clothes", description: "You can buy slutty clothes", ach: false, active: true, points: true },
    { id: 34, pID: 33, icon: "clothes3", x: 10, y: 1, name: "Nudist", description: "You can go out in the nude. Be careful you can still be arrested.", ach: false, active: true, points: true },

    { id: 35, pID: 29, icon: "chest2", x: 8, y: 2, name: "A Cups", description: "Awwww you've spouted cute little buds", ach: false, active: true, points: true },
    { id: 36, pID: 35, icon: "chest3", x: 9, y: 2, name: "B Cups", description: "A nice pair for a nice girl", ach: false, active: true, points: true },
    { id: 37, pID: 36, icon: "chest4", x: 10, y: 2, name: "C Cups", description: "Any girl would be proud of these titties", ach: false, active: true, points: true },
    { id: 38, pID: 37, icon: "chest5", x: 11, y: 2, name: "DD Cups", description: "Ok.. Now they're getting a bit big", ach: false, active: true, points: true },
    { id: 39, pID: 38, icon: "chest6", x: 12, y: 2, name: "Bimbo Tits", description: "Only a complete bimbo whore would go this big", ach: false, active: true, points: true },

    { id: 40, pID: 29, icon: "leg1", x: 8, y: 4, name: "Feminine Legs", description: "A nice pair of legs for a nice girl", ach: false, active: true, points: true },
    { id: 41, pID: 40, icon: "leg2", x: 9, y: 4, name: "Tight Booty", description: "Men will start to notice a nice butt like this", ach: false, active: true, points: true },
    { id: 42, pID: 41, icon: "leg3", x: 10, y: 4, name: "Big Booty", description: "Women will notice a big booty like this", ach: false, active: true, points: true },
    { id: 43, pID: 42, icon: "leg4", x: 11, y: 4, name: "Phat Ass", description: "Everyone wants to slap a booty this big", ach: false, active: true, points: true },
    { id: 44, pID: 43, icon: "leg5", x: 12, y: 4, name: "Porn Star Ass", description: "An ass built for cock", ach: false, active: true, points: true },
    
    { id: 45, pID: 29, icon: "lip1", x: 7, y: 5, name: "Girl's Lips", description: "What a purdy mouth you have", ach: false, active: true, points: true },
    { id: 46, pID: 45, icon: "lip2", x: 8, y: 5, name: "Bimbo Lips", description: "Everyone wants to fuck your soft lips", ach: false, active: true, points: true },

    { id: 47, pID: 19, icon: "fight0", x: 10, y: 10, name: "Strip", description: "You can strip your clothes in a fight", ach: false, active: true, points: true },
    { id: 48, pID: 47, icon: "fight1", x: 10, y: 11, name: "Shake Your Cock", description: "You can shake your cock at your fight opponent", ach: false, active: true, points: true },
    { id: 49, pID: 48, icon: "fight2", x: 10, y: 12, name: "Sexy Dance", description: "You can do a sexy dance during a fight", ach: false, active: true, points: true },
    { id: 50, pID: 49, icon: "fight3", x: 10, y: 13, name: "Present Your Sissy Hole", description: "You can present your sissy hole during a fight", ach: false, active: true, points: true },

    { id: 51, pID: 19, icon: "gloryhole2", x: 11, y: 8, name: "Whore", description: "Work the street corner like the dirty slutty bimbo you are [Not Implemented]", ach: false, active: false, points: true },
    { id: 52, pID: 51, icon: "gloryhole2", x: 11, y: 8, name: "Whore", description: "Work the street corner like the dirty slutty bimbo you are [Not Implemented]", ach: false, active: false, points: true },
    { id: 53, pID: 52, icon: "date2", x: 11, y: 10, name: "Submissive Slut", description: "Full slut. Your date can use you however they want [Not Implemented]", ach: false, active: false, points: true },

    { id: 54, pID: null, icon: "missy0", x: 1, y: 7, name: "Contract", description: "Introduction", ach: false, active: true, points: false },

    { id: 55, pID: 19, icon: "redbox", x: 11, y: 9, name: "What's in the box", description: "Discover what's in the box!", ach: false, active: false, points: false },
    { id: 56, pID: 0, icon: "cancel", x: 19, y: 2, name: "Cancel", description: "Cancel and leave the classroom", ach: false, active: true, points: false },

    { id: 57, pID: 34, icon: "stripper", x: 13, y: 1, name: "Stripper", description: "Work as a stripper on a case", ach: false, active: false, points: false }
];

g.supersissy = function () {
    for (var i = 0; i < g.sissy.length; i++)
        g.sissy[i].ach = true;
};

g.i = function (name) {
    var thisIndex = -1;
    for (i = 0; i < g.st.length; i++) {
        if (g.st[i].n === name) {
            thisIndex = i;
            type = g.st[i].t;
            break;
        }
    }
    return thisIndex;
};

g.set = function (name, amount) {
    var index = g.i(name);
    var oldAmount, newAmount;
    oldAmount = g.st[index].t;
    g.st[index].t = amount;

    newAmount = amount - oldAmount;
    g.checkPop(name, newAmount);
};

g.get = function (name) {
    var thisIndex = g.i(name);
    if(thisIndex > -1)
        return g.st[thisIndex].t;
    console.log("get missing name: " + name);
    return null;
};

g.mod = function (name, amount) {
    var i, index, type;
    index = g.i(name);

    if (index > -1) {
        type = g.st[index].q;
        switch (type) {
            case "zero":
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                g.checkPop(name, amount);
                break;
            case "money":
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                g.checkPop(name, amount);
                $('#char_money').text('$' + g.st[index].t);
                break;
            case "hundred":
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                if (g.st[index].t > 100)
                    g.st[index].t = 100;
                g.checkPop(name, amount);
                break;
            case "energy":
                var maxEnergy = 100;
                for (i = 0; i < g.st.length; i++) {
                    if (g.st[i].n === "maxenergy") {
                        maxEnergy = g.st[i].t;
                        break;
                    }
                }
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                if (g.st[index].t > maxEnergy)
                    g.st[index].t = maxEnergy;
                g.checkPop(name, amount);
                break;
            case "day":
            case "bool":
                g.st[index].t = amount;
                break;
            case "int":
                g.st[index].t += amount;
                break;
            case "date":
                g.st[index].t = new Date(g.st[index].t.getTime() + (amount * 60000));
                break;
            case "sissy":
                if (g.sissy[0].ach) {
                    g.st[index].t += amount;
                    if (amount > 0)
                        g.popUpNotice("You've earned " + amount + " extra credit SISSY POINTS");
                    else if (amount < 0)
                        g.popUpNotice("You've lost " + math.abs(amount) + " extra credit SISSY POINTS");
                }
                break;
            default:
                console.log("unknown g.mod type: " + type + ", name: " + name);
                break;
        }
    }
    else
        console.log("unknown g.mod: " + name);
};

g.gt = function (first, second) {
    return g.get(first) > g.get(second);
};

g.setflag = function (name) {
    for (var i = 0; i < g.st.length; i++) {
        if (g.st[i].n === name) {
            g.st[i].t = true;
            return;
        }
    }
};

g.checkflag = function (name) {
    for (var i = 0; i < g.st.length; i++) {
        if (g.st[i].n === name) {
            return g.st[i].t;
        }
    }
    console.log("Flag name: " + name + " not found. ");
    return false;
};

g.newday = function () {
    for (var i = 0; i < g.st.length; i++) {
        if (g.st[i].q === "day") {
            g.st[i].t = false;
        }
    }
};


g.checkPop = function (name, amount) {
    switch (name) {
        case "money":
            if (amount !== 0) {
                if (amount < 0)
                    g.popUpNotice("You spent<br />$" + Math.abs(amount));
                else
                    g.popUpNotice("You received<br />$" + amount);
            }
            break;
        case "jobConstructionPay":
            g.popUpNotice("You got a<br />$" + amount + " raise");
            break;
        case "hormone":
            if (amount > 0)
                g.popUpNotice("You feel more feminine");
            char.makeGraph();
            break;
        case "energy":
            if (amount > 0)
                g.popUpNotice("You Gained " + amount.toString() + " Energy");
            cl.energydisplay();
            char.makeGraph();
            break;
        case "arousal": //0-100
            cl.cockDisplay();
            break;
        case "fitness":
            g.popUpNotice("You fitness " + (amount < 0 ? "Decreased" : "Increased" + "  by ") + Math.abs(amount));
            char.makeGraph();
            break;
        case "leg":
            g.popUpNotice("Your legs are " + (amount < 0 ? "weaker" : "stronger"));
            char.makeGraph();
            break;
        case "body":
            g.popUpNotice("Your arms are " + (amount < 0 ? "weaker" : "stronger"));
            char.makeGraph();
            break;
    }
};

g.popUpNotice = function (notice) {
    if ($('#char_alert').is(":visible")) {
        $('#char_alert').append("<hr />" + notice);
    }
    else {
        $('#char_alert').html(notice).fadeIn(1000, function () {
            $('#char_alert').fadeOut(3000);
        });
    }
};

g.gethourdecimal = function () {
    return g.dt.getHours() + (g.dt.getMinutes() / 60);
};

g.rooms = [
    
    { roomID: 0, name: "Map", image: "map/map1.jpg", nightImage: "map/map1_night.jpg", houseID: 0, btn: "roomBtn_000.png" },
    { roomID: 1, name: "Start", image: "1_startScreen/1_startscreen.png", nightImage: "1_startScreen/1_startscreen.png", houseID: -1, btn: "roomBtn_-1.png" },
    { roomID: 2, name: "Help", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: -1, btn: "roomBtn_-1.png" },
    { roomID: 3, name: "Check", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: -1, btn: "roomBtn_-1.png" },

    { roomID: 7, name: "My Room ALT", image: "7_mainCharRoomAlt/7_mainCharRoomAlt.jpg", nightImage: "7_mainCharRoomAlt/7_mainCharRoomAlt.jpg", houseID: 16, btn: "roomBtn_7.png" },
    { roomID: 8, name: "My Wardrobe", image: "8_wardrobe/8_wardrobe.jpg", nightImage: "8_wardrobe/8_wardrobe.jpg", houseID: 16, btn: "roomBtn_8.png" },
    { roomID: 9, name: "Computer", image: "9_computer/09_computer.jpg", nightImage: "9_computer/09_computer.jpg", houseID: 16, btn: "roomBtn_9.png" },
    { roomID: 10, name: "My Room", image: "10_mainchar/10_bedroom.png", nightImage: "10_mainchar/10_bedroomNight.png", houseID: 16, btn: "roomBtn_10.png" },
    { roomID: 11, name: "2nd Floor", image: "11_hallway/11_hallway.jpg", nightImage: "11_hallway/11_hallwayNight.jpg", houseID: 16, btn: "roomBtn_11.png" },
    { roomID: 12, name: "Bathroom", image: "12_bathroom/12_bathroom.png", nightImage: "12_bathroom/12_bathroom.png", houseID: 16, btn: "roomBtn_12.png" },
    { roomID: 13, name: "Girl's Room", image: "13_sisterRoom/room.jpg", nightImage: "13_sisterRoom/roomNight.jpg", houseID: 16, btn: "roomBtn_13.png" },
    { roomID: 14, name: "Master Bedroom", image: "14_motherRoom/14_motherRoom.jpg", nightImage: "14_motherRoom/14_motherRoomNight.jpg", houseID: 16, btn: "roomBtn_14.png" },
    { roomID: 15, name: "Kitchen", image: "15_kitchen/day.jpg", nightImage: "15_kitchen/night.jpg", houseID: 16, btn: "roomBtn_15.png" },
    { roomID: 16, name: "1st Floor", image: "16_livingRoom/16_downStairs.jpg", nightImage: "16_livingRoom/16_downStairsNight.jpg", houseID: 16, btn: "roomBtn_16.png" },
    { roomID: 17, name: "Master Closet", image: "17_motherCloset/017_motherCloset.png", nightImage: "17_motherCloset/017_motherCloset.png", houseID: 16, btn: "roomBtn_17.png" },
    { roomID: 18, name: "Nightstand Drawer", image: "18_bedroomDrawer/018_drawer.jpg", nightImage: "18_bedroomDrawer/018_drawer.jpg", houseID: 16, btn: "roomBtn_18.png" },
    { roomID: 19, name: "On Bed", image: "19_layInBed/bg.jpg", nightImage: "19_layInBed/bg.jpg", houseID: 16, btn: "roomBtn_19.png" },
    { roomID: 20, name: "Dishes", image: "20_dishes/20_dishes.png", nightImage: "20_dishes/20_dishes.png", houseID: 16, btn: "roomBtn_20.png" },
    { roomID: 21, name: "Mother's Room Spanking", image: "21_motherSpank/021_spankBG.jpg", nightImage: "21_motherSpank/021_spankBG.jpg", houseID: 16, btn: "roomBtn_21.png" },
    { roomID: 22, name: "Toilet", image: "22_toilet/12.jpg", nightImage: "22_toilet/12.jpg", houseID: 10, btn: "roomBtn_22.png" },
    { roomID: 23, name: "Truth or Dare", image: "24_spinTheBottle/013_spinBG.jpg", nightImage: "24_spinTheBottle/013_spinBG.jpg", houseID: 16, btn: "roomBtn_23.png" },
    { roomID: 24, name: "Spin the bottle", image: "24_spinTheBottle/013_spinBG.jpg", nightImage: "24_spinTheBottle/013_spinBG.jpg", houseID: 16, btn: "roomBtn_24.png" },
    { roomID: 25, name: "Dining Room", image: "25_dining/025_diningRoom.jpg", nightImage: "25_dining/025_diningRoomNight.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 26, name: "Living Room", image: "26_livingRoom/dayTable.jpg", nightImage: "26_livingRoom/night.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 27, name: "Mirror", image: "12_bathroom/012_brushTeeth.jpg", nightImage: "12_bathroom/012_brushTeeth.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 28, name: "Sleep", image: "28_transformation/sleep.jpg", nightImage: "28_transformation/sleep.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 29, name: "Back yard", image: "29_backyard/bg.jpg", nightImage: "29_backyard/night.jpg", houseID: 29, btn: "roomBtn_29.png" },
    { roomID: 30, name: "Girl's Room Peak", image: "30_peek/bg.jpg", nightImage: "30_peek/bgnight.jpg", houseID: 29, btn: "roomBtn_29.png" },
    { roomID: 31, name: "Lola's Puter", image: "31_puter/bg.jpg", nightImage: "31_puter/bg.jpg", houseID: 16, btn: "roomBtn_31.png" },

    { roomID: 50, name: "Lobby", image: "50_lobby/50_lobby.jpg", nightImage: "50_lobby/50_lobbynight.jpg", houseID: 50, btn: "roomBtn_50.png" },
    { roomID: 51, name: "Tif's Living Room", image: "51_livingRoom/livingroom.jpg", nightImage: "51_livingRoom/livingroom.jpg", houseID: 50, btn: "roomBtn_51.png" },
    { roomID: 52, name: "Girly Room", image: "52_myroom/52_myroom.jpg", nightImage: "52_myroom/52_myroom_night.jpg", houseID: 50, btn: "roomBtn_52.png" },
    { roomID: 53, name: "Candy's Room", image: "53_candy/53_candyRoom.jpg", nightImage: "53_candy/53_candyRoom_night.jpg", houseID: 50, btn: "roomBtn_53.png" },
    { roomID: 54, name: "Tiffany's Room", image: "54_tif/tif.jpg", nightImage: "54_tif/tifNight.jpg", houseID: 50, btn: "roomBtn_54.png" },
    { roomID: 55, name: "Tif's Hallway", image: "55_hallway/hallway.jpg", nightImage: "55_hallway/hallway.jpg", houseID: 50, btn: "roomBtn_55.png" },
    { roomID: 56, name: "Tif's Bathroom", image: "56_bathroom/bathroom.jpg", nightImage: "56_bathroom/bathroom.jpg", houseID: 50, btn: "roomBtn_56.png" },
    { roomID: 57, name: "Pussy Palace", image: "57_pussyPalace/bg.jpg", nightImage: "57_pussyPalace/bg.jpg", houseID: 50, btn: "roomBtn_57.png" },
    { roomID: 58, name: "Cam Whore", image: "58_camwhore/bg.jpg", nightImage: "58_camwhore/bg.jpg", houseID: 50, btn: "roomBtn_58.png" },

    { roomID: 75, name: "Bimbo's House", image: "75_bimbo/house.jpg", nightImage: "75_bimbo/houseNight.jpg", houseID: 75, btn: "roomBtn_75.png" },
    { roomID: 76, name: "Bimbo's Room", image: "76_bimboRoom/room.jpg", nightImage: "76_bimboRoom/roomNight.jpg", houseID: 75, btn: "roomBtn_76.png" },
    { roomID: 77, name: "Bimbo's Living Room", image: "77_bimboLiving/livingRoom.jpg", nightImage: "77_bimboLiving/livingRoomNight.jpg", houseID: 75, btn: "roomBtn_76.png" },

    { roomID: 100, name: "Construction Entrance", image: "100_construction/100_site.jpg", nightImage: "100_construction/100_bg_night.jpg", houseID: 100, btn: "roomBtn_100.png" },
    { roomID: 101, name: "Front Office", image: "101_constFrontOffice/101_frontoffice.jpg", nightImage: "101_constFrontOffice/101_frontoffice.jpg", houseID: 100, btn: "roomBtn_101.png" },
    { roomID: 102, name: "Boss's Office", image: "102_constBoss/102_boss.png", nightImage: "102_constBoss/102_boss.png", houseID: 100, btn: "roomBtn_102.png" },
    { roomID: 103, name: "Work", image: "103_constSite/103_sweep.jpg", nightImage: "103_constSite/103_sweepnight.jpg", houseID: 100, btn: "roomBtn_103.png" },

    { roomID: 125, name: "Jimmy's House", image: "125_poker/basement.jpg", nightImage: "125_poker/basement_night.jpg", houseID: 125, btn: "roomBtn_125.png" },

    { roomID: 150, name: "Jones Home", image: "150_jones/frontdoor.jpg", nightImage: "150_jones/frontdoorNight.jpg", houseID: 150, btn: "roomBtn_125.png" },

    { roomID: 200, name: "Missy PI Entrace", image: "200_frontOffice/200_frontOffice.jpg", nightImage: "200_frontOffice/200_frontOffice.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 201, name: "Missy's Bathroom", image: "201_bathroom/201_bathroom.jpg", nightImage: "201_bathroom/201_bathroom.jpg", houseID: 203, btn: "roomBtn_201.png" },
    { roomID: 202, name: "Desk Side", image: "202_sideDesk/202_sideDesk.jpg", nightImage: "202_sideDesk/202_sideDesk.jpg", houseID: 203, btn: "roomBtn_202.png" },
    { roomID: 203, name: "PI Entrance", image: "203_entrance/203_enter.jpg", nightImage: "203_entrance/203_enter.jpg", houseID: 203, btn: "roomBtn_203.png" },
    { roomID: 204, name: "Card Game", image: "204_cardgame/402_bg.jpg", nightImage: "204_cardgame/402_bg.jpg", houseID: 203, btn: "roomBtn_204.png" },
    { roomID: 205, name: "Computer Work", image: "205_computerWork/205_computerWork.png", nightImage: "205_computerWork/205_computerWork.png", houseID: 203, btn: "roomBtn_204.png" },
    { roomID: 206, name: "Questions", image: "206_questions/white.jpg", nightImage: "206_questions/white.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 207, name: "Elevator", image: "207_door/elevator.jpg", nightImage: "207_door/elevator.jpg", houseID: 203, btn: "roomBtn_207.png" },
    { roomID: 208, name: "Red Room", image: "208_red/red.jpg", nightImage: "208_red/red.jpg", houseID: 203, btn: "roomBtn_208.png" },
    { roomID: 209, name: "Basement", image: "209_classroom/bg.jpg", nightImage: "209_classroom/bg.jpg", houseID: 203, btn: "roomBtn_208.png" },

    { roomID: 225, name: "Alley", image: "225_sewer/day.jpg", nightImage: "225_sewer/night.jpg", houseID: 225, btn: "roomBtn_225.png" },
    { roomID: 226, name: "Sewer", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: 225, btn: "roomBtn_225.png" },
    { roomID: 227, name: "Fight", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: 225, btn: "roomBtn_225.png" },
    { roomID: 228, name: "Sewer Entrace", image: "225_sewer/sewer.jpg", nightImage: "225_sewer/sewer.jpg", houseID: 225, btn: "roomBtn_225.png" },


    { roomID: 250, name: "Naked Beaver Diner", image: "250_beaver/250_beaver.jpg", nightImage: "250_beaver/250_beaver.jpg", houseID: 250, btn: "roomBtn_250.png" },
    { roomID: 251, name: "Back Office", image: "251_office/office.jpg", nightImage: "251_office/office.jpg", houseID: 250, btn: "roomBtn_251.png" },

    { roomID: 350, name: "Sperm Bank", image: "350_spermBank/350_spermbank.jpg", nightImage: "350_spermBank/350_spermbank.jpg", houseID: 350, btn: "roomBtn_350.png" },
    { roomID: 351, name: "Mu First Sissygasm", image: "351_spermJackoff/wallBg.jpg", nightImage: "351_spermJackoff/wallBg.jpg", houseID: 350, btn: "roomBtn_350.png" },
    { roomID: 352, name: "Jack 'Em", image: "352_jackoff/bg.jpg", nightImage: "352_jackoff/bg.jpg", houseID: 350, btn: "roomBtn_352.png" },

    { roomID: 400, name: "Mall", image: "400_mall/400_mall_bg.jpg", nightImage: "400_mall/400_mall_bg.jpg", houseID: 400, btn: "roomBtn_400.png" },
    { roomID: 401, name: "Purchase", image: "401_purchase/401_buy.jpg", nightImage: "401_purchase/401_buy.jpg", houseID: 400, btn: "roomBtn_401.png" },
    { roomID: 402, name: "Popular Girl", image: "402_mens/interior.jpg", nightImage: "402_mens/interior.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 403, name: "Saucy", image: "403_saucy/403_saucy.jpg", nightImage: "403_saucy/403_saucy.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 404, name: "Spanky's", image: "404_spankys/404_bodega.jpg", nightImage: "404_spankys/404_bodega.jpg", houseID: 404, btn: "roomBtn_404.png" },
    { roomID: 405, name: "Reds", image: "405_reds/405_stylist.jpg", nightImage: "405_reds/405_stylist.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 406, name: "I Like Your Eyes", image: "406_eyes/bg.jpg", nightImage: "406_eyes/bg.jpg", houseID: 400, btn: "roomBtn_402.png" },

    { roomID: 425, name: "Jail", image: "425_Jail/jail.jpg", nightImage: "425_Jail/jail.jpg", houseID: 225, btn: "roomBtn_402.png" },

    { roomID: 450, name: "Park Entrance", image: "450_park/450_bg.jpg", nightImage: "450_park/450_bg_night.jpg", houseID: 450, btn: "roomBtn_450.png" },
    { roomID: 451, name: "Men's Room", image: "451_parkMensRoom/mensroom.jpg", nightImage: "451_parkMensRoom/mensroom.jpg", houseID: 450, btn: "roomBtn_451.png" },
    { roomID: 452, name: "Woman's Room", image: "452_parkWomansRoom/bathroom.jpg", nightImage: "452_parkWomansRoom/bathroom.jpg", houseID: 450, btn: "roomBtn_452.png" },
    { roomID: 453, name: "Stall", image: "453_stall/453_stall.png", houseID: 450, btn: "roomBtn_453.png" },
    { roomID: 454, name: "Glory Hole", image: "454_gHole/454_gHole.png", nightImage: "454_gHole/454_gHole.png", houseID: 450, btn: "roomBtn_454.png" },
    { roomID: 456, name: "Park Bench", image: "456_bench/456_bg.jpg", nightImage: "456_bench/456_bg_night.jpg", houseID: 450, btn: "roomBtn_454.png" },
    { roomID: 460, name: "Forest Path", image: "460_parkRun/path1.jpg", nightImage: "460_parkRun/path1Night.jpg", houseID: 450, btn: "roomBtn_460.png" },
    { roomID: 461, name: "Run", image: "461_run/path2.jpg", nightImage: "461_run/path2Night.jpg", houseID: 450, btn: "roomBtn_461.png" },
    { roomID: 475, name: "Fight", image: "475_fight/475_path_1.jpg", nightImage: "475_fight/475_path_1.jpg", houseID: 450, btn: "roomBtn_460.png" },
    { roomID: 476, name: "Wander", image: "475_fight/475_fightScene0.png", nightImage: "475_fight/475_fightScene0.png", houseID: 450, btn: "roomBtn_460.png" },

    { roomID: 500, name: "Zoey's House", image: "500_jada/500_zoeyHouseDay.jpg", nightImage: "500_jada/500_zoeyHouseNight.jpg", houseID: 500, btn: "roomBtn_500.png" },
    { roomID: 501, name: "Zoey's Living Room", image: "501_jadaGame/501_game.jpg", nightImage: "501_jadaGame/501_game.jpg", houseID: 500, btn: "roomBtn_501.png" },
    { roomID: 502, name: "Zoey's Bedroom", image: "502_bedroom/bedroom.jpg", nightImage: "502_bedroom/bedroomnight.jpg", houseID: 500, btn: "roomBtn_501.png" },
    { roomID: 503, name: "Zoey's Bathroom", image: "503_bathroom/bathroom.jpg", nightImage: "503_bathroom/bathroom.jpg", houseID: 500, btn: "roomBtn_503.png" },

    { roomID: 525, name: "Zoey's Bar", image: "525_entrance/bg.jpg", nightImage: "525_entrance/bg.jpg", houseID: 525, btn: "roomBtn_500.png" },
    { roomID: 526, name: "Inside Bar", image: "526_bar/bg.jpg", nightImage: "526_bar/bg.jpg", houseID: 525, btn: "roomBtn_526.png" },

    { roomID: 550, name: "Gym Front Desm", image: "550_gymFront/550_gymFront.png", nightImage: "550_gymFront/550_gymFront.png", houseID: 550, btn: "roomBtn_550.png" },
    { roomID: 551, name: "Gym", image: "551_gymInside/551_gym.jpg", nightImage: "551_gymInside/551_gym.jpg", houseID: 550, btn: "roomBtn_551.png" },
    { roomID: 552, name: "Boys Locker", image: "552_boy/lockeroom.jpg", nightImage: "552_boy/lockeroom.jpg", houseID: 550, btn: "roomBtn_552.png" },
    { roomID: 553, name: "Girls Locker", image: "553_girl/553_girl.jpg", nightImage: "552_running/553_girl.jpg", houseID: 550, btn: "roomBtn_553.png" },
    { roomID: 554, name: "Gym Shower", image: "554_shower/552_shower.jpg", nightImage: "554_shower/552_shower.jpg", houseID: 550, btn: "roomBtn_554.png" },
    { roomID: 555, name: "Back Gym", image: "555_backgym/gym.jpg", nightImage: "555_backgym/gym.jpg", houseID: 550, btn: "roomBtn_555.png" },
    { roomID: 556, name: "Spar Training", image: "555_backgym/ring.jpg", nightImage: "555_backgym/ring.jpg", houseID: 550, btn: "roomBtn_555.png" },

    { roomID: 600, name: "For Testing", image: "map/map.png", nightImage: "map/map.png", houseID: 600, btn: "roomBtn_600.png" },

    { roomID: 650, name: "Toys 'n Us", image: "650_toyStore/650_front.jpg", nightImage: "650_toyStore/650_front.jpg", houseID: 650, btn: "roomBtn_650.png" },
    { roomID: 651, name: "T'n U Hallway", image: "651_wackHallway/651_hallway.jpg", nightImage: "651_wackHallway/651_hallway.jpg", houseID: 650, btn: "roomBtn_651.png" },
    { roomID: 661, name: "Peep Hole", image: "661_peephole/661_backroom.jpg", nightImage: "661_peephole/661_backroom.jpg", houseID: 650, btn: "roomBtn_661.png" },

    { roomID: 700, name: "Waiting Room", image: "700_waitingroom/waitingroom.jpg", nightImage: "700_waitingroom/night.jpg", houseID: 700, btn: "roomBtn_700.png" },
    { roomID: 701, name: "Hospital Room", image: "701_hospitalroom/room.jpg", nightImage: "701_hospitalroom/night.jpg", houseID: 700, btn: "roomBtn_701.png" },

    { roomID: 725, name: "Bar", image: "725_club/club.jpg", nightImage: "725_club/club.jpg", houseID: 725, btn: "roomBtn_725.png" },
    { roomID: 726, name: "Dance Floor", image: "726_dance/dance.jpg", nightImage: "726_dance/dance.jpg", houseID: 725, btn: "roomBtn_726.png" },
    { roomID: 727, name: "Unisex Bathroom", image: "727_bathroom/bg.jpg", nightImage: "727_bathroom/bg.jpg", houseID: 725, btn: "roomBtn_726.png" },

    { roomID: 750, name: "Homeless Camp", image: "750_homeless/bg.jpg", nightImage: "750_homeless/bgNight.jpg", houseID: 750, btn: "roomBtn_726.png" },

    { roomID: 900, name: "College Entrance", image: "900_college/900_college.png", nightImage: "900_college/900_college.png", houseID: 900, btn: "roomBtn_900.png" },
    { roomID: 901, name: "Pool", image: "901_pool/pool.jpg", nightImage: "901_pool/pool.jpg", houseID: 901, btn: "roomBtn_901.png" },
    { roomID: 902, name: "Girl's Swim Locker", image: "902_girl/bg.jpg", nightImage: "902_girl/bg.jpg", houseID: 901, btn: "roomBtn_902.png" },
    { roomID: 903, name: "Boy's Swim Locker", image: "903_boy/bg.jpg", nightImage: "903_boy/bg.jpg", houseID: 901, btn: "roomBtn_903.png" },

    { roomID: 910, name: "Department Of Licenses", image: "910_gov/bg.jpg", nightImage: "910_gov/910_gov.png", houseID: 910, btn: "bg.jpg" }

    //{ roomID: , name: "", image: "", houseID: , main: false, btn: "roomBtn_.png" }
];

g.roomMap = [
    { roomID: 16, access: true, darkAccess: true, left: 1425, top: 399, width: 102, height: 146, img: "map/10.png", night: "map/10_night.png", map: 1 },
    { roomID: 29, access: true, darkAccess: true, left: 1353, top: 393, width: 70, height: 158, img: "map/29.png", night: "map/29_night.png", map: 1 },
    { roomID: 50, access: true, darkAccess: true, left: 1665, top: 559, width: 218, height: 319, img: "map/50.png", night: "map/50_night.png", map: 1 },
    { roomID: 75, access: false, darkAccess: false, left: 895, top: 407, width: 102, height: 122, img: "map/75.png", night: "map/75_night.png", map: 1 },
    { roomID: 100, access: false, darkAccess: false, left: 1458, top: 0, width: 323, height: 282, img: "map/100.png", night: "map/100_night.png", map: 2 },
    { roomID: 125, access: true, darkAccess: true, left: 714, top: 435, width: 60, height: 97, img: "map/125.png", night: "map/125_night.png", map: 1 },
    { roomID: 150, access: false, darkAccess: false, left: 1643, top: 20, width: 222, height: 211, img: "map/150.png", night: "map/150_night.png", map: 1 },
    { roomID: 203, access: false, darkAccess: false, left: 1456, top: 263, width: 207, height: 340, img: "map/203.png", night: "map/203_night.png", map: 2 },
    { roomID: 225, access: true, darkAccess: true, left: 765, top: 760, width: 78, height: 190, img: "map/225.png", night: "map/225_night.png", map: 2 },
    { roomID: 250, access: true, darkAccess: false, left: 24, top: 304, width: 224, height: 160, img: "map/250.png", night: "map/250_night.png", map: 2 },
    { roomID: 350, access: true, darkAccess: false, left: 74, top: 672, width: 291, height: 207, img: "map/350.png", night: "map/350_night.png", map: 2 },
    { roomID: 400, access: true, darkAccess: false, left: 530, top: 0, width: 308, height: 212, img: "map/400.png", night: "map/400_night.png", map: 2 },
    { roomID: 404, access: true, darkAccess: true, left: 530, top: 375, width: 93, height: 126, img: "map/404.png", night: "map/404_night.png", map: 1 },
    { roomID: 405, access: true, darkAccess: false, left: 230, top: 469, width: 163, height: 129, img: "map/405.png", night: "map/405_night.png", map: 2 },
    { roomID: 406, access: true, darkAccess: false, left: 962, top: 408, width: 88, height: 95, img: "map/406.png", night: "map/406_night.png", map: 2 },
    { roomID: 450, access: true, darkAccess: true, left: 1513, top: 638, width: 138, height: 126, img: "map/450.png", night: "map/450_night.png", map: 0 },
    { roomID: 500, access: true, darkAccess: false, left: 781, top: 51, width: 197, height: 142, img: "map/500.png", night: "map/500_night.png", map: 1 },
    { roomID: 525, access: true, darkAccess: true, left: 1162, top: 693, width: 152, height: 276, img: "map/525.png", night: "map/525_night.png", map: 2 },
    { roomID: 550, access: true, darkAccess: false, left: 1072, top: 370, width: 238, height: 179, img: "map/550.png", night: "map/550_night.png", map: 2 },
    { roomID: 650, access: true, darkAccess: false, left: 1459, top: 712, width: 222, height: 215, img: "map/650.png", night: "map/650_night.png", map: 2 },
    { roomID: 700, access: true, darkAccess: true, left: 506, top: 246, width: 392, height: 282, img: "map/700.png", night: "map/700_night.png", map: 2 },
    { roomID: 725, access: false, darkAccess: true, left: 531, top: 688, width: 206, height: 194, img: "map/725.png", night: "map/725_night.png", map: 2 },
    { roomID: 750, access: true, darkAccess: true, left: 1663, top: 391, width: 162, height: 208, img: "map/750.png", night: "map/750_night.png", map: 2 },
    { roomID: 901, access: true, darkAccess: false, left: 714, top: 675, width: 142, height: 86, img: "map/901.png", night: "map/901_night.png", map: 1 },
    { roomID: 910, access: true, darkAccess: false, left: 1260, top: 646, width: 253, height: 162, img: "map/910.png", night: "map/910_night.png", map: 1 },

    { roomID: 2000, access: false, darkAccess: false, left: 539, top: 683, width: 140, height: 258, img: "map/2000.png", night: "map/2000_night.png", map: 1 },
    { roomID: 2001, access: false, darkAccess: false, left: 879, top: 630, width: 225, height: 235, img: "map/2001.png", night: "map/2001_night.png", map: 1 },
    { roomID: 2003, access: false, darkAccess: false, left: 1144, top: 399, width: 135, height: 113, img: "map/2003.png", night: "map/2003_night.png", map: 1 },
    //{ roomID: 100, access: false, left: 500, top: 300, width: 300, height: 150, activeImg: "map/constructionSite.png", inactiveImg: "map/inactive.png" },
];

g.fmap;

//FUNCTIONS==========================================================================================================================================================================

g.roomMapAccess = function (roomID, access, darkAccess) {
    var i;
    for (i = 0; i < g.roomMap.length; i++) {
        if (g.roomMap[i].roomID === roomID) {
            g.roomMap[i].access = access;
            g.roomMap[i].darkAccess = darkAccess;
        }
    }
};

g.hasAccess = function (roomID) {
    var retVal = { access: false, darkAccess: false };
    var i;
    for (i = 0; i < g.roomMap.length; i++) {
        if (g.roomMap[i].roomID === roomID) {
            retVal.access = g.roomMap[i].access;
            retVal.darkAccess = g.roomMap[i].darkAccess;
        }
    }
    return retVal;
};

g.setRatio = function () {
    var width = $(window).width();
    var height = $(window).height();
    g.ratio = width / height > 16 / 9 ? height / 1080 : width / 1920;
    var btnWidth = 300 * g.ratio;
    var btnHeight = 620 * g.ratio;
    $('.char-container').css({ "width": btnWidth, "height": btnHeight });
    $('#char-bg').css({ "width": btnWidth, "height": btnHeight });

    
};

g.error = function (id, details) {
    console.log("id: " + id + " -- " + details);
};

g.dow = function (dt) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[dt.getDay()];
};

g.hourBetween = function (startTime, endTime) {
    return g.dt.getHours() >= startTime && g.dt.getHours() <= endTime;
};

g.diffDatesByDays = function (startDate, endDate) {
    return Math.floor((startDate - endDate) / (1000 * 60 * 60 * 24));
};

g.diffDateByMinutes = function (startDate, endDate) {
    return Math.floor((startDate - endDate) / (1000 * 60));
};

g.room = function (roomID) {
    return "room" + roomID.toString();
};

Number.prototype.between = function (a, b) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return this > min && this <= max;
};

g.shuffleArray = function (array) {
    var temp, randIndex;
    for (i = 0; i < array.length; i++) {
        randIndex = Math.floor(Math.random() * array.length);
        temp = array[i];
        array[i] = array[randIndex];
        array[randIndex] = temp;
    }
    return array;
};

g.isNight = function () {
    if (g.hourBetween(6, 19))
        return false;
    return true;
};

g.cleanText = function (thisInput) {
    var tempcleanText = $('<div/>').text(thisInput).html();
    tempcleanText = tempcleanText.split('"').join('&quot;');
    tempcleanText = tempcleanText.split("'").join('&apos;');
    return tempcleanText;
};

g.rand = function (lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
};

g.makeCss = function (height, width, top, left) {
    return " height:" + (height * g.ratio) + "px; width:" + (width * g.ratio) + "px; top:" + (top * g.ratio) + "px; left:" + (left * g.ratio) + "px; ";
};

g.cssText = function (size) {
    var baseFontSize = 24;
    if (size !== undefined) {
        if (size === "s")
            baseFontSize = 16;
        else if (size === "l")
            baseFontSize = 64;
        else if (size === "super")
            baseFontSize = 128;
    }
    return " font-size: " + (baseFontSize * g.ratio) + "px; ";
};

g.shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

g.makeSingular = function (text) {
    text = text.trim();
    if (text.substr(text.length - 1).toLowerCase() === "s")
        text = text.slice(-1);
    if (text.substr(0, text.length - 1) === "'")
        text = text.slice(-1);
    return text;
};

g.save = function () {
    var i;
    var retArra = {
        st: new Array(),
        roomMap: new Array(),
        roomID: g.roomID,
        dt: g.dt, 
        sissy: new Array()
    };

    for (i = 0; i < g.st.length; i++) {
        retArra.st.push({
            n: g.st[i].n,
            t: g.st[i].t
        });
    }
    for (i = 0; i < g.roomMap.length; i++) {
        retArra.roomMap.push({
            roomID: g.roomMap[i].roomID,
            access: g.roomMap[i].access,
            darkAccess: g.roomMap[i].darkAccess
        });
    }

    for (i = 0; i < g.sissy.length; i++) {
        if (g.sissy[i].ach)
            retArra.sissy.push(i);
    }

    return retArra;
};

g.load = function (rma) {
    var i, j, ksissy;
    g.initGame();
    g.roomID = rma.roomID;
    g.dt = new Date(rma.dt);
    g.prevview = null;

    for (i = 0; i < rma.roomMap.length; i++) {
        for (j = 0; j < g.roomMap.length; j++) {
            if (rma.roomMap[i].roomID === g.roomMap[j].roomID) {
                g.roomMap[j].access = rma.roomMap[i].access;
                g.roomMap[j].darkAccess = rma.roomMap[i].darkAccess;
                j = 100000;
            }
        }
    }

    for (i = 0; i < rma.st.length; i++) {
        for (j = 0; j < g.st.length; j++) {
            if (g.st[j] === "g_sissy")
                ksissy = j;
            if (rma.st[i].n === g.st[j].n) {
                if (g.st[j].q === "date")
                    g.st[j].t = new Date(rma.st[i].t);
                else
                    g.st[j].t = rma.st[i].t;
                j = 999999;
            }
        }
    }
    for (i = 0; i < g.sissy.length; i++)
        g.sissy[i].ach = false;
    if ("sissy" in rma) {
        for (i = 0; i < rma.sissy.length; i++)
            g.sissy[rma.sissy[i]].ach = true;
    }
};

g.initGame = function () {
    var i;
    g.roomID = 7;
    //$("#room_left_map").hide();
    g.dt = char.addMinutes(g.startDate, 757);
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "slimeMonsters":
            case "pill":
            case "knockedup":
            case "oncase":
                g.st[i].t = null;
                break;
            case "shower":
                g.st[i].t = char.addMinutes(g.startDate, -4320);
                break;
            case "cum":
                g.st[i].t = char.addMinutes(g.startDate, -757);
                break;
            case "money":
                g.st[i].t = 450;
                break;
            case "rent":
                g.st[i].t = 200;
                break;
            case "energy":
                g.st[i].t = 95;
                break;
            case "maxenergy":
                g.st[i].t = 100;
                break;
            case "map":
                g.st[i].t = "map_1";
                break;
            case "rentOwed":
            case "arousal":
            case "rentKnockOff":
            case "fitness":
            case "hormone":
            case "leg":
            case "d":
            case "body":
            case "sissy":
            case "legLevel":
            case "bodyLevel":
            case "fitnessLevel":
            case "sissyLevel":
            case "dLevel":
            case "jobConstructionPay":
            case "jobConstWorkToday":
            case "giveOralMale":
            case "giveOralFemale":
            case "receiveOralMale":
            case "receiveOralFemale":
            case "loadSwollowed":
            case "loadSpit":
            case "creamPied":
            case "giveAnalMale":
            case "giveAnalFemale":
            case "receiveAnalMale":
            case "receiveAnalFemale":
            case "giveHandjobMale":
            case "giveFingerFemale":
            case "receiveHandjobMale":
            case "receiveHandjobFemale":
            case "giveFootjobMale":
            case "giveFootjobFemale":
            case "receiveFootjobMale":
            case "receiveFootjobFemale":
            case "fuckPussy":
            case "getPussyFucked":
            case "pissedonMale":
            case "pissedonFemale":
            case "receiveBoobJob":
            case "giveBoobJob":
            case "shinkCock":
            case "makeup":
            case "sewerEnd":
            case "sissyPoints":
            case "sewerID":
            case "momearnbackhome":
                g.st[i].t = 0;
                break;
            case "bodyhair":
                g.st[i].t = 100;
                break;
            case "momClosetLube":
                g.st[i].t = 3;
                break;
            case "momClosetMoney":
                g.st[i].t = 7;
                break;
            case "bladder":
                g.st[i].t = 0;
                break;
            case "painting":
            case "sewerMap":
                g.st[i].t = "";
                break;
            case "girlname":
                g.st[i].t = "Scarlett";
                break;
            case "lockboobs":
            case "lockbutt":
            case "enterSister":
            case "jobConstGetRaise":
            case "evaDayEvent":
            case "lolaDayEvent":
            case "tiffanyDayEvent":
            case "candyDayEvent":
            case "momChore":
            case "zoeyDay":
            case "choreDishes":
            case "showerPeek":
            case "momRaidCloset":
            case "tookHormonePill":
            case "gworkout":
            case "cardgame":
            case "bigguy":
            case "momchat":
            case "buttholeplay":
            case "reddoor":
            case "cultrun":
            case "autohormone":
            case "chastityLock":
            case "lockdrawer":
            case "puter":
            case "tim":
            case "cindy":
            case "doc":
            case "chloe":
                g.st[i].t = false;
                break;
            case "reddoorloc":
                g.st[i].t = Math.floor(Math.random() * 8);
                break;
            case "difficulty":
            case "fighttimer":
                break;
            default:
                console.log("unknown load: " + g.st[i].n);
        }
    }
};